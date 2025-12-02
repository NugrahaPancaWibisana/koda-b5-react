export default function TabelProduct({ data }) {
  return (
    <table className='border-collapse border border-gray-400 w-full'>
      <caption>Tabel Product</caption>
      <thead>
        <tr>
          <th>Nama Barang</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, index) => {
          return (
            <tr key={index}>
              <td className='border border-gray-300 p-1'>{value.product_name}</td>
              <td className='border border-gray-300 p-1'>
                {value.product_quantity}
              </td>
              <td className='border border-gray-300 p-1'>{value.price}</td>
              <td className='border border-gray-300 p-1'>{value.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
