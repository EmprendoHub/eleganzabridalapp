import SingleProductComponent from '@/components/productComponents/singleProduct/SingleProductComponent';
import { getDictionary } from '@/lib/dictionary';

const ProductDetailsPage = async (ctx) => {
  const { singleprod } = await getDictionary(ctx.params.lang);
  return (
    <div className="">
      <SingleProductComponent
        ctx={ctx}
        lang={ctx.params.lang}
        singleprod={singleprod}
      />
    </div>
  );
};

export default ProductDetailsPage;
