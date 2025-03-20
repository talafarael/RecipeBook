import { Card } from "@/components/Card";

export default async function Page({ params }: { params: { name: string } }) {
  const res = await fetch(`http://localhost:9000/category/get_recipes_by_ingredient?ingredient=${params.name}`);
  const data = await res.json();

  return (
    <div className="mt-[50px] flex flex-wrap gap-3 w-[100vw] justify-center items-center">
      {data?.meals?.map((elem: any) => (
        <Card key={elem.idMeal} strMealThumb={elem.strMealThumb} strMeal={elem.strMeal} idMeal={elem.idMeal} category="recept" />
      ))}
    </div>
  );
}
