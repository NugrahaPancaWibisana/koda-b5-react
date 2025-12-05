import { useEffect, useState } from "react";
import CardRickyMorty from "../components/CardRickyMorty";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router";

export default function RickMorty() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [filter, setFilter] = useState({
    species: searchParam.get("species") || "",
    name: searchParam.get("name") || "",
    status: searchParam.get("status") || "",
  });
  const [query, setQuery] = useState(() => {
    const param = {
      species: searchParam.get("species"),
      name: searchParam.get("name"),
      status: searchParam.get("status"),
    };
    const data = Object.fromEntries(
      Object.entries(param).filter(([, value]) => value != null && value !== "")
    );

    return data;
  });
  const [data, setData] = useState([]);

  const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  };

  const handlerChangeSearch = debounce((e) => {
    setQuery((obj) => ({ ...obj, [e.target.name]: e.target.value }));
  }, 500);

  useEffect(() => {
    (() => {
      setSearchParam(new URLSearchParams(query));
    })();
  }, [query, setSearchParam]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${
            searchParam.get("name") || ""
          }&species=${searchParam.get("species") || ""}&status=${
            searchParam.get("status") || ""
          }`
        );

        setData((await res.json()).results || []);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [searchParam]);

  useEffect(() => {
    document.title = "Grid CSS";
  }, []);

  return (
    <>
      <Navbar />
      <header className='text-center py-20 text-5xl font-bold'>CSS Grid</header>
      <main className='w-full min-h-dvh p-10'>
        <section className='w-full flex justify-between items-center border-2 border-black p-5 rounded-2xl'>
          <div>
            <h1>Rick and Morty</h1>
          </div>
          <form className='flex flex-row-reverse gap-5' noValidate>
            <button
              type='button'
              onClick={() => {
                setQuery({});
                setFilter({ species: "", name: "", status: "" });
              }}
            >
              Reset Filter
            </button>

            <input
              className='outline-0 border-2 border-black'
              type='text'
              name='name'
              id='name'
              placeholder='Search character name...'
              value={filter.name}
              onChange={(e) => {
                handlerChangeSearch(e);
                setFilter((value) => ({
                  ...value,
                  [e.target.name]: e.target.value,
                }));
              }}
            />

            <select
              className='outline-0 border-2 border-black'
              name='species'
              value={filter.species}
              onChange={(e) => {
                handlerChangeSearch(e);
                setFilter((value) => ({
                  ...value,
                  [e.target.name]: e.target.value,
                }));
              }}
            >
              <option value='' disabled>
                Choose Species to Filter
              </option>
              <option value='human'>Human</option>
              <option value='humanoid'>Humanoid</option>
              <option value='unknown'>Unknown</option>
              <option value='poopybutthole'>Poopybutthole</option>
              <option value='alien'>Alien</option>
              <option value='animal'>Animal</option>
              <option value='robot'>Robot</option>
              <option value='cronenberg'>Cronenberg</option>
              <option value='disease'>Disease</option>
              <option value='mythological creature'>
                Mythological Creature
              </option>
            </select>
            <select
              className='outline-0 border-2 border-black'
              name='status'
              value={filter.status}
              onChange={(e) => {
                handlerChangeSearch(e);
                setFilter((value) => ({
                  ...value,
                  [e.target.name]: e.target.value,
                }));
              }}
            >
              <option value='' disabled>
                Choose Status to Filter
              </option>
              <option value='alive'>Alive</option>
              <option value='dead'>Dead</option>
              <option value='unknown'>Unknown</option>
            </select>
          </form>
        </section>
        <div className='grid grid-cols-4 gap-10 mt-10'>
          {data.map((value, index) => {
            return (
              <CardRickyMorty
                key={index}
                id={value.id}
                imgUrl={value.image}
                name={value.name}
                species={value.species}
                status={value.status}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
