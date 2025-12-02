import { useEffect, useState } from "react";
import CardRickyMorty from "../components/CardRickyMorty";

export default function RickMorty() {
  const [filter, setFilter] = useState({
    selectedSpecies: "",
    searchName: "",
  });
  const [data, setData] = useState([]);

  const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  };

  const searchChange = debounce((value) => {
    setFilter((obj) => ({ ...obj, searchName: value }));
  }, 500);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${filter.searchName}&species=${filter.selectedSpecies}`
        );

        setData((await res.json()).results || []);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [filter]);

  useEffect(() => {
    document.title = "Grid CSS";
  }, []);

  return (
    <>
      <header className='text-center py-10 text-5xl font-bold'>CSS Grid</header>
      <main className='w-full min-h-dvh p-10'>
        <section className='w-full flex justify-between items-center border-2 border-black p-5 rounded-2xl'>
          <div>
            <h1>Rick and Morty</h1>
          </div>
          <div className='flex flex-row-reverse gap-5'>
            <button
              type='button'
              onClick={() => setFilter({ selectedSpecies: "", searchName: "" })}
            >
              Reset Filter
            </button>

            <input
              className='outline-0 border-2 border-black'
              type='text'
              name='name'
              id='name'
              placeholder='Search character name...'
              onChange={(e) => searchChange(e.target.value)}
            />

            <select
              className='outline-0 border-2 border-black'
              name='species'
              value={filter.selectedSpecies}
              onChange={(e) =>
                setFilter((value) => ({
                  ...value,
                  selectedSpecies: e.target.value,
                }))
              }
            >
              <option value='' disabled>
                Choose Species to Filter
              </option>
              <option value='human'>Human</option>
              <option value='alien'>Alien</option>
            </select>
          </div>
        </section>
        <div className='grid grid-cols-4 gap-10 mt-10'>
          {data.map((value, index) => {
            return (
              <CardRickyMorty
                key={index}
                imgUrl={value.image}
                name={value.name}
                species={value.species}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
