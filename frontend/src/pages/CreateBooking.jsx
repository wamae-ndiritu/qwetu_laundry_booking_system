import { Link } from "react-router-dom";
import UserWidgets from "../components/UserWidgets";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { listServices } from "../redux/actions/serviceActions";
import { listSchedules } from "../redux/actions/scheduleActions";
import { convertTime, validateObject } from "../utils/helpers";
import Message from "../utils/Message";
import { createBooking } from "../redux/actions/bookingActions";
import { resetBookingState } from "../redux/slices/bookingSlice";
import Loading from "../utils/Loading";

const CreateBooking = () => {
  const dispatch = useDispatch();
  const {services} = useSelector((state) => state.service);
  const {schedules} = useSelector((state) => state.schedule);
  const {loading, error, created} = useSelector((state) => state.booking);

  const [showHostelInfo, setShowHostelInfo] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    date: '',
    schedule: '',
    pick_up_method: '',
    hostel_name: '',
    room_no: '',
  });
  const [notes, setNotes] = useState('No additional notes');
  const [bookingFormErr, setBookingFormErr] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [cartServices, setCartServices] = useState([]);
  const [bookingTotals, setBookingTotals] = useState(0);

   const handleSelectService = (e, id) => {
     const existingId = selectedServices?.find((selectedId) => selectedId === id);
     if (existingId) {
       const newArray = selectedServices.filter((prevId) => prevId !== id);
       setSelectedServices(newArray);
       const newCartItems = cartServices?.filter((item) => item.id !== id);
       setCartServices(newCartItems);
     } else {
       setSelectedServices((prevState) => [...prevState, id]);
       const serviceItem = services?.find((item) => item.id === id);
       setCartServices((prevState) => [...prevState, serviceItem])
     }
   };


  const handleBookingFormChange = (e) => {
    const {name, value} = e.target;
    setBookingForm((prevState) => {
      return { ...prevState, [name]: value };
    })
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingFormErr(null);
    let bookingData = {}
    if (bookingForm.pick_up_method !== '' && bookingForm.pick_up_method !== 'delivered'){
      // If the selected method is not delivery, the hostel and room fields will have no values, we need to clean them not to be sent
      const obj = {...bookingForm};
      let newObj = {};
      for (let key in obj){
        if (key !== 'hostel_name' && key !== 'room_no'){
          newObj[key] = obj[key]
        }
      }
      const emptyKey = validateObject(newObj);
      if (emptyKey) {
        setBookingFormErr(
          `${emptyKey} is required! All fields marked with * are required!`
        );
        return;
      }
      bookingData = {...newObj}
    }else{
       const emptyKey = validateObject(bookingForm);
       if (emptyKey) {
         setBookingFormErr(
           "If you choose Items to be delivered, please fill the Hostel Name and Room No fields!"
         );
         return;
       }
       bookingData = {...bookingForm}
    }
    if (selectedServices.length === 0){
      // no selected service
      setBookingFormErr("Please select atleast one service to book!");
      return;
    }
    dispatch(
      createBooking({ ...bookingData, services: selectedServices, notes, amount: bookingTotals })
    );
  }

  useEffect(() => {
    if (error || created){
      setBookingForm({
        date: "",
        schedule: "",
        pick_up_method: "",
        hostel_name: "",
        room_no: "",
      });
      setSelectedServices([]);
      setNotes('No additional notes')
      setBookingTotals(0)
    }
    if (created) {
      setBookingSuccess('Your services has been booked successfully!');
      const interval = setInterval(() => {
        dispatch(resetBookingState());
      }, 5000)

      return () => clearInterval(interval);
    }
  }, [dispatch, error, created])

  useEffect(() => {
    if (bookingForm.schedule !== ''){
      const schedule = schedules.find(
        (schedule) => schedule.id === Number(bookingForm.schedule)
      );
      const [start_hrs, start_min] = schedule.start_time.split(':').map(Number);
      const [end_hrs, end_min] = schedule.end_time.split(':').map(Number);
      const startMinutes = (start_hrs * 60) + start_min;
      const endMinutes = (end_hrs * 60) + end_min;
      let no_of_min = (endMinutes - startMinutes);
      if (no_of_min < 0){
        no_of_min += 24 * 60
      }
      const no_of_hrs = no_of_min / 60;
      const total = cartServices.reduce((a, b) => a + b.rate * no_of_hrs, 0)
      setBookingTotals(total)
    }
  }, [schedules, bookingForm, cartServices])

  useEffect(() => {
    if (bookingForm.pick_up_method === 'delivered'){
      setShowHostelInfo(true);
    } else {
      setShowHostelInfo(false);
    }
  }, [bookingForm])

  useEffect(() => {
    dispatch(listServices());
    dispatch(listSchedules());
  }, [dispatch])
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
      {
        loading && <Loading />
      }
      {bookingFormErr && (
        <Message onClose={() => setBookingFormErr(null)}>
          {bookingFormErr}
        </Message>
      )}
      {error && (
        <Message onClose={() => dispatch(resetBookingState())}>{error}</Message>
      )}
      {bookingSuccess && (
        <Message variant='success' onClose={() => setBookingSuccess(null)}>
          {bookingSuccess}
        </Message>
      )}
      <form
        className='mt-5 border p-4 rounded grid grid-cols-1 md:grid-cols-2 gap-5'
        onSubmit={handleBookingSubmit}
      >
        <div className='col-span-1'>
          <div className='flex flex-col mb-2'>
            <label htmlFor='date' className='py-1'>
              Pick Your Day*
            </label>
            <input
              type='date'
              name='date'
              id='date'
              value={bookingForm.date}
              onChange={handleBookingFormChange}
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
              value={bookingForm.schedule}
              onChange={handleBookingFormChange}
              className='py-2 outline-none rounded border'
            >
              <option value=''>---Select Schedule--</option>
              {schedules.map((schedule) => {
                return (
                  <option value={schedule.id} key={schedule.id}>
                    {convertTime(schedule.start_time)} -{" "}
                    {convertTime(schedule.end_time)}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='flex flex-col mb-2'>
            <label htmlFor='pick-up' className='py-1'>
              Pick Up Method*
            </label>
            <select
              name='pick_up_method'
              id='pick-up'
              value={bookingForm.pick_up_method}
              onChange={handleBookingFormChange}
              className='py-2 outline-none rounded border'
            >
              <option value=''>---Select Pick Up Method--</option>
              <option value='pick_up'>Pick Up From the Laundry Room</option>
              <option value='delivered'>Delivered to my Room</option>
            </select>
          </div>
          <div
            className={`flex flex-col mb-2 ${
              showHostelInfo ? "visible" : "invisible"
            }`}
          >
            <label htmlFor='hostel_name' className='py-1'>
              Hostel Name*
            </label>
            <input
              type='text'
              name='hostel_name'
              value={bookingForm.hostel_name}
              onChange={handleBookingFormChange}
              className='py-2 text-gray-600 px-2 focus:outline-violet-500 rounded border'
              id='hostel_name'
            />
          </div>
          <div
            className={`flex flex-col mb-2 ${
              showHostelInfo ? "visible" : "invisible"
            }`}
          >
            <label htmlFor='room_no' className='py-1'>
              Room No*
            </label>
            <input
              type='text'
              className='py-2 text-gray-600 px-2 focus:outline-violet-500 rounded border'
              id='room_no'
              name='room_no'
              value={bookingForm.room_no}
              onChange={handleBookingFormChange}
            />
          </div>
        </div>
        <div className='col-span-1'>
          <h6>Select services (atleast one)</h6>
          {services.map((service) => {
            return (
              <div className='mb-2' key={service.id}>
                <div className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    className='h-4 w-4'
                    id={`service_${service.id}`}
                    checked={selectedServices.includes(service.id)}
                    onChange={(e) => handleSelectService(e, service.id)}
                  />
                  <label htmlFor={`service_${service.id}`} className='text-lg'>
                    {service.title}
                  </label>
                </div>
                <p className='ml-7 text-gray-600 text-sm'>
                  {service.description}
                </p>
              </div>
            );
          })}
          <div className={`flex flex-col mb-2 `}>
            <label htmlFor='notes' className='py-1'>
              Additional Notes
            </label>
            <textarea
              name='notes'
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className='py-2 text-gray-600 px-2 focus:outline-violet-500 rounded border'
              id='notes'
            ></textarea>
          </div>
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
                <td className='border border-gray-300 px-2 py-1'>
                  {bookingTotals ? bookingTotals : "--"}
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type='submit'
            className='w-full my-3 bg-violet-500 text-white px-4 py-2 rounded text-xl'
          >
            Book Now
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateBooking;
