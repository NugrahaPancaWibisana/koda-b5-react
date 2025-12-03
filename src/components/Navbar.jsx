import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className='h-16 bg-emerald-600 fixed top-0 w-full flex items-center justify-between px-10'>
      <h1 className='text-white text-2xl font-black font-mono'>wibisana</h1>
      <ul className="flex text-white gap-5 font-mono text-xl">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/counter'>Counter</Link>
        </li>
        <li>
          <Link to='/Product'>Product</Link>
        </li>
        <li>
          <Link to='/rickmorty'>Rick And Morty</Link>
        </li>
      </ul>
    </header>
  );
}
