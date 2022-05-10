import { useState } from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";


export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <div>
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
    </div>
  );
}
