'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const myLoader = ({ src, width, quality }) => {
  return `https://minio.salvawebpro.com:9000/eleganza-products/new/${src}?w=${width}&q=${
    quality || 75
  }`;
};
const products = [];
const QuoteForm = ({
  templateID,
  serviceID,
  publicKEY,
  contactform,
  productData,
  lang,
}) => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [activeButton, setActiveButton] = useState(false);
  //email js service Ids
  const templateId = templateID;
  const serviceId = serviceID;
  const publicKey = publicKEY;

  useEffect(() => {
    let url = '';
    productData.map((product) => {
      url = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/${lang}/product/${product._id}`;
      products.push(url);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveButton(true);

    // create a new object that contains dynamic params
    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      to_name: 'Lupita Eleganza Bridal',
      message: message,
      from_products: products,
    };

    //send email using email js
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        router.push('/');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="relative  p-7 m-auto w-full rounded-xl z-10">
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
      <form onSubmit={handleSubmit} className="">
        <h2 className="pb-4">Productos</h2>
        <div className="flex flex-row items-center justify-start gap-3 pb-10">
          {productData?.map((product, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 text-center"
              >
                <Image
                  loader={myLoader}
                  src={product?.mainImageUrl}
                  width={100}
                  height={100}
                  alt="product image"
                  className="w-16 h-16 object-fit"
                />

                <input
                  type="text"
                  placeholder={product.title}
                  defaultValue={product.title}
                  className="text-center text-xs"
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col w-full gap-y-4">
          <input
            type="text"
            placeholder={contactform.inputname}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border-black border-b font-playfair-display"
          />
          <div className="grid grid-cols-2  pt-2 ">
            <input
              type="email"
              placeholder={contactform.inputemail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 mr-4 border-black border-b font-playfair-display"
            />
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              placeholder={contactform.inputphone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 border-black border-b font-playfair-display"
            />
          </div>
          <textarea
            cols="30"
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 border-black border-b font-playfair-display"
          ></textarea>
          <div
            className="g-recaptcha"
            data-sitekey="6LcWFCMpAAAAAJW3GoSOVAV1MgEpXNZI4-maDWHf
"
          ></div>
          <br />
          <button type="submit" className="mt-5" disabled={activeButton}>
            <p className="bg-black  text-white py-3">Get Quote</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
