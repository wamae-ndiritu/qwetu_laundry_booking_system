const ServicesPage = () => {
  return (
    <div>
      <h2 className='text-3xl my-5 font-semibold'>Services</h2>
      <section className='grid grid-cols-1 md:grid-cols-5 gap-5'>
        <form className='col-span-1 md:col-span-2 border p-4 flex flex-col'>
          <h6 className='text-xl font-semibold my-3'>Add Item</h6>
          <label htmlFor='item' className='py-1 text-gray-600'>
            Item Title
          </label>
          <input
            type='text'
            className='border border-gray-300 rounded focus:outline-orange-600 p-2'
            id='item'
          />
          <label htmlFor='item_desc' className='py-1 text-gray-600'>
            Description
          </label>
          <textarea
            rows={3}
            className='border border-gray-300 rounded focus:outline-orange-600 p-2'
            id='item_desc'
          ></textarea>
          <button
            className='w-full bg-orange-600 text-white hover:cusor-pointer 
           my-3 p-2 rounded '
          >
            Create Course
          </button>
        </form>
        <div className='col-span-1 md:col-span-3 overflow-x-auto'>
          <h6 className='text-xl my-1 font-semibold'>Services List</h6>
          <table className='w-full border'>
            <thead className=''>
              <tr className='text-left'>
                <th className='border border-gray-300 p-2'>ID</th>
                <th className='border border-gray-300 p-2'>Item Title</th>
                <th className='border border-gray=300 p-2'>Description</th>
                <th className='border border-gray-300 p-2'>Actions</th>
              </tr>
            </thead>
            <tbody className=''>
              <tr>
                <td className='border border-gray-300 p-2'>1</td>
                <td className='border border-gray-300 p-2'>Dry Cleaning</td>
                <td className='border border-gray-300 p-2'>
                  The description goes here...
                </td>
                <td className='border border-gray-300 p-2'>
                  <button className='bg-red-500 text-white px-1 text-sm rounded'>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2'>1</td>
                <td className='border border-gray-300 p-2'>Dry Cleaning</td>
                <td className='border border-gray-300 p-2'>
                  The description goes here...
                </td>
                <td className='border border-gray-300 p-2'>
                  <button className='bg-red-500 text-white px-1 text-sm rounded'>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
