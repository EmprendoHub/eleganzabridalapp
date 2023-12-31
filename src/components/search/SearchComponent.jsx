'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GiLargeDress } from 'react-icons/gi';
import { IoMdSearch } from 'react-icons/io';

const SearchComponent = ({ classname, header }) => {
  const handleFocus = (event) => event.target.select();

  const [keyword, setKeyword] = useState('');

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword) {
      router.push(`/catalog?keyword=${keyword}`);
    } else {
      router.push('/catalog');
    }
  };

  return (
    <div className={`${classname} search-class w-[95%] `}>
      <div className="search-box flex justify-between my-auto">
        <form className="flex flex-row" onSubmit={submitHandler}>
          <span className="flex items-center bg-gray-100 rounded-full rounded-r-none border border-gray-400 border-r-0 px-3 font-bold text-grey-100">
            <GiLargeDress className="text-pink-600" />
          </span>

          <input
            className="flex-grow appearance-none border-l-0 border border-gray-400 bg-gray-100 py-2 focus:outline-none text-grey-darker text-grey-darkest  w-full px-2 outline-none text-sm text-gray-600"
            type="text"
            placeholder={header.menu.searchbar}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onFocus={handleFocus}
            required
          />
          <span className="flex items-center bg-black rounded-full rounded-l-none border-0 px-3 font-bold text-grey-100">
            <button
              type="button"
              className="px-4 py-2 inline-block my-1 border border-transparent bg-pink-700 text-white rounded-full text-sm"
              onClick={submitHandler}
            >
              <IoMdSearch />
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SearchComponent;
