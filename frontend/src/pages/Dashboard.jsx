import GroupIcon from "@mui/icons-material/Group";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import Face2Icon from "@mui/icons-material/Face2";
import Pagination from "../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { listBookings } from "../redux/actions/bookingActions";
import { getStats } from "../redux/actions/userActions";
import Loading from "../utils/Loading";
import Message from "../utils/Message";
import { resetBookingState } from "../redux/slices/bookingSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { bookings, loading, error } = useSelector((state) => state.booking);
  const { stats } = useSelector((state) => state.user);

  const [searchId, setSearchId] = useState("");

  const handleSearchBooking = (e) => {
    e.preventDefault();
    dispatch(listBookings(searchId));
  };

  useEffect(() => {
    dispatch(listBookings());
    dispatch(getStats());
  }, [dispatch]);

  return (
    <div>
      <section className='w-full grid grid-cols-1 md:grid-cols-4 gap-3'>
        <div className='col-span-1 shadow bg-violet-500 text-white rounded p-4 flex gap-3'>
          <span className=''>
            <GroupIcon style={{ fontSize: "50px" }} />
          </span>
          <span>
            <h4 className='text-xl'>Total Students</h4>
            <p>{stats?.student_count}</p>
          </span>
        </div>
        <div className='col-span-1 shadow bg-orange-600 text-white rounded p-4 flex gap-3'>
          <span className=''>
            <EditCalendarIcon style={{ fontSize: "50px" }} />
          </span>
          <span>
            <h4 className='text-xl'>Total Bookings</h4>
            <p>{stats?.booking_count}</p>
          </span>
        </div>
        <div className='col-span-1 shadow bg-violet-500 text-white rounded p-4 flex gap-3'>
          <span className=''>
            <DryCleaningIcon style={{ fontSize: "50px" }} />
          </span>
          <span>
            <h4>Total Services</h4>
            <p>{stats?.service_count}</p>
          </span>
        </div>
        <div className='col-span-1 shadow bg-orange-600 text-white rounded p-4 flex gap-3'>
          <span className=''>
            <Face2Icon style={{ fontSize: "50px" }} />
          </span>
          <span>
            <h4>Total Staff</h4>
            <p>{stats?.staff_count}</p>
          </span>
        </div>
      </section>
      <h2 className='mt-5 text-3xl font-semibold'>Bookings</h2>
      <div className='w-full mt-3 flex justify-between'>
        <form className='w-3/5 flex gap-2' onSubmit={handleSearchBooking}>
          <input
            type='text'
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder='Search bookings by ID'
            className='flex-1 py-2 px-4 border focus:outline-violet-500 rounded'
          />
          <button
            type='submit'
            className='w-1/5 bg-orange-600 text-white rounded py-2'
          >
            Search
          </button>
        </form>
      </div>
      <section className='w-full overflow-x-auto my-5'>
        <table className='w-max border'>
          <thead className='border'>
            <tr>
              <th className='border border-gray-300 px-2 py-1 text-left'>#</th>
              <th className='border border-gray-300 px-2 py-1 text-left'>
                Booking ID
              </th>
              <th className='border border-gray-300 px-2 py-1 text-left'>
                Student Name
              </th>
              <th className='border border-gray-300 px-2 py-1 text-left'>
                Pick Up Method
              </th>
              <th className='border border-gray-300 px-2 py-1 text-left'>
                Hostel Name/Location
              </th>
              <th className='border border-gray-300 px-2 py-1 text-left'>
                Room No
              </th>
              <th className='border border-gray-300 px-2 py-1 text-left'>
                Service(s)
              </th>
              <th className='border border-gray-300 px-2 py-1 text-left'>
                Schedule
              </th>
              <th className='border border-gray-300 px-2 py-1 text-left'>
                Additional Notes
              </th>
              <th className='border border-gray-300 px-2 py-1 text-left'>
                Status
              </th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr className='border border-gray-300'>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Loading />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          ) : error ? (
            <tbody>
              <tr className='border border-gray-300'>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Message onClose={() => dispatch(resetBookingState())}>
                    {error}
                  </Message>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id} className='text-gray-600'>
                  <td className='border border-gray-300 p-2'>{index + 1}</td>
                  <td className='border border-gray-300 p-2 text-sm'>
                    BK# {booking.id}
                  </td>
                  <td className='border border-gray-300 p-2'>
                    {booking.client}
                  </td>
                  <td className='border border-gray-300 p-2'>
                    {booking.pick_up_method === "pick_up"
                      ? "Pick Up"
                      : booking.pick_up_method === "delivered" &&
                        "Room Delivery"}
                  </td>
                  <td className='border border-gray-300 p-2 text-sm'>
                    {booking.pick_up_method === "pick_up"
                      ? "N/A"
                      : booking.hostel_name}
                  </td>
                  <td className='border border-gray-300 p-2 text-sm'>
                    {booking.pick_up_method === "pick_up"
                      ? "N/A"
                      : `RM ${booking.room_no}`}
                  </td>
                  <td className='border border-gray-300 p-2'>
                    {booking.services.map((service) => `${service.title}, `)}
                  </td>
                  <td className='border border-gray-300 p-2'>
                    12:30pm - 2:00pm
                  </td>
                  <td className='border border-gray-300 p-2 text-gray-600 text-sm'>
                    {booking.notes}
                  </td>
                  <td className='border border-gray-300 p-2'>
                    <span className='bg-red-500 px-2 py-1 text-sm rounded text-white'>
                      Not Done
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </section>
      <Pagination />
    </div>
  );
};
export default HomePage;
