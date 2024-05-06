import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { createService, deleteService, listServices } from "../redux/actions/serviceActions";
import Loading from "../utils/Loading";
import Message from "../utils/Message";
import { resetServiceState } from "../redux/slices/serviceSlice";

const ServicesPage = () => {
  const dispatch = useDispatch();

  const {services, loading, error, created, deleted} = useSelector((state) => state.service);

  const [serviceForm, setServiceForm] = useState({
    title: "",
    rate: "",
    description: ""
  });

  const handleFormChange = (e) => {
    e.preventDefault();
    setServiceForm({...serviceForm, [e.target.name]: e.target.value})
  }

  const handleDelete = (id) => {
    alert("Are you sure you want to delete!");
    dispatch(deleteService(id));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createService(serviceForm));
  }

  useEffect(() => {
    dispatch(listServices())
  }, [dispatch, created, deleted])

  useEffect(() => {
    if (created || error){
      setServiceForm({
        title: "",
        rate: "",
        description: "",
      });
    }
  }, [created, error])
  return (
    <div>
      <h2 className='text-3xl my-5 font-semibold'>Services</h2>
      <section className='grid grid-cols-1 md:grid-cols-5 gap-5'>
        <form className='col-span-1 md:col-span-2 border p-4 flex flex-col' onSubmit={handleSubmit}>
          <h6 className='text-xl font-semibold my-3'>Add Item</h6>
          {
            loading && <Loading />
          }
          {
            error && <Message onClose={() => dispatch(resetServiceState())}>{error}</Message>
          }
          <label htmlFor='item' className='py-1 text-gray-600'>
            Item Title
          </label>
          <input
            type='text'
            className='border border-gray-300 rounded focus:outline-orange-600 p-2'
            id='item'
            required
            name='title'
            value={serviceForm.title}
            onChange={handleFormChange}
          />
          <label htmlFor='rate' className='py-1 text-gray-600'>
            Hourly Rate
          </label>
          <input
            type='number'
            className='border border-gray-300 rounded focus:outline-orange-600 p-2'
            id='rate'
            required
            name='rate'
            value={serviceForm.rate}
            onChange={handleFormChange}
          />
          <label htmlFor='item_desc' className='py-1 text-gray-600'>
            Description
          </label>
          <textarea
            rows={3}
            className='border border-gray-300 rounded focus:outline-orange-600 p-2'
            id='item_desc'
            required
            name='description'
            value={serviceForm.description}
            onChange={handleFormChange}
          ></textarea>
          <button type="submit"
            className='w-full bg-orange-600 text-white hover:cusor-pointer 
           my-3 p-2 rounded '
          >
            Create Course
          </button>
        </form>
        <div className='col-span-1 md:col-span-3 overflow-x-auto'>
          <h6 className='text-xl my-1 font-semibold'>Services List</h6>
          <table className='w-full border'>
            <thead className=''>
              <tr className='text-left'>
                <th className='border border-gray-300 p-2'>ID</th>
                <th className='border border-gray-300 p-2'>Item Title</th>
                <th className='border border-gray-300 p-2'>Rate</th>
                <th className='border border-gray=300 p-2'>Description</th>
                <th className='border border-gray-300 p-2'>Actions</th>
              </tr>
            </thead>
            <tbody className=''>
             {
              services.map((service, index) => {
                return (
                  <tr key={service.id}>
                    <td className='border border-gray-300 p-2'>{index + 1}</td>
                    <td className='border border-gray-300 p-2'>
                      {service.title}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      {service.rate}
                    </td>
                    <td className='border border-gray-300 p-2'>
                     {service.description}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      <button className='bg-red-500 text-white px-1 text-sm rounded' onClick={() => handleDelete(service.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
             }
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
