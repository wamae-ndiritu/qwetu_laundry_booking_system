import Pagination from "../components/pagination/Pagination";

const StudentsPage = () => {
  return (
    <div>
      <div className='w-full mt-3 flex flex-col md:flex-row md:justify-between items-center'>
        <h2 className='my-auto text-3xl font-semibold'>Students</h2>
        <div className='w-3/5 flex gap-2'>
          <input
            type='text'
            placeholder='Search students by ID'
            className='flex-1 py-2 px-4 border focus:outline-violet-500 rounded'
          />
          <button className='w-1/5 bg-orange-600 text-white rounded py-2'>
            Search
          </button>
        </div>
      </div>
      <section className='w-full overflow-x-auto my-5'>
        <table className='w-full border'>
          <thead className='border'>
            <th className='border border-gray-300 px-2 text-left'>ID</th>
            <th className='border border-gray-300 px-2 text-left'>Full Name</th>
            <th className='border border-gray-300 px-2 text-left'>Email</th>
            <th className='border border-gray-300 px-2 text-left'>Username</th>
            <th className='border border-gray-300 px-2 text-left'>Contact</th>
            <th className='border border-gray-300 px-2 text-left'>
              No of Bookings
            </th>
            <th className='border border-gray-300 px-2 text-left'>Actions</th>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-2'>1</td>
              <td className='border border-gray-300 px-2'>Wamae Ndiritu</td>
              <td className='border border-gray-300 px-2'>
                wamaejoseph392@gmail.com
              </td>
              <td className='border border-gray-300 px-2'>wamaendiritu</td>
              <td className='border border-gray-300 px-2'>0740924507</td>
              <td className='border border-gray-300 px-2 py-2'><span className="bg-violet-500 text-center text-sm text-white py-1 px-4 rounded">0</span></td>
              <td className='border border-gray-300 px-2'>
                <button className="bg-red-500 text-white px-1 text-sm rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <Pagination rootPath="/students" />
    </div>
  );
}

export default StudentsPage