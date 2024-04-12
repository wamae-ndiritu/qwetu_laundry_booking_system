const SchedulesPage = () => {
  return (
    <div className='w-full border flex flex-col items-center p-4'>
      <h2 className='my-5 text-3xl font-semibold'>Schedules</h2>
      <section className='md:w-2/5'>
        <div className='w-full flex gap-3 items-end'>
          <div className='flex-1 flex flex-col gap-1'>
            <label htmlFor='start_time'>Start</label>
            <input type='time' name='' id='' className='border' />
          </div>
          <div className='flex-1 flex flex-col gap-1'>
            <label htmlFor='start_time'>End</label>
            <input type='time' name='' id='' className='border' />
          </div>
          <button className='flex-1 bg-orange-600 text-white px-4 py-1 rounded'>
            Add
          </button>
        </div>
        <section className='my-5'>
          <table className='w-full border'>
            <thead className=''>
              <tr className='text-left'>
                <th className='border border-gray-300 p-2'>ID</th>
                <th className='border border-gray-300 p-2'>Start Time</th>
                <th className='border border-gray=300 p-2'>End Time</th>
                <th className='border border-gray-300 p-2'>Actions</th>
              </tr>
            </thead>
            <tbody className=''>
              <tr>
                <td className='border border-gray-300 p-2'>1</td>
                <td className='border border-gray-300 p-2'>10:00 AM</td>
                <td className='border border-gray-300 p-2'>12:00 PM</td>
                <td className='border border-gray-300 p-2'>
                  <button className='bg-red-500 text-white px-1 text-sm rounded'>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2'>1</td>
                <td className='border border-gray-300 p-2'>10:00 AM</td>
                <td className='border border-gray-300 p-2'>12:00 PM</td>
                <td className='border border-gray-300 p-2'>
                  <button className='bg-red-500 text-white px-1 text-sm rounded'>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2'>1</td>
                <td className='border border-gray-300 p-2'>10:00 AM</td>
                <td className='border border-gray-300 p-2'>12:00 PM</td>
                <td className='border border-gray-300 p-2'>
                  <button className='bg-red-500 text-white px-1 text-sm rounded'>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2'>1</td>
                <td className='border border-gray-300 p-2'>10:00 AM</td>
                <td className='border border-gray-300 p-2'>12:00 PM</td>
                <td className='border border-gray-300 p-2'>
                  <button className='bg-red-500 text-white px-1 text-sm rounded'>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </div>
  );
};

export default SchedulesPage;
