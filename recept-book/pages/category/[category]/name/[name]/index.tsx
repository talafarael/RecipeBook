import { Card } from "@/components/Card";

export default function Page({ data, category }: { data: { meals: any[] }, category: string }) {
  console.log(data.meals);

  return (
    <div className="mt-[50px] flex flex-wrap gap-3 w-[100vw] justify-center items-center">
      {data.meals.map((elem: any) => (
        <div key={elem.idMeal}>
          <Card strMealThumb={elem.strMealThumb} strMeal={elem.strMeal} idMeal={elem.idMeal} category={category} />
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { category, name } = context.params;
  const res = await fetch(`http://localhost:9000/category/get_recept_by_filter?category=${category}&name=${name}`);
  const data = await res.json();

  console.log(data);
  return { props: { data, category } };
}

