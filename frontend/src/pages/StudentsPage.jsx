import { useEffect, useState } from "react";
import Pagination from "../components/pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import { deleteUser, listUsers } from "../redux/actions/userActions";
import Loading from "../utils/Loading";
import Message from "../utils/Message";
import { resetUserState } from "../redux/slices/userSlices";

const StudentsPage = () => {
  const dispatch = useDispatch();
  const {students, loading, error, deleted} = useSelector((state) => state.user);

  const [searchId, setSearchId] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  }

  const handleSearchUserSubmit = (e) => {
    e.preventDefault();
    dispatch(listUsers('students', searchId))
  }

  useEffect(() => {
    dispatch(listUsers('students'));
  }, [dispatch, deleted])
  return (
    <div>
      <div className='w-full mt-3 flex flex-col md:flex-row md:justify-between items-center'>
        <h2 className='my-auto text-3xl font-semibold'>Students</h2>
        <form className='w-3/5 flex gap-2' onSubmit={handleSearchUserSubmit}>
          <input
            type='text'
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder='Search students by ID'
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
        <table className='w-full border'>
          <thead className='border'>
            <tr>
              <th className='border border-gray-300 px-2 text-left'>#</th>
              <th className='border border-gray-300 px-2 text-left'>ID</th>
              <th className='border border-gray-300 px-2 text-left'>
                Full Name
              </th>
              <th className='border border-gray-300 px-2 text-left'>Email</th>
              <th className='border border-gray-300 px-2 text-left'>
                Username
              </th>
              <th className='border border-gray-300 px-2 text-left'>Contact</th>
              <th className='border border-gray-300 px-2 text-left'>Actions</th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr className='border border-gray-300'>
                <td></td>
                <td></td>
                <td></td>
                <Loading />
              </tr>
            </tbody>
          ) : error ? (
            <tbody>
              <tr className='border border-gray-300'>
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
              {students.map((student, index) => {
                return (
                  <tr key={student.id}>
                    <td className='border border-gray-300 px-2'>{index + 1}</td>
                    <td className='border border-gray-300 px-2'>{student.id}</td>
                    <td className='border border-gray-300 px-2'>
                      {student.full_name}
                    </td>
                    <td className='border border-gray-300 px-2 py-2'>
                      {student.email}
                    </td>
                    <td className='border border-gray-300 px-2'>
                      {student.username}
                    </td>
                    <td className='border border-gray-300 px-2'>
                      {student.contact}
                    </td>
                    <td className='border border-gray-300 px-2'>
                      <button
                        className='bg-red-500 text-white px-1 text-sm rounded'
                        onClick={() => handleDelete(student.id)}
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
}

export default StudentsPage