import { Card } from "@/components/Card";

export default function Page({ data }: { data: { meals: any[] } }) {
  return (
    <div className=" mt-[50px] flex flex-wrap gap-3 w-[100vw] justify-center items-center">
      {data.meals.map((elem: any) => (
        <Card strMealThumb={elem.strMealThumb} strMeal={elem.strMeal} idMeal={elem.idMeal} category="recept" />
      ))}
    </div>
  )
}
export async function getServerSideProps(context: any) {
  const { name } = context.params;
  const res = await fetch(`http://localhost:9000/category/get_recipes_by_ingredient?ingredient=${name}`);
  const data = await res.json();

  console.log(data);
  return { props: { data } };
}
