import { Link, NavLink } from "react-router";
import { useContext, useState } from "react";
import { userContext } from "../contexts/user/userContext";

export default function Navbar() {
  const { state, dispatch } = useContext(userContext);
  const [isShow, setIsShow] = useState(false);
  const [user, setUser] = useState({
    username: state.user.username || "",
    img: state.user.img || "/",
  });

  // console.log(state);
  console.log(user);

  // console.log(URL.revokeObjectURL(user.img));

  const submitHandler = (e) => {
    e.preventDefault();
    const newCreds = {};

    Object.assign(newCreds, {
      username: user.username,
      img: user.img,
    });

    dispatch({
      type: "EDIT_PROFILE",
      payload: newCreds,
    });

    setUser({
      username: state.user.username,
      img: state.user.img || "/",
    });

    setIsShow(false);
  };

  const modalHandler = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <header className='h-16 bg-emerald-600 fixed top-0 w-full flex items-center justify-between px-10'>
        <h1 className='text-white text-2xl font-black font-mono'>wibisana</h1>
        <ul className='flex text-white gap-5 font-mono text-xl'>
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
        {!state.user.username && (
          <NavLink
            to='/login'
            className='text-white font-mono text-xl border py-1 px-5 rounded-2xl'
          >
            Login
          </NavLink>
        )}
        {state.user.username && (
          <div className='flex justify-center items-center gap-2 border p-1 rounded-md border-white'>
            {state.user.img && (
              <img
                className='w-10 h-10 rounded-full'
                src={state.user.img}
                alt={state.user.username}
                onClick={modalHandler}
              />
            )}
            {!state.user.img && (
              <button
                className='text-white font-mono text-xl h-10 w-10 border rounded-full flex justify-center items-center cursor-pointer'
                onClick={modalHandler}
              >
                <span>+</span>
              </button>
            )}
            <p className='text-white font-mono text-xl'>
              {state.user.username}
            </p>
            <button
              className='text-white font-mono text-xl ml-10 cursor-pointer'
              onClick={() => dispatch({ type: "LOGOUT" })}
            >
              Logout
            </button>
          </div>
        )}
      </header>
      {isShow && (
        <div className='absolute inset-0 bg-black/70 z-10 flex justify-center items-center'>
          <form
            className='bg-white w-100 h-100 rounded-2xl relative flex flex-col items-center gap-5'
            onSubmit={submitHandler}
          >
            <button
              className='text-red-500 font-mono text-2xl font-bold absolute top-5 right-5 cursor-pointer'
              type='button'
              onClick={modalHandler}
            >
              X
            </button>
            <header className='font-mono text-2xl text-center pt-5 font-bold'>
              Edit Profile
            </header>
            <label
              className='h-42 w-42 border overflow-hidden rounded-full'
              htmlFor='img'
            >
              <img
                className='w-full h-full object-cover'
                src={user.img}
                alt='Choose image'
              />
            </label>
            <input
              className='hidden'
              type='file'
              name='img'
              id='img'
              onChange={(e) => {
                setUser((value) => ({
                  ...value,
                  img: URL.createObjectURL(e.target.files[0]),
                }));
              }}
            />
            <div className='w-full px-15 flex flex-col gap-5'>
              <input
                className='border w-full p-2 rounded-md'
                type='text'
                name='username'
                id='username'
                value={user.username}
                onChange={(e) =>
                  setUser((value) => ({
                    ...value,
                    username: e.target.value,
                  }))
                }
              />
              <button
                className='w-full bg-emerald-600 text-white rounded-md py-3'
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
