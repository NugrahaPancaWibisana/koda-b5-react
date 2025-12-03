import { useState } from "react";

export default function Login() {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const submitHandler = () => {
    console.log(creds);
  };

  return (
    <main className='w-full min-h-dvh bg-emerald-600 flex justify-center items-center'>
      <section className='bg-white w-[546px] p-22 rounded-2xl flex flex-col gap-10'>
        <h1 className='font-bold text-2xl'>Welcome Back&#128075;</h1>
        <p>Sign in with your data that you entered during your registration</p>

        <form noValidate>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              className='w-full border border-gray-500 rounded-lg'
              type='email'
              name='email'
              id='email'
              value={creds.email}
              onChange={(e) =>
                setCreds((value) => ({ ...value, email: e.target.value }))
              }
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              className='w-full border border-gray-500 rounded-lg'
              type='password'
              name='password'
              id='password'
              value={creds.password}
              onChange={(e) =>
                setCreds((value) => ({ ...value, password: e.target.value }))
              }
            />
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
