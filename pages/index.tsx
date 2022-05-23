import { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";


function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Course 1</Htag>
      <Htag tag="h2">Skills</Htag>
      <Htag tag="h3">Benefits</Htag>
      <Button appearance="primary" arrow="right">Click</Button>
      <Button appearance="ghost">Click2</Button>
      <Paragraph size="large">Большой</Paragraph>
      <Paragraph size="medium">Средний</Paragraph>
      <Paragraph size="small">Маленький</Paragraph>
      <Paragraph>Дефолтный</Paragraph>
      <Tag size="medium" color="gray">Тег</Tag>
      <Tag size="small" color="red">Тег</Tag>
      <Tag size="small" color="primary">Тег</Tag>
      <Tag size="small" color="green">Тег</Tag>
      <Tag color="ghost">Тег</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async() => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory});
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
