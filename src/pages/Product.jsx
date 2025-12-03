import { useState } from "react";
import TabelProduct from "../components/TabelProduct";
import FormProduct from "../components/FormProduct";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Product() {
  const [product, setProduct] = useState([]);

  return (
    <>
      <Navbar />
      <div className='w-full min-h-dvh p-[200px] flex gap-10 justify-center items-center'>
        <main className='flex w-full h-full gap-20'>
          <section className='flex-1'>
            <TabelProduct data={product} />
          </section>
          <aside>
            <FormProduct changeData={setProduct} />
          </aside>
        </main>
      </div>
      <Footer />
    </>
  );
}
