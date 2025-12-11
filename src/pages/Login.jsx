import { useContext, useState } from "react";
import { userContext } from "../contexts/user/userContext";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const { dispatch } = useContext(userContext);
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const submitHandler = () => {
    const newCreds = {};

    Object.assign(newCreds, {
      username: creds.username,
    });

    dispatch({
      type: "LOGIN",
      payload: newCreds,
    });

    setCreds({
      username: "",
      password: "",
    });

    navigate("/", { replace: true });
  };

  const onChangeHandler = (e) =>
    setCreds((value) => ({ ...value, [e.target.name]: e.target.value }));

  return (
    <main className='w-full min-h-dvh bg-emerald-600 flex justify-center items-center'>
      <section className='bg-white w-[546px] p-20 rounded-2xl flex flex-col gap-8'>
        <h1 className='font-bold text-2xl'>Welcome Back&#128075;</h1>
        <p>Sign in with your data that you entered during your registration</p>

        <form
          className='flex flex-col gap-5'
          noValidate
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor='username'>Username</label>
            <input
              className='w-full h-13 text-lg border border-gray-500 rounded-sm p-1 mt-1'
              type='username'
              name='username'
              id='username'
              placeholder='Enter your username'
              value={creds.username}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <div>
              <input
                className='w-full h-13 text-lg border border-gray-500 rounded-sm p-1 mt-1'
                type='password'
                name='password'
                id='password'
                placeholder='Enter your password'
                value={creds.password}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className='flex justify-end'>
            <p className='text-blue-700'>Forgot your password?</p>
          </div>
          <button
            onClick={submitHandler}
            className='border-2 border-gray-500 px-5 py-2 rounded-lg'
            type='button'
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
