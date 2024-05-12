import Loading from "../utils/Loading";
import Message from "../utils/Message";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createSchedule,
  deleteSchedule,
  listSchedules,
} from "../redux/actions/scheduleActions";
import { resetScheduleState } from "../redux/slices/scheduleSlices";
import { convertTime } from "../utils/helpers";

const SchedulesPage = () => {
  const dispatch = useDispatch();

  const { schedules, loading, error, created, deleted } = useSelector(
    (state) => state.schedule
  );

  const [scheduleForm, setScheduleForm] = useState({
    start_time: "",
    end_time: "",
  });

  const handleFormChange = (e) => {
    e.preventDefault();
    setScheduleForm({ ...scheduleForm, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    alert("Are you sure you want to delete!");
    dispatch(deleteSchedule(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(scheduleForm);
    dispatch(createSchedule(scheduleForm));
  };

  useEffect(() => {
    dispatch(listSchedules());
  }, [dispatch, created, deleted]);

  useEffect(() => {
    if (created || error) {
      setScheduleForm({
        start_time: "",
        end_time: "",
      });
    }
  }, [created, error]);
  return (
    <div className='w-full border flex flex-col items-center p-4'>
      <h2 className='my-5 text-3xl font-semibold'>Schedules</h2>
      <section className='md:w-2/5'>
        <div className='w-full flex gap-3 items-end'>
          <div className='flex-1 flex flex-col gap-1'>
            <label htmlFor='start_time'>Start</label>
            <input
              type='time'
              id=''
              className='border'
              required
              name='start_time'
              value={scheduleForm.start_time}
              onChange={handleFormChange}
            />
          </div>
          <div className='flex-1 flex flex-col gap-1'>
            <label htmlFor='start_time'>End</label>
            <input
              type='time'
              id=''
              className='border'
              name='end_time'
              value={scheduleForm.end_time}
              onChange={handleFormChange}
            />
          </div>
          <button
            className='flex-1 bg-orange-600 text-white px-4 py-1 rounded'
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
        <section className='my-5'>
          {loading && <Loading />}
          {error && (
            <Message onClose={() => dispatch(resetScheduleState())}>
              {error}
            </Message>
          )}
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
              {schedules.map((schedule, index) => {
                return (
                  <tr key={schedule.id}>
                    <td className='border border-gray-300 p-2'>{index + 1}</td>
                    <td className='border border-gray-300 p-2'>
                      {convertTime(schedule.start_time)}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      {convertTime(schedule.end_time)}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      <button
                        className='bg-red-500 text-white px-1 text-sm rounded'
                        onClick={() => handleDelete(schedule.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </section>
    </div>
  );
};

export default SchedulesPage;
