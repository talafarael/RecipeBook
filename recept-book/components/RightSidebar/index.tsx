import { useRouter } from "next/navigation";
import React from "react";

interface MealProps {
  meal: any
}

export const RightSidebar: React.FC<MealProps> = ({ meal }) => {
  const ingredients = Object.keys(meal)
    .filter((key) => key.startsWith("strIngredient") && meal[key])
    .map((key, index) => ({
      name: meal[key] as string,
      measure: (meal[`strMeasure${index + 1}`] as string) || "",
    }));
  const router = useRouter();
  const handlerGetIngredient = (ingredient: string) => {
    router.push(`/ingredient/${ingredient}`)
  }
  return (
    <div>
      <h2>{meal.strMeal}</h2>
      <h3>Ингредиенты:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} onClick={() => handlerGetIngredient(ingredient.name)}>
            {ingredient.measure} {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
