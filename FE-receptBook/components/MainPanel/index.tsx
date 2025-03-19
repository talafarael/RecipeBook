import { IGetOne } from '@/pages/recept/[category]/[id]'
import React from 'react'


export default function MainPanel({ data }: { data: IGetOne }) {
  return (
    <div className="w-[70vw] flex justify-around max-[850px]:items-center max-[850px]:flex-col rounded-lg shadow-md">
      <img
        className="w-[30vw] h-auto ml-[1vw] rounded-lg"
        src={data.strMealThumb}
        alt={data.strMeal}
      />
      <div className="ml-[1vw] flex flex-col justify-center max-w-[40vw]">
        <h1 className="text-[40px] font-bold text-gray-800">{data.strMeal}</h1>
        <h2 className="text-[30px] text-gray-600">{data.strCategory}</h2>

        {data.strYoutube && (
          <a
            href={data.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-2"
          >
            Смотреть на YouTube
          </a>
        )}



        <h3 className="text-[24px] font-semibold mt-4">Приготовление:</h3>
        <p className="text-gray-700">{data.strInstructions}</p>
      </div>
    </div>
  );
}
