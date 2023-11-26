import SingleProductComponent from '@/components/productComponents/singleProduct/SingleProductComponent';
import { getDictionary } from '@/lib/dictionary';

const getOneAndFourRelated = async (id) => {
  //const URL_ONE = `https://www.eleganzabridal-lv.com/api/product?${id}`;
  const URL_ONE = `http://localhost:3000/api/product?${id}`;
  const res = await fetch(URL_ONE, { cache: 'no-store' });
  const data = res.json();
  return data;
};

const ProductDetailsPage = async (ctx) => {
  const { singleprod } = await getDictionary(ctx.params.lang);
  const id = ctx.params.id;
  const productData = await getOneAndFourRelated(id);
  const relatedProducts = productData.fourRelated;
  const oneProduct = productData.product;

  return (
    <div className="">
      <SingleProductComponent
        ctx={ctx}
        lang={ctx.params.lang}
        singleprod={singleprod}
        product={oneProduct}
        trendingProducts={relatedProducts}
      />
    </div>
  );
};

export default ProductDetailsPage;
