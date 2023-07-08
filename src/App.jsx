import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col background relative items-center">
      <h1 className="bg-white rounded-md text-center mt-[40px] w-11/12
      px-3 py-3 text-2xl font-bold ">RANDOM GIFS</h1>
      <div className="flex flex-col items-center w-full">
      <Random/>
      <Tag/>
      </div>
    </div>
  );
}
