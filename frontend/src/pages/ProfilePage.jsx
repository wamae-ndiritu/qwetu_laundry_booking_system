const ProfilePage = () => {
  return (
    <div className='flex justify-center border p-4'>
      <div className='flex flex-col  w-2/5'>
        <img
          className='m-auto h-32 w-32 border border-orange-600 object-cover rounded-full'
          src='/profile.jpeg'
          alt='profile'
        />
        <section className='m-auto font-semibold'>
          <span className='flex gap-5 items-center'>
            <h2 className='text-2xl py-2'>Water White</h2>
            <span className='bg-orange-600 px-2 py-1 rounded text-white'>
              waterwhite
            </span>
          </span>
          <span className='flex gap-5 items-center font-normal'>
            <h3 className='text-gray-600'>waterwhite@gmail.com</h3>
            <p className='text-gray-600 text-md'>0745689756</p>
          </span>
        </section>
        <h2 className='my-5 text-xl font-semibold'>Edit To Update</h2>
        <div className='flex flex-col mb-2'>
          <label className htmlFor='fullName'>
            Full Name
          </label>
          <input
            placeholder='John Doe'
            type='text'
            id='fullName'
            className='bg-slate-100 text-gray-600 p-2 rounded focus:outline-orange-600'
          />
        </div>
        <div className='flex flex-col mb-2'>
          <lable htmlFor='email'>Email</lable>
          <input
            placeholder='example@example.com'
            type='email'
            id='email'
            className='bg-slate-100 text-gray-600 p-2 rounded focus:outline-orange-600'
          />
        </div>
        <div className='flex flex-col mb-2'>
          <lable htmlFor='contact'>Contact</lable>
          <input
            placeholder='+254780276360'
            type='text'
            id='contact'
            className='bg-slate-100 text-gray-600 p-2 rounded focus:outline-orange-600'
          />
        </div>
        <div className='flex flex-col mb-2'>
          <lable htmlFor='password'>Password</lable>
          <input
            placeholder='+254780276360'
            type='password'
            id='password'
            className='bg-slate-100 text-gray-600 p-2 rounded focus:outline-orange-600'
          />
        </div>
        <div className='flex flex-col mb-2'>
          <lable htmlFor='confirm_pass'>Confirm Password</lable>
          <input
            placeholder='+254780276360'
            type='password'
            id='confirm_pass'
            className='bg-slate-100 text-gray-600 p-2 rounded focus:outline-orange-600'
          />
        </div>
        <button className='bg-orange-600 rounded my-2 text-xl text-white py-4'>
          Update Info
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
