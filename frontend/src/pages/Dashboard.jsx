import GroupIcon from "@mui/icons-material/Group";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import Face2Icon from "@mui/icons-material/Face2";
import Pagination from "../components/pagination/Pagination";

const HomePage = () => {
  return (
    <div>
      <section className='w-full grid grid-cols-1 md:grid-cols-4 gap-3'>
        <div className='col-span-1 shadow bg-violet-500 text-white rounded p-4 flex gap-3'>
          <span className=''>
            <GroupIcon style={{ fontSize: "50px" }} />
          </span>
          <span>
            <h4 className='text-xl'>Total Students</h4>
            <p>2000</p>
          </span>
        </div>
        <div className='col-span-1 shadow bg-orange-600 text-white rounded p-4 flex gap-3'>
          <span className=''>
            <EditCalendarIcon style={{ fontSize: "50px" }} />
          </span>
          <span>
            <h4 className='text-xl'>Total Bookings</h4>
            <p>30</p>
          </span>
        </div>
        <div className='col-span-1 shadow bg-orange-600 text-white rounded p-4 flex gap-3'>
          <span className=''>
            <DryCleaningIcon style={{ fontSize: "50px" }} />
          </span>
          <span>
            <h4>Total Services</h4>
            <p>10</p>
          </span>
        </div>
        <div className='col-span-1 shadow bg-violet-500 text-white rounded p-4 flex gap-3'>
          <span className=''>
            <Face2Icon style={{ fontSize: "50px" }} />
          </span>
          <span>
            <h4>Total Staff</h4>
            <p>8</p>
          </span>
        </div>
      </section>
      <h2 className='mt-5 text-3xl font-semibold'>Bookings</h2>
      <div className='w-full mt-3 flex justify-between'>
        <div className='w-3/5 flex gap-2'>
          <input
            type='text'
            placeholder='Search bookings by ID'
            className='flex-1 py-2 px-4 border focus:outline-violet-500 rounded'
          />
          <button className='w-1/5 bg-violet-500 text-white rounded py-2'>
            Search
          </button>
        </div>
        <button className='bg-violet-500 px-4 py-2 text-white rounded'>
          Go to Bookings
        </button>
      </div>
      <section className='w-full overflow-x-auto my-5'>
        <table className='w-full border'>
          <thead className='border'>
            <th className='border border-gray-300 px-2 text-left'>ID</th>
            <th className='border border-gray-300 px-2 text-left'>
              Student Name
            </th>
            <th className='border border-gray-300 px-2 text-left'>Service</th>
            <th className='border border-gray-300 px-2 text-left'>Schedule</th>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-2'>1</td>
              <td className='border border-gray-300 px-2'>Wamae Ndiritu</td>
              <td className='border border-gray-300 px-2'>Dry Cleaning</td>
              <td className='border border-gray-300 px-2'>12:30pm - 2:00pm</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-2'>1</td>
              <td className='border border-gray-300 px-2'>Wamae Ndiritu</td>
              <td className='border border-gray-300 px-2'>Dry Cleaning</td>
              <td className='border border-gray-300 px-2'>12:30pm - 2:00pm</td>
            </tr>{" "}
            <tr>
              <td className='border border-gray-300 px-2'>1</td>
              <td className='border border-gray-300 px-2'>Wamae Ndiritu</td>
              <td className='border border-gray-300 px-2'>Dry Cleaning</td>
              <td className='border border-gray-300 px-2'>12:30pm - 2:00pm</td>
            </tr>{" "}
            <tr>
              <td className='border border-gray-300 px-2'>1</td>
              <td className='border border-gray-300 px-2'>Wamae Ndiritu</td>
              <td className='border border-gray-300 px-2'>Dry Cleaning</td>
              <td className='border border-gray-300 px-2'>12:30pm - 2:00pm</td>
            </tr>{" "}
            <tr>
              <td className='border border-gray-300 px-2'>1</td>
              <td className='border border-gray-300 px-2'>Wamae Ndiritu</td>
              <td className='border border-gray-300 px-2'>Dry Cleaning</td>
              <td className='border border-gray-300 px-2'>12:30pm - 2:00pm</td>
            </tr>{" "}
            <tr>
              <td className='border border-gray-300 px-2'>1</td>
              <td className='border border-gray-300 px-2'>Wamae Ndiritu</td>
              <td className='border border-gray-300 px-2'>Dry Cleaning</td>
              <td className='border border-gray-300 px-2'>12:30pm - 2:00pm</td>
            </tr>{" "}
            <tr>
              <td className='border border-gray-300 px-2'>1</td>
              <td className='border border-gray-300 px-2'>Wamae Ndiritu</td>
              <td className='border border-gray-300 px-2'>Dry Cleaning</td>
              <td className='border border-gray-300 px-2'>12:30pm - 2:00pm</td>
            </tr>{" "}
            <tr>
              <td className='border border-gray-300 px-2'>1</td>
              <td className='border border-gray-300 px-2'>Wamae Ndiritu</td>
              <td className='border border-gray-300 px-2'>Dry Cleaning</td>
              <td className='border border-gray-300 px-2'>12:30pm - 2:00pm</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-2'>1</td>
              <td className='border border-gray-300 px-2'>Wamae Ndiritu</td>
              <td className='border border-gray-300 px-2'>Dry Cleaning</td>
              <td className='border border-gray-300 px-2'>12:30pm - 2:00pm</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-2'>1</td>
              <td className='border border-gray-300 px-2'>Wamae Ndiritu</td>
              <td className='border border-gray-300 px-2'>Dry Cleaning</td>
              <td className='border border-gray-300 px-2'>12:30pm - 2:00pm</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-2'>1</td>
              <td className='border border-gray-300 px-2'>Wamae Ndiritu</td>
              <td className='border border-gray-300 px-2'>Dry Cleaning</td>
              <td className='border border-gray-300 px-2'>12:30pm - 2:00pm</td>
            </tr>
          </tbody>
        </table>
      </section>
      <Pagination/>
    </div>
  );
};
export default HomePage;
