import { Link } from "react-router-dom";
import UserWidgets from "../components/UserWidgets";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listUserBookings } from "../redux/actions/bookingActions";
import { convertTime } from "../utils/helpers";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const {userInfo} = useSelector((state) => state.user);
  const {myBookings} = useSelector((state) => state.booking);

  useEffect(() => {
    if (userInfo?.user){
      dispatch(listUserBookings(userInfo?.user?.id));
    }
  }, [dispatch, userInfo])

  console.log(myBookings)
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
        {
          myBookings.map((booking) => {
            return (
              <div
                className='bg-white rounded border py-2 flex justify-around'
                key={booking.id}
              >
                <span className='flex flex-col'>
                  <h5 className='text-lg'>Booking ID</h5>
                  <h6 className='text-gray-600'>#{booking.id}</h6>
                </span>
                <span className='flex flex-col'>
                  <h5 className='text-lg'>Shedule</h5>
                  <h6 className='text-gray-600'>
                    {booking.date} {convertTime(booking.schedule.start_time)} -{" "}
                    {convertTime(booking.schedule.end_time)}
                  </h6>
                </span>
                <span className='flex flex-col'>
                  <h5 className='text-lg'>Services</h5>
                  <ul className='mx-0 px-0 list-none text-gray-600 text-sm flex gap-3'>
                    {booking.services.map((service) => (
                      <li className='' key={service.id}>
                        {service.title}
                      </li>
                    ))}
                  </ul>
                </span>
                <span className='flex flex-col'>
                  <h5 className='text-lg'>Status</h5>
                  <h6 className='bg-red-200 rounded px-2 text-red-500'>
                    Not Done
                  </h6>
                </span>
                <span className='flex flex-col'>
                  <h5 className='text-lg'>Pick Up Method</h5>
                  <h6 className='bg-blue-200 text-sm text-blue-500 rounded px-2'>
                    {booking.pick_up_method === "pick_up"
                      ? "Pick Up From the Laundry Room"
                      : booking.pick_up_method === "delivered" &&
                        "Delivered to my Room"}
                  </h6>
                </span>
                <span
                  className={`flex flex-col ${
                    booking.pick_up_method === "pick_up"
                      ? "invisible"
                      : "visible"
                  }`}
                >
                  <h5 className='text-lg'>Hostel Info</h5>
                  <h6 className='text-gray-600'>
                    {booking?.hostel_name}, Room {booking?.room_no}
                  </h6>
                </span>
                <span className='flex flex-col'>
                  <h5 className='text-lg'>Totals</h5>
                  <h6 className='text-gray-600'>KES {booking.amount}</h6>
                </span>
              </div>
            );
          })
        }
      </section>
    </section>
  );
};

export default UserDashboard;
