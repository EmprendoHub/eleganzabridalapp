'use server';
import dbConnect from '@/lib/db';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import {
  ClientPasswordUpdateSchema,
  ClientUpdateSchema,
  PageEntrySchema,
  PageUpdateSchema,
  PostEntrySchema,
  PostUpdateSchema,
  ProductEntrySchema,
  VariationProductEntrySchema,
  VariationUpdateProductEntrySchema,
  VerifyEmailSchema,
} from '@/lib/schemas';
import { revalidatePath } from 'next/cache';
import Product from '@/models/Product';
import User from '@/models/User';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import axios from 'axios';
import { cstDateTime, generateUrlSafeTitle } from '../backend/helpers';
import APIFilters from '@/lib/APIFilters';

export async function getOneProduct(slug, id) {
  //const session = await getServerSession(options);
  try {
    await dbConnect();
    let product;
    if (id) {
      product = await Product.findOne({ _id: id });
    } else {
      product = await Product.findOne({ slug: slug });
    }
    let trendingProducts = await Product.find({
      category: product.category,
      _id: { $ne: product._id },
    }).limit(4);
    // convert to string
    product = JSON.stringify(product);
    trendingProducts = JSON.stringify(trendingProducts);
    return { product: product, trendingProducts: trendingProducts };
    // return { product };
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

export async function getAllProduct(searchQuery) {
  try {
    await dbConnect();
    const session = await getServerSession(options);
    let productQuery;
    if (session) {
      if (session?.user?.role === 'manager') {
        productQuery = Product.find();
      }
    } else {
      productQuery = Product.find({ published: true });
    }

    const searchParams = new URLSearchParams(searchQuery);
    const resPerPage = Number(searchParams.get('perpage')) || 5;
    // Extract page and per_page from request URL
    const page = Number(searchParams.get('page')) || 1;
    // total number of documents in database
    const productsCount = await Product.countDocuments();
    // Extract all possible categories
    let allCategories = await Product.distinct('category');
    // Extract all possible categories
    let allBrands = await Product.distinct('brand');
    // Apply search Filters
    const apiProductFilters = new APIFilters(productQuery, searchParams)
      .searchAllFields()
      .filter();

    let productsData = await apiProductFilters.query;

    const filteredProductsCount = productsData.length;

    apiProductFilters.pagination(resPerPage, page);
    productsData = await apiProductFilters.query.clone();

    // If you want a new sorted array without modifying the original one, use slice
    // const sortedObj1 = obj1
    //   .slice()
    //   .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

    // descending order
    // descending order
    let sortedProducts = productsData
      .slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    sortedProducts = JSON.stringify(sortedProducts);
    allCategories = JSON.stringify(allCategories);
    allBrands = JSON.stringify(allBrands);

    return {
      products: sortedProducts,
      productsCount: productsCount,
      filteredProductsCount: filteredProductsCount,
      allCategories: allCategories,
      allBrands: allBrands,
    };
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

export async function updateClientPassword(data) {
  let { _id, newPassword, currentPassword, updatedAt } =
    Object.fromEntries(data);

  updatedAt = new Date(updatedAt);

  try {
    // validate form data
    const result = ClientPasswordUpdateSchema.safeParse({
      newPassword: newPassword,
      currentPassword: currentPassword,
      updatedAt: updatedAt,
    });

    //check for errors
    const { error: zodError } = result;
    if (zodError) {
      return { error: zodError.format() };
    }

    await dbConnect();
    let CustomZodError;
    let hashedPassword;
    const client = await User.findOne({ _id: _id }).select('+password');
    const comparePass = await bcrypt.compare(currentPassword, client.password);
    if (!comparePass) {
      CustomZodError = {
        _errors: [],
        currentPassword: {
          _errors: ['La contraseña actual no es la correcta'],
        },
      };
      return { error: CustomZodError };
    } else {
      hashedPassword = await bcrypt.hash(newPassword, 10);
    }

    client.password = hashedPassword;
    client.updatedAt = updatedAt;
    client.save();
    revalidatePath('/perfil/actualizar_contrasena');
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

export async function addProduct(data) {
  const session = await getServerSession(options);
  const user = { _id: session?.user?._id };

  let {
    title,
    description,
    category,
    cost,
    price,
    sizes,
    tags,
    colors,
    featured,
    images,
    brand,
    gender,
    salePrice,
    salePriceEndDate,
    stock,
    createdAt,
  } = Object.fromEntries(data);
  // Parse images as JSON
  images = JSON.parse(images);
  sizes = JSON.parse(sizes);
  tags = JSON.parse(tags);
  console.log(tags, 'tags');
  colors = JSON.parse(colors);
  stock = Number(stock);
  cost = Number(cost);
  price = Number(price);
  const sale_price = Number(salePrice);
  const sale_price_end_date = salePriceEndDate;

  createdAt = new Date(createdAt);

  // validate form data
  const result = ProductEntrySchema.safeParse({
    title: title,
    description: description,
    brand: brand,
    category: category,
    colors: colors,
    sizes: sizes,
    tags: tags,
    images: images,
    gender: gender,
    stock: stock,
    price: price,
    cost: cost,
    createdAt: createdAt,
  });

  //check for errors
  const { error: zodError } = result;
  if (zodError) {
    return { error: zodError.format() };
  }
  // Create a new Product in the database
  await dbConnect();
  const slug = generateUrlSafeTitle(title);
  const slugExists = await Post.findOne({ slug: slug });
  if (slugExists) {
    return {
      error: {
        title: { _errors: ['Este Titulo de producto ya esta en uso'] },
      },
    };
  }
  const { error } = await Product.create({
    type: 'simple',
    title,
    slug,
    description,
    featured,
    brand,
    gender,
    category,
    colors,
    sizes,
    tags,
    images,
    stock,
    price,
    sale_price,
    sale_price_end_date,
    cost,
    createdAt,
    user,
  });
  if (error) throw Error(error);
  revalidatePath('/admin/productos');
  revalidatePath('/tienda');
}

export async function resendEmail(data) {
  let { email, gReCaptchaToken } = Object.fromEntries(data);
  const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;

  //check for errors
  const { error: zodError } = VerifyEmailSchema.safeParse({
    email,
  });
  if (zodError) {
    return { error: zodError.format() };
  }

  const formData = `secret=${secretKey}&response=${gReCaptchaToken}`;
  let res;
  try {
    res = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      formData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  } catch (e) {
    console.log('recaptcha error:', e);
  }

  if (res && res.data?.success && res.data?.score > 0.5) {
    // Save data to the database from here
    try {
      await dbConnect();
      const user = await User.findOne({ email: email });
      if (!user) {
        return { error: { email: { _errors: ['Email does not exist'] } } };
      }
      if (user?.isActive === true) {
        return { error: { email: { _errors: ['Email is already verified'] } } };
      }
      if (user?._id) {
        try {
          const subject = 'Confirmar email';
          const body = `Por favor da click en confirmar email para verificar tu cuenta.`;
          const title = 'Completar registro';
          const greeting = `Saludos ${user?.name}`;
          const action = 'CONFIRMAR EMAIL';
          const bestRegards = 'Gracias por unirte a nuestro sitio.';
          const recipient_email = email;
          const sender_email = 'contacto@shopout.com.mx';
          const fromName = 'Shopout Mx';

          const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: process.env.GOOGLE_MAIL,
              pass: process.env.GOOGLE_MAIL_PASS_ONE,
            },
          });

          try {
            // Verify your transporter
            //await transporter.verify();

            const mailOptions = {
              from: `"${fromName}" ${sender_email}`,
              to: recipient_email,
              subject,
              html: `
        <!DOCTYPE html>
        <html lang="es">
        <body>
        <p>${greeting}</p>
        <p>${title}</p>
        <div>${body}</div>
        <a href="${process.env.NEXTAUTH_URL}/exito?token=${user?.verificationToken}">${action}</a>
        <p>${bestRegards}</p>
        </body>
        
        </html>
        
        `,
            };
            await transporter.sendMail(mailOptions);

            return {
              error: {
                success: {
                  _errors: [
                    'El correo se envió exitosamente revisa tu bandeja de entrada y tu correo no deseado',
                  ],
                },
              },
            };
          } catch (error) {
            console.log(error);
          }
        } catch (error) {
          return { error: { email: { _errors: ['Error al enviar email'] } } };
        }
      }
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  } else {
    return {
      error: {
        email: { _errors: [`Failed Google Captcha Score: ${res.data?.score}`] },
      },
    };
  }
}

export async function resetAccountEmail(data) {
  let { email, gReCaptchaToken } = Object.fromEntries(data);
  const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;

  //check for errors
  const { error: zodError } = VerifyEmailSchema.safeParse({
    email,
  });
  if (zodError) {
    return { error: zodError.format() };
  }

  const formData = `secret=${secretKey}&response=${gReCaptchaToken}`;
  let res;
  try {
    res = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      formData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  } catch (e) {
    console.log('recaptcha error:', e);
  }

  if (res && res.data?.success && res.data?.score > 0.5) {
    // Save data to the database from here
    try {
      await dbConnect();
      const user = await User.findOne({ email: email });
      if (!user) {
        return { error: { email: { _errors: ['El correo no existe'] } } };
      }
      if (user?.active === false) {
        return {
          error: { email: { _errors: ['El correo no esta verificado'] } },
        };
      }
      if (user?._id) {
        try {
          const subject = 'Desbloquear Cuenta Shopout Mx';
          const body = `Por favor da click en desbloquear para reactivar tu cuenta`;
          const title = 'Desbloquear Cuenta';
          const btnAction = 'DESBLOQUEAR';
          const greeting = `Saludos ${user?.name}`;
          const bestRegards =
            '¿Problemas? Ponte en contacto contacto@shopout.com.mx';
          const recipient_email = email;
          const sender_email = 'contacto@shopout.com.mx';
          const fromName = 'Shopout Mx';

          const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: process.env.GOOGLE_MAIL,
              pass: process.env.GOOGLE_MAIL_PASS_ONE,
            },
          });

          const mailOption = {
            from: `"${fromName}" ${sender_email}`,
            to: recipient_email,
            subject,
            html: `
              <!DOCTYPE html>
              <html lang="es">
              <body>
              <p>${greeting}</p>
              <p>${title}</p>
              <div>${body}</div>
              <a href="${process.env.NEXTAUTH_URL}/reiniciar?token=${user?.verificationToken}">${btnAction}</a>
              <p>${bestRegards}</p>
              </body>
              
              </html>
              
              `,
          };

          await transporter.sendMail(mailOption);

          return {
            error: {
              success: {
                _errors: [
                  'El correo electrónico fue enviado exitosamente revisa tu bandeja de entrada y spam',
                ],
              },
            },
          };
        } catch (error) {
          return { error: { email: { _errors: ['Failed to send email'] } } };
        }
      }
    } catch (error) {
      if (error) throw Error(error);
    }
  } else {
    return {
      error: {
        email: { _errors: [`Failed Google Captcha Score: ${res.data?.score}`] },
      },
    };
  }
}
