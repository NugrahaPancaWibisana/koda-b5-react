export default function FormProduct({ changeData }) {
  const dataSubmit = (event) => {
    event.preventDefault();
    const data = {};

    Object.assign(data, {
      product_name: event.target.product_name.value,
      product_quantity: event.target.product_quantity.value,
      price: event.target.price.value,
      status: event.target.status.value,
    });

    changeData((value) => [...value, data]);

    event.target.product_name.value = "";
    event.target.product_quantity.value = "";
    event.target.price.value = "";
    event.target.status.value = "available";
  };

  return (
    <form onSubmit={dataSubmit} className='w-[500px]' noValidate>
      <div>
        <label className='block' htmlFor='productName'>
          Product Name
        </label>
        <input
          className='w-full border-2 border-black p-1'
          type='text'
          name='product_name'
          id='productName'
        />
      </div>
      <div>
        <label className='block' htmlFor='productQuantity'>
          Product Quantity
        </label>
        <input
          className='w-full border-2 border-black p-1'
          type='number'
          name='product_quantity'
          id='productQuantity'
        />
      </div>
      <div>
        <label className='block' htmlFor='price'>
          Price
        </label>
        <input
          className='w-full border-2 border-black p-1'
          type='number'
          name='price'
          id='price'
        />
      </div>
      <div>
        <label className='block' htmlFor='statuc'>
          Status
        </label>
        <select
          className='w-full border-2 border-black p-1'
          name='status'
          id='status'
        >
          <option value='available'>Available</option>
          <option value='not available'>Not Available</option>
        </select>
      </div>
      <div className='flex justify-end mt-5'>
        <button className='border-2 border-black p-2' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
}
