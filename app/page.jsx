import { getData } from "./actions";
import Schools from "./components/schools";

export default async function Home() {
  const data = await getData();
  return <Schools schools={data} />;
}