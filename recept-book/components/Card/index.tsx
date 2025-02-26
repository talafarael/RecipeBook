import { useRouter } from 'next/navigation';
import React from 'react'


export interface ICard {
  strMeal: string;
  strMealThumb: string;
  idMeal: string
  category: string | undefined
}
export const Card = ({ strMeal, strMealThumb, idMeal, category }: ICard) => {
  const router = useRouter();

  const handlerMoreInfo = (id: string) => {
    router.push(`/recept/${category}/${id}`)
  }
  return (
    <div
      onClick={() => handlerMoreInfo(idMeal)}
      className='group bg-[#FEFAE0] h-[372px] w-[315px] shadow-lg rounded-[8px] transition duration-300 hover:shadow-xl overflow-hidden relative'>
      <img
        src={strMealThumb}
        alt={strMeal}
        className='w-[95%] h-auto object-cover transition duration-300 group-hover:brightness-75'
      />
      <h1 className='absolute bottom-4 left-4 text-xl font-semibold text-black  transition duration-300'>
        {strMeal}
      </h1>
    </div>
  )
}

