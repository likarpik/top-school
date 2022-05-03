import { Button, Htag } from "../components";


export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Course 1</Htag>
      <Htag tag='h2'>Skills</Htag>
      <Htag tag='h3'>Benefits</Htag>
      <Button appearance='primary'>Click</Button>
      <Button appearance='ghost'>Click2</Button>
    </div>
  );
}
