import React from 'react';
import ProductCatalog from '@/components/productComponents/productCatalog/ProductCatalog';
import MobileFilterComponet from '@/components/productComponents/productCatalog/mobileFilter/MobileFilterComponet';
import InnerSectionTextComponent from '@/components/texts/InnerSectionTextComponent';
import { getAllProduct } from '../_actions';
import ServerPagination from '@/components/pagination/ServerPagination';

const CatalogPage = async ({ searchParams, params: { lang } }) => {
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    brand: searchParams.brand,
  };
  console.log(urlParams);
  const filteredUrlParams = Object.fromEntries(
    Object.entries(urlParams).filter(([key, value]) => value !== undefined)
  );
  console.log(filteredUrlParams);
  const searchQuery = new URLSearchParams(filteredUrlParams).toString();
  const data = await getAllProduct(searchQuery);
  let entries = JSON.parse(data.products);
  let allCategories = JSON.parse(data.allCategories);
  let allBrands = JSON.parse(data.allBrands);

  const totalProductCount = entries.length;

  // pagination
  let page = parseInt(searchParams.page, 10);
  page = !page || page < 1 ? 1 : page;
  const perPage = 12;
  const itemCount = data?.productsCount;
  const totalPages = Math.ceil(data.filteredProductsCount / perPage);
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;
  const isPageOutOfRange = page > totalPages;
  const pageNumbers = [];
  const offsetNumber = 1;
  for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
    if (i >= 1 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }
  return (
    <div className="flex flex-col">
      <div className="py-7" />
      <InnerSectionTextComponent
        title={`Amazing dresses for a special occasion.`}
        paraOne={`Explore our wide variety of designers and styles, find the perfect dress for any occasion`}
      />
      <div className="flex flex-col">
        <MobileFilterComponet
          allBrands={allBrands}
          allCategories={allCategories}
          lang={lang}
        />
        <div className="mb-5" />

        <ProductCatalog data={entries} lang={lang} />
      </div>
      <div className="mt-5" />
      <ServerPagination
        isPageOutOfRange={isPageOutOfRange}
        page={page}
        pageNumbers={pageNumbers}
        prevPage={prevPage}
        nextPage={nextPage}
        totalPages={totalPages}
      />

      <div className="mb-5" />
    </div>
  );
};

export default CatalogPage;
