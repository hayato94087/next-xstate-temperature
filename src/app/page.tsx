import TemperatureConverter from "@/components/temperature-converter";
import { type FC } from "react";

const Home: FC = () => {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <TemperatureConverter />
        </div>
      </div>
    </main>
  );
};

export default Home;
