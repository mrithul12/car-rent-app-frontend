
import Display from "@/components/startingPage/Display";
import HomeDisply from "@/components/startingPage/homeDisply";
import StartingPage from "@/components/startingPage/StartingPage";

export default async function Home() {
  return (
    <div>
    
      <StartingPage/>
      <HomeDisply/>
      <Display/>
    </div>
  );
}
