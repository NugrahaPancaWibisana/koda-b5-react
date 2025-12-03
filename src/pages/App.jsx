import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className='w-full h-dvh flex flex-col gap-10 justify-center items-center'>
        <Header className='font-bold text-6xl' title={"Counter"} />
        <Counter />
      </div>
      <Footer />
    </>
  );
}

export default App;
