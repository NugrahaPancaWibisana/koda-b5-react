export default function Review({ setDataReview }) {
  const submitHandler = (e) => {
    e.preventDefault();
    setDataReview((value) => [e.target.review.value, ...value]);
  };

  return (
    <form
      onSubmit={submitHandler}
      className='border-2 border-black p-5 rounded-2xl my-20'
    >
      <div className='flex flex-col gap-3'>
        <label className='text-xl' htmlFor='review'>
          Review User
        </label>
        <textarea
          className='w-full resize-none bg-gray-50 rounded-2xl border-2 border-gray-300 p-3 h-52'
          name='review'
          id='review'
        ></textarea>
      </div>
      <div className='flex justify-end mt-3'>
        <button
          className='border-2 bg-gray-50 py-1 px-5 rounded-xl'
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
