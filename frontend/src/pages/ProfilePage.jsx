import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../utils/Loading";
import Message from "../utils/Message";
import { resetUserState } from "../redux/slices/userSlices";
import { updateUser } from "../redux/actions/userActions";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const {userInfo, loading, error, updated} = useSelector((state) => state.user);
  const [userForm, setUserForm] = useState({
    full_name: "",
    email: "",
    contact: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFormChange = (e) => {
    setUserForm({...userForm, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
     const filteredUser = {};
     for (const key in userForm) {
       if (userForm[key] !== "") {
         filteredUser[key] = userForm[key];
       }
     }

     // Check if password is present and add it to the filteredUser
     if (password !== "") {
       filteredUser.password = password;
     }

     dispatch(updateUser(userInfo?.user?.id, filteredUser));
  }

  useEffect(() => {
    if (userInfo?.user){
      setUserForm(userInfo.user)
    }
  }, [userInfo])

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
            <h2 className='text-2xl py-2'>{userInfo?.user?.full_name}</h2>
            <span className='bg-orange-600 px-2 py-1 rounded text-white'>
              {userInfo?.user?.username}
            </span>
          </span>
          <span className='flex gap-5 items-center font-normal'>
            <h3 className='text-gray-600'>{userInfo?.user?.email}</h3>
            <p className='text-gray-600 text-md'>{userInfo?.user?.contact}</p>
          </span>
        </section>
        <h2 className='my-5 text-xl font-semibold'>Edit To Update</h2>
        {loading && <Loading />}
        {error && (
          <Message onClose={() => dispatch(resetUserState())}>{error}</Message>
        )}
        {updated && (
          <Message variant="success" onClose={() => dispatch(resetUserState())}>Your profile has been updated!</Message>
        )}
        <div className='flex flex-col mb-2'>
          <label htmlFor='fullName'>
            Full Name
          </label>
          <input
            placeholder='John Doe'
            type='text'
            id='fullName'
            className='bg-slate-100 text-gray-600 p-2 rounded focus:outline-orange-600'
            name='full_name'
            value={userForm.full_name}
            onChange={handleFormChange}
          />
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor='email'>Email</label>
          <input
            placeholder='example@example.com'
            type='email'
            id='email'
            className='bg-slate-100 text-gray-600 p-2 rounded focus:outline-orange-600'
            name='email'
            value={userForm.email}
            onChange={handleFormChange}
          />
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor='contact'>Contact</label>
          <input
            placeholder='+254780276360'
            type='text'
            id='contact'
            className='bg-slate-100 text-gray-600 p-2 rounded focus:outline-orange-600'
            name='contact'
            value={userForm.contact}
            onChange={handleFormChange}
          />
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor='password'>Password</label>
          <input
            placeholder='+254780276360'
            type='password'
            id='password'
            className='bg-slate-100 text-gray-600 p-2 rounded focus:outline-orange-600'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor='confirm_pass'>Confirm Password</label>
          <input
            placeholder='+254780276360'
            type='password'
            id='confirm_pass'
            className='bg-slate-100 text-gray-600 p-2 rounded focus:outline-orange-600'
            name='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          className='bg-orange-600 rounded my-2 text-xl text-white py-4'
          onClick={handleSubmit}
        >
          Update Info
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
