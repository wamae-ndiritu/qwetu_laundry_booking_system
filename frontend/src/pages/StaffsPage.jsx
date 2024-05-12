import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/pagination/Pagination";
import { useEffect, useState } from "react";
import { deleteUser, listUsers } from "../redux/actions/userActions";
import Loading from "../utils/Loading";
import Message from "../utils/Message";
import { resetUserState } from "../redux/slices/userSlices";

const StaffsPage = () => {
  const dispatch = useDispatch();
  const {staffs, loading, error} = useSelector((state) => state.user);

  const [searchId, setSearchId] = useState('');

  const handleSearchUserSubmit = (e) => {
    e.preventDefault();
    dispatch(listUsers('staffs', searchId))
  }

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(listUsers('staffs'))
  }, [dispatch])
  return (
    <div>
      <div className='w-full mt-3 flex flex-col md:flex-row md:justify-between items-center'>
        <h2 className='my-auto text-3xl font-semibold'>Staffs</h2>
        <form className='w-3/5 flex gap-2' onSubmit={handleSearchUserSubmit}>
          <input
            type='text'
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder='Search staff by ID'
            className='flex-1 py-2 px-4 border focus:outline-violet-500 rounded'
          />
          <button type="submit" className='w-1/5 bg-orange-600 text-white rounded py-2'>
            Search
          </button>
        </form>
      </div>
      <section className='w-full overflow-x-auto my-5'>
        <table className='w-full border'>
          <thead className='border'>
            <th className='border border-gray-300 px-2 text-left'>#</th>
            <th className='border border-gray-300 px-2 text-left'>ID</th>
            <th className='border border-gray-300 px-2 text-left'>Full Name</th>
            <th className='border border-gray-300 px-2 text-left'>Email</th>
            <th className='border border-gray-300 px-2 text-left'>Username</th>
            <th className='border border-gray-300 px-2 text-left'>Contact</th>
            <th className='border border-gray-300 px-2 text-left'>Actions</th>
          </thead>
          {loading ? (
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Loading />
                </td>
              </tr>
            </tbody>
          ) : error ? (
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Message onClose={() => dispatch(resetUserState())}>
                    {error}
                  </Message>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {staffs.map((staff, index) => {
                return (
                  <tr key={staff.id}>
                    <td className='border border-gray-300 px-2'>{index + 1}</td>
                    <td className='border border-gray-300 px-2'>{staff.id}</td>
                    <td className='border border-gray-300 px-2'>
                      {staff.full_name}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      {staff.email}
                    </td>
                    <td className='border border-gray-300 px-2'>
                      {staff.username}
                    </td>
                    <td className='border border-gray-300 px-2'>
                      {staff.contact}
                    </td>
                    <td className='border border-gray-300 px-2'>
                      <button
                        className='bg-red-500 text-white px-1 text-sm rounded'
                        onClick={() => handleDelete(staff.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </section>
      <Pagination rootPath='/students' />
    </div>
  );
};

export default StaffsPage;
