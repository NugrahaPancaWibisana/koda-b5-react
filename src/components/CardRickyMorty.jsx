export default function CardRickyMorty({ ...refs }) {
  return (
    <div className="flex flex-col border-2 p-2 rounded-2xl">
      <img src={refs.imgUrl} alt={refs.name} className="rounded-2xl" />
      <h2 className="font-bold text-2xl">{refs.name}</h2>
      <h3 className="text-lg text-gray-500">{refs.species}</h3>
    </div>
  );
}
