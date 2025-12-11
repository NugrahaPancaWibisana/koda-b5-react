import useInput from "../hooks/useInput";

export default function InputValidation() {
  const name = useInput("", {
    required: true,
    minLength: 3,
  });

  return (
    <main className='min-h-dvh flex justify-center items-center'>
      <form
        className='flex flex-col justify-center items-start'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Input your name...'
          value={name.value}
          onChange={name.onChangeHandler}
        />
        {!name.isValid && <p className='text-red-800'>{name.error}</p>}
        <button type='button' onClick={name.reset}>
          Clear
        </button>
      </form>
    </main>
  );
}
