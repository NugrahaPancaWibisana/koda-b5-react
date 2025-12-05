import { useParams } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function DetailCharacter() {
  const [character, setCharacter] = useState({});
  const { id, slug } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );

        setCharacter((await res.json()) || {});
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id, setCharacter]);

  console.log(character);
  

  return (
    <>
      <Navbar />
      <main className='w-full'>
        <section className='w-full min-h-dvh flex justify-center items-center pt-16'>
          <div className='flex flex-col border-2 p-2 rounded-2xl'>
            <img src={character.image} alt={slug.split("-").join(" ")} className='rounded-2xl' />
            <h2 className='font-bold text-2xl'>{slug.split("-").join(" ")}</h2>
            <h3 className='text-lg text-gray-500'>{character.species} - {character.gender}</h3>
            <p>{character.status}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
