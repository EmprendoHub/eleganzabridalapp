import React from 'react';
import ProductCatalog from '@/components/productComponents/productCatalog/ProductCatalog';
import queryString from 'query-string';
import PaginationControllerComponent from '@/components/pagination/PaginationComponent';
import MobileFilterComponet from '@/components/productComponents/productCatalog/mobileFilter/MobileFilterComponet';

const getProducts = async (searchParams) => {
  const BASE_URL = 'https://www.eleganzabridal-lv.com/api/products';
  //const BASE_URL = 'http://localhost:3000/api/products';
  const urlParams = {
    keyword: searchParams.keyword,
    category: searchParams.category,
    brand: searchParams.brand,
  };

  const searchQuery = queryString.stringify(urlParams);
  const res = await fetch(`${BASE_URL}?${searchQuery}`, { cache: 'no-store' });
  const docs = await res.json();

  let data = docs;

  return data;
};

const CatalogPage = async ({ searchParams, params: { lang } }) => {
  const productsData = await getProducts(searchParams);
  const page = searchParams['page'] ?? '1';
  const per_page = searchParams['per_age'] ?? '8';
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  let entries = productsData.products;
  let allCategories = productsData.allCategories;
  let allBrands = productsData.allBrands;

  const totalProductCount = entries.length;

  entries = entries.slice(start, end);
  return (
    <div className="flex flex-col">
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
      <PaginationControllerComponent
        hasNextPage={end < totalProductCount}
        hasPrevPage={start > 0}
        totalProductCount={totalProductCount}
        lang={lang}
      />
      <div className="mb-5" />
    </div>
  );
};

export default CatalogPage;
