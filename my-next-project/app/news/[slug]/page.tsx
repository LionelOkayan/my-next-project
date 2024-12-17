import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import style from "./page.module.css";
type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export const revalidate = 0;

export default async function Page({ params, searchParams }: Props) {
  // return <div>{JSON.stringify(props)}</div>;
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);

  return (
    <>
      <Article data={data} />
      <div className={style.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
