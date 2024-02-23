import SingleProductComponent from '@/components/productComponents/singleProduct/SingleProductComponent';
import { getDictionary } from '@/lib/dictionary';
import { getOneProduct } from '../../_actions';

const getOneAndFourRelated = async (id) => {
  const data = await getOneProduct(null, id);
  const product = JSON.parse(data.product);
  return data;
};

const ProductDetailsPage = async (ctx) => {
  const { singleprod } = await getDictionary(ctx.params.lang);
  const id = ctx.params.id;
  const data = await getOneProduct(null, id);
  const product = JSON.parse(data.product);
  const trendingProducts = JSON.parse(data.trendingProducts);

  return (
    <div className="">
      <SingleProductComponent
        ctx={ctx}
        lang={ctx.params.lang}
        singleprod={singleprod}
        product={product}
        trendingProducts={trendingProducts}
      />
    </div>
  );
};

export default ProductDetailsPage;
