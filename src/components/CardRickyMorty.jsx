import { Link } from "react-router";

export default function CardRickyMorty({ ...refs }) {
  return (
    <Link to={`${refs.id}/${refs.name.split(" ").join("-")}`}>
      <div className='flex flex-col border-2 p-2 rounded-2xl'>
        <img src={refs.imgUrl} alt={refs.name} className='rounded-2xl' />
        <h2 className='font-bold text-2xl'>{refs.name}</h2>
        <h3 className='text-lg text-gray-500'>{refs.species}</h3>
        <p>{refs.status}</p>
      </div>
    </Link>
  );
}
