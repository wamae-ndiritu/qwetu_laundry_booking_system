import { Link } from "react-router-dom";
import UserWidgets from "../components/UserWidgets";

const UserDashboard = () => {
  return (
    <section>
      <UserWidgets />
      <div className='mt-5 flex justify-between'>
        <h2 className='text-xl  text-gray-600 font-semibold'>My Bookings</h2>
        <Link
          to='/my-account/bookings/new'
          className='bg-violet-500 text-white px-2 py-1'
        >
          Add Booking
        </Link>
      </div>
      {/* Bookings */}
      <section className='mt-3 flex flex-col gap-5'>
        <div className='bg-white rounded border py-2 flex justify-around'>
          <span className='flex flex-col'>
            <h5 className='text-lg'>Booking ID</h5>
            <h6 className='text-gray-600'>#1</h6>
          </span>
          <span className='flex flex-col'>
            <h5 className='text-lg'>Shedule</h5>
            <h6 className='text-gray-600'>Today 2:00 PM - 4:00 PM</h6>
          </span>
          <span className='flex flex-col'>
            <h5 className='text-lg'>Services</h5>
            <ul className='mx-0 px-0 list-none text-gray-600 text-sm flex gap-3'>
              <li className=''>Cleaning</li>
              <li>Drying</li>
              <li>Ironing</li>
            </ul>
          </span>
          <span className='flex flex-col'>
            <h5 className='text-lg'>Status</h5>
            <h6 className='bg-green-200 rounded px-2 text-green-500'>Done</h6>
          </span>
          <span className='flex flex-col'>
            <h5 className='text-lg'>Pick Up Method</h5>
            <h6 className='bg-blue-200 text-sm text-blue-500 rounded px-2'>
              Pick Up From the Laundry Room
            </h6>
          </span>
          <span className='flex flex-col'>
            <h5 className='text-lg'>Totals</h5>
            <h6 className='text-gray-600'>KES 300</h6>
          </span>
        </div>
        <div className='bg-white rounded border py-2 flex justify-around'>
          <span className='flex flex-col'>
            <h5 className='text-lg'>Booking ID</h5>
            <h6 className='text-gray-600'>#1</h6>
          </span>
          <span className='flex flex-col'>
            <h5 className='text-lg'>Shedule</h5>
            <h6 className='text-gray-600'>Today 2:00 PM - 4:00 PM</h6>
          </span>
          <span className='flex flex-col'>
            <h5 className='text-lg'>Services</h5>
            <ul className='mx-0 px-0 list-none text-gray-600 text-sm flex gap-3'>
              <li className=''>Cleaning</li>
              <li>Drying</li>
              <li>Ironing</li>
            </ul>
          </span>
          <span className='flex flex-col'>
            <h5 className='text-lg'>Status</h5>
            <h6 className='bg-green-200 rounded px-2 text-green-500'>Done</h6>
          </span>
          <span className='flex flex-col'>
            <h5 className='text-lg'>Pick Up Method</h5>
            <h6 className='bg-blue-200 text-sm text-blue-500 rounded px-2'>
              Pick Up From the Laundry Room
            </h6>
          </span>
          <span className='flex flex-col'>
            <h5 className='text-lg'>Totals</h5>
            <h6 className='text-gray-600'>KES 300</h6>
          </span>
        </div>
      </section>
    </section>
  );
};

export default UserDashboard;
