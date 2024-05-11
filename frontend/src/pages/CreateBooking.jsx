import { Link } from "react-router-dom";
import UserWidgets from "../components/UserWidgets";

const CreateBooking = () => {
  return (
    <section>
      <UserWidgets />
      <div className='mt-5 flex justify-between'>
        <h2 className='text-xl  text-gray-600 font-semibold'>
          Book your Laundry
        </h2>
        <Link to='/my-account' className='bg-violet-500 text-white px-2 py-1'>
          Bookings
        </Link>
      </div>
      <form className='mt-5 border p-4 rounded grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='col-span-1'>
          <div className='flex flex-col mb-2'>
            <label htmlFor='date' className='py-1'>
              Pick Your Day*
            </label>
            <input
              type='date'
              name='date'
              id='date'
              className='border rounded p-2 focus:outline-violet-500 rounded'
            />
          </div>
          <div className='flex flex-col mb-2'>
            <label htmlFor='schedule' className='py-1'>
              Pick Your Best Schedule*
            </label>
            <select
              name='schedule'
              id='schedule'
              className='py-2 outline-none rounded border'
            >
              <option value=''>---Select Schedule--</option>
              <option value=''>2:00 PM - 4:00 PM</option>
            </select>
          </div>
          <div className='flex flex-col mb-2'>
            <label htmlFor='pick-up' className='py-1'>
              Pick Up Method*
            </label>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='pick_up_method'
                  id='pick_up'
                  className='h-6 w-6 text-violet-500'
                  value='pick_up'
                />
                <label htmlFor='pick_up'>Pick Up From the Laundry Room</label>
              </div>
              <div className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='pick_up_method'
                  id='delivered'
                  className='h-6 w-6 text-violet-500'
                  value='delivered'
                />
                <label htmlFor='pick_up'>Delivered to my Room</label>
              </div>
            </div>
          </div>
          <div className='flex flex-col mb-2'>
            <label htmlFor='hostel_name' className='py-1'>
              Hostel Name*
            </label>
            <input
              type='text'
              className='py-2 text-gray-600 px-2 focus:outline-violet-500 rounded border'
              id='hostel_name'
              name='hostel_name'
            />
          </div>
          <div className='flex flex-col mb-2'>
            <label htmlFor='room_no' className='py-1'>
              Room No*
            </label>
            <input
              type='text'
              className='py-2 text-gray-600 px-2 focus:outline-violet-500 rounded border'
              id='room_no'
              name='room_no'
            />
          </div>
        </div>
        <div className='col-span-1'>
          <h6>Select services (atleast one)</h6>
          <div className='mb-2'>
            <div className='flex items-center gap-2'>
              <input type='checkbox' className='h-4 w-4' id='service_1' />
              <label htmlFor='service_1' className='text-lg'>
                Drying
              </label>
            </div>
            <p className='ml-7 text-gray-600 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <h6 className='mt-5 font-semibold'>Booking Summary</h6>
            <table className='mt-1 w-full'>
              <thead>
                <tr className='border border-gray-300 py-1 px-2'>
                  <th className='border border-gray-300 px-2 py-1'>Item</th>
                  <th className='border border-gray-300 px-2 py-1'>
                    Sub Total (KES)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border border-gray-300 py-1 px-2'>
                  <td className='border border-gray-300 px-2 py-1'>
                    Estimated Totals
                  </td>
                  <td className='border border-gray-300 px-2 py-1'>300</td>
                </tr>
              </tbody>
            </table>
            <button className='w-full my-3 bg-violet-500 text-white px-4 py-2 rounded text-xl'>
              Book Now
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreateBooking;
