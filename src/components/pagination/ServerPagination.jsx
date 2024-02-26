'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ServerPagination = ({
  isPageOutOfRange,
  page,
  pageNumbers,
  prevPage,
  nextPage,
  totalPages,
}) => {
  const searchParams = useSearchParams();
  const searchParamsCopy = {};
  searchParams.forEach((value, key) => {
    searchParamsCopy[key] = value;
  });
  const removeFields = ['per_page', 'page'];
  removeFields.forEach((el) => delete searchParamsCopy[el]);
  console.log(searchParamsCopy);
  const prevSearchParams =
    `/catalog?` + queryString.stringify(searchParamsCopy);

  return (
    <>
      {isPageOutOfRange ? (
        <div>No mas pedidos...</div>
      ) : (
        <div className="flex justify-center items-center mt-16  maxsm:mt-5">
          <div className="flex border-[1px] gap-4 rounded-[10px] border-light-green p-4">
            {page === 1 ? (
              <div
                aria-disabled="true"
                className="opacity-60 bg-black w-10 h-10 flex justify-center items-center disabled:bg-slate-300 text-white p-2  rounded-full text-xl"
              >
                <FiChevronLeft />
              </div>
            ) : (
              <Link
                href={`${prevSearchParams}&page=${prevPage}`}
                aria-label="Previous Page"
                className="bg-black w-10 h-10 flex justify-center items-center disabled:bg-slate-300 text-white p-2  rounded-full text-xl"
              >
                <FiChevronLeft />
              </Link>
            )}

            {pageNumbers.map((pageNumber, index) => (
              <Link
                key={index}
                className={
                  page === pageNumber
                    ? 'bg-black fw-bold px-2 w-10 h-10 flex justify-center items-center text-white rounded-full'
                    : 'hover:bg-black px-1 rounded-full w-10 h-10 flex justify-center items-center hover:text-white'
                }
                href={`${prevSearchParams}&page=${pageNumber}`}
              >
                {pageNumber}
              </Link>
            ))}

            {page === totalPages ? (
              <div
                className="opacity-60 bg-black w-10 h-10 flex justify-center items-center disabled:bg-slate-300 text-white p-2  rounded-full text-xl"
                aria-disabled="true"
              >
                <FiChevronRight />
              </div>
            ) : (
              <Link
                href={`${prevSearchParams}&page=${nextPage}`}
                aria-label="Next Page"
                className="bg-black w-10 h-10 flex justify-center items-center disabled:bg-slate-300 text-white p-2  rounded-full text-xl"
              >
                <FiChevronRight />
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ServerPagination;
