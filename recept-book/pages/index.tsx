import Filter, { IFilter } from "@/components/Filter";
import { ImgProps } from "next/dist/shared/lib/get-img-props";

export default function Page({ data }: { data: IFilter }) {


  return (
    <main>
      <Filter data={data} />
    </main>
  )
}
export async function getServerSideProps() {
  const res = await fetch('http://localhost:9000/category/get_filter');
  const data = await res.json();

  return { props: { data } };
}


