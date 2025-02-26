"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export interface IFilter {
  categories: string[];
  ingredients: string[];
  countries: string[];
}

const Filter = ({ data }: { data: IFilter }) => {
  const [arr, setArr] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  const router = useRouter();
  const [category, setCategory] = useState<"ingredients" | "categories" | "countries">("countries");

  const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as "ingredients" | "categories" | "countries";
    setCategory(value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setValue(query);
    let filterArr = [];

    if (category === "categories") {
      filterArr = [...data.categories];
    } else if (category === "ingredients") {
      filterArr = [...data.ingredients];
    } else {
      filterArr = [...data.countries];
    }

    const filtered = filterArr.filter(item => item.toLowerCase().includes(query));
    setArr(filtered.slice(0, 20));
  };

  const newValue = (str: string) => {
    setValue(str);
  };

  const useFilter = () => {
    console.log(`Navigating to: /category/${category}/name/${value}`);
    router.push(`/category/${category}/name/${value}`);
  };

  return (
    <div className='h-[70px] flex items-center relative w-[90vw] justify-end'>
      <div className='relative'>
        <select className='bg-[#A4B465] pl-[5px] h-[50px] rounded-[8px] w-[350px] mb-2 text-sm font-medium text-gray-900 dark:text-white'
          name="select" value={category} onChange={handleCategory}>
          <option value="categories">categories</option>
          <option value="ingredients" selected>ingredients</option>
          <option value="countries">countries</option>
        </select>
        <input
          className="bg-green-300 pl-2 h-12 rounded-lg w-80 mb-2 text-sm font-medium text-gray-900 dark:text-white 
             border-2 border-green-500 focus:border-green-700 outline-none transition"
          value={value}
          onChange={handleFilterChange}
        />
        <button
          onClick={useFilter}
          className="bg-green-500 h-12 ml-2 rounded-lg w-64 text-white font-semibold transition hover:bg-green-600">
          Get Filter
        </button>
        <ul className='absolute h-[20vh] top-[70px] left-auto'>
          {arr.map((item, index) => (
            <li key={index} onClick={() => newValue(item)}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
