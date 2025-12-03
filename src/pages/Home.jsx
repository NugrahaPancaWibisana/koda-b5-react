import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Review from "../components/Review";
import CardReview from "../components/CardReview";

export default function Home() {
  const [review, setReview] = useState(() => {
    const data = localStorage.getItem("review");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("review", JSON.stringify(review));
  }, [review]);

  return (
    <>
      <Navbar />
      <main className='w-full mt-16'>
        <section className='w-full min-h-dvh flex flex-col py-5 px-20'>
          <h2 className='font-mono text-emerald-600 text-4xl font-black'>
            Home
          </h2>
          <Review setDataReview={setReview} />

          <div className='grid grid-cols-3 gap-5'>
            {review.map((data, idx) => {
              return <CardReview key={idx} text={data} />;
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
