import { useState } from "react";
import Header from "./Header";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header className='font-bold text-8xl' title={count} />
      <div className='flex flex-row-reverse gap-10'>
        <button
          className='bg-blue-500 text-white border-2 border-gray-700 text-2xl w-20 h-10'
          onClick={() => setCount(count >= 10 ? count : count + 1)}
        >
          +
        </button>
        <button
          className='bg-blue-500 text-white border-2 border-gray-700 text-2xl w-20 h-10'
          onClick={() => setCount(count <= 0 ? count : count - 1)}
        >
          -
        </button>
      </div>
    </>
  );
}
