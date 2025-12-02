import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  return (
    <div className='w-full h-dvh flex flex-col gap-10 justify-center items-center'>
      <Header className='font-bold text-6xl' title={"Counter"} />
      <Counter />
    </div>
  );
}

export default App;
