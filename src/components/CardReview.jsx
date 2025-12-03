export default function CardReview({ text }) {
  return (
    <div className='flex flex-col border-2 border-black p-3 rounded-2xl'>
      <p className='w-full text-pretty'>{text}</p>
    </div>
  );
}
