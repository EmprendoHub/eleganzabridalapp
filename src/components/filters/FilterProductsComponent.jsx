'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const FilterProductsComponent = () => {
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const router = useRouter();
  let queryParams;

  function hnadleCheckBocClick(checkbox) {
    if (typeof window !== 'undefined') {
      queryParams = new URLSearchParams(window.location.search);
    }

    const checkBoxes = document.getElementsByName(checkbox.name);

    checkBoxes.forEach((item) => {
      if (item != checkbox) item.checked = false;
    });

    if (checkbox.checked == false) {
      // delete the filter query
      queryParams.delete(checkbox.name);
    } else {
      // set the filter query
      if (queryParams.has(checkbox.name)) {
        queryParams.set(checkbox.name, checkbox.value);
      } else {
        queryParams.append(checkbox.name, checkbox.value);
      }
    }
    const path = window.location.pathname + '?' + queryParams.toString();
    router.push(path);
  }

  function checkHandler(checkBoxType, checkBoxValue) {
    if (typeof window !== 'undefined') {
      queryParams = new URLSearchParams(window.location.search);

      const value = queryParams.get(checkBoxType);
      if (checkBoxValue === value) return true;
      return false;
    }
  }

  // function handlePriceButtonClick() {
  //   if (typeof window !== "undefined") {
  //     queryParams = new URLSearchParams(window.location.search);

  //     queryParams = getPriceQueryParams(queryParams, "min", minAmount)
  //     queryParams = getPriceQueryParams(queryParams, "max", maxAmount)

  //     const path = window.location.pathname + "?" + queryParams.toString()
  //     router.push(path)

  //   }
  // }

  return (
    <aside className="mt-24 mx-auto">
      {/* Price Filter */}

      {/* <div className="md:hidden px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
            <h3 className="font-semibold mb-2">Price ($)</h3>
          
          <div className="grid sm:grid-cols-3 gap-x-2">
            <div className="mb-4">
              <input
                name="min"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="number"
                placeholder="Min"
                value={minAmount}
                onChange={(e) => setMinAmount(e.target.value)}
              />
            </div>
  
            <div className="mb-4">
              <input
                name="max"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="number"
                placeholder="Max"
                value={maxAmount}
                onChange={(e) => setMaxAmount(e.target.value)}
              />
            </div>
  
            <div className="mb-4">
              <button className="px-1 py-2 text-center w-full inline-block text-white bg-black border border-transparent rounded-md hover:bg-pink-700"
                onClick={handlePriceButtonClick}
              >
                Go
              </button>
            </div>
          </div>
  
          </div>  */}

      <div className="p-5 pt-4 sm:p-1 border border-gray-200 bg-white rounded shadow-sm">
        <ul className="flex flex-row gap-x-8 sm:gap-x-1 items-center">
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="wedding"
                className="peer hidden "
                defaultChecked={checkHandler('category', 'wedding')}
                onClick={(e) => hnadleCheckBocClick(e.target)}
              />
              <span
                className="select-none  bg-black cursor-pointer rounded-lg border-2 border-gray-200
   py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 sm:text-xs sm:px-2 "
              >
                {' '}
                Bridal{' '}
              </span>
            </label>
          </li>

          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="quinces"
                className="peer hidden "
                defaultChecked={checkHandler('category', 'quinces')}
                onClick={(e) => hnadleCheckBocClick(e.target)}
              />
              <span
                className="select-none  bg-black cursor-pointer rounded-lg border-2 border-gray-200
   py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 sm:text-xs sm:px-2 "
              >
                {' '}
                Quinces{' '}
              </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="tuxedo"
                className="peer hidden"
                defaultChecked={checkHandler('category', 'tuxedo')}
                onClick={(e) => hnadleCheckBocClick(e.target)}
              />
              <span
                className="select-none  bg-black cursor-pointer rounded-lg border-2 border-gray-200
   py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 sm:text-xs sm:px-2 "
              >
                {' '}
                Tuxedo{' '}
              </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="evening"
                className="peer hidden"
                defaultChecked={checkHandler('category', 'evening')}
                onClick={(e) => hnadleCheckBocClick(e.target)}
              />
              <span
                className="select-none bg-black cursor-pointer rounded-lg border-2 border-gray-200
   py-3 px-6 font-bold text-gray-200 transition-colors duration-500 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 sm:text-xs sm:px-2"
              >
                {' '}
                Evening{' '}
              </span>
            </label>
          </li>
        </ul>

        {/* <h3 className="font-semibold mb-2">Ratings</h3>
          <ul className="space-y-1">
            <li>
              {[5, 4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center">
                  <input
                    name="ratings"
                    type="checkbox"
                    value={rating}
                    className="h-4 w-4"
                    defaultChecked={checkHandler("ratings", `${rating}`)}
                    onClick={(e) => hnadleCheckBocClick(e.target)}
                  />
                  <span className="ml-2 text-gray-500">
                    {" "}
                    <StarRatings
                      rating={rating}
                      starRatedColor="#ffb829"
                      numberOfStars={rating}
                      starDimension="20px"
                      starSpacing="2px"
                      name="rating"
                    />{" "}
                  </span>
                </label>
              ))}
            </li>
          </ul> */}
      </div>
    </aside>
  );
};

export default FilterProductsComponent;
