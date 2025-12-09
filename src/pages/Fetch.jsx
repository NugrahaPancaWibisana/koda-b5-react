import CardRickyMorty from "../components/CardRickyMorty";
import useFetch from "../hooks/useFetch";

export default function Fetch() {
  const { data, loading, error } = useFetch(
    "https://rickandmortyapi.com/api/character"
  );

  return (
    <main className='min-h-dvh flex justify-center items-center p-24'>
      {loading && !error && <p>Loading....</p>}
      {error && <p>{error}</p>}
      <section className='grid grid-cols-4 gap-5'>
        {!loading &&
          data.map((value) => {
            return (
              <CardRickyMorty
                key={value.id}
                id={value.id}
                imgUrl={value.image}
                name={value.name}
                species={value.species}
                status={value.status}
              />
            );
          })}
      </section>
    </main>
  );
}
