import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Message from "../utils/Message";
import Loading from "../utils/Loading";
import { resetUserState } from "../redux/slices/userSlices";
import { register } from "../redux/actions/userActions";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo, loading, error, created } = useSelector(
    (state) => state.user
  );

  const [userForm, setUserForm] = useState({
    full_name: "",
    username: "",
    email: "",
    contact: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErr, setFormErr] = useState(null);

  const handleFormChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword === userForm.password) {
      dispatch(register(userForm));
    } else {
      setFormErr("Password don't match!");
    }
  };

  useEffect(() => {
    if (created) {
      const interval = setInterval(() => {
        navigate("/my-account");
      }, 5000);

      return () => clearInterval(interval);
    } else if (error) {
      setUserForm({
        full_name: "",
        username: "",
        email: "",
        contact: "",
        password: "",
      });
      setConfirmPassword("")
    }
  }, [navigate, created, error]);

  return (
    <div className='h-screen relative  loginpage'>
      <section className=' flex flex-col items-center absolute top-0 bottom-0 left-0 right-0 overlay'>
        <div className='mt-5 text-center'>
          <h1 className='font-bold text-3xl text-white  '>
            Welcome to Qwetu Loundry Booking System
          </h1>
          <h2 className='text-white'>
            Making loundry services boking easy and more efficient.
          </h2>
        </div>
        <form
          className='bg-white w-2/5 flex flex-col items-center m-auto px-8 py-4  border rounded'
          onSubmit={handleSubmit}
        >
          <h3 className='text-orange-600 font-semibold text-2xl'>Sign Up</h3>
          {loading && <Loading />}
          {error && (
            <Message onClose={() => dispatch(resetUserState())}>
              {error}
            </Message>
          )}
          {formErr && (
            <Message onClose={() => setFormErr(null)}>{formErr}</Message>
          )}
          {created && (
            <Message
              variant='success'
              onClose={() => dispatch(resetUserState())}
            >
              Your account has been created successfully! Please wait as
              you&apos;ll be redirected shortly...
            </Message>
          )}
          <div className='w-full flex flex-col'>
            <label htmlFor='Full Name' className='py-1'>
              Full Name
            </label>
            <input
              type='text'
              className=' focus:outline-violet-600 py-1 px-4 border'
              required
              name='full_name'
              value={userForm.full_name}
              onChange={handleFormChange}
            />
            <label htmlFor='user name' className='py-1'>
              User Name
            </label>
            <input
              type='text'
              className=' focus:outline-violet-600 py-1 px-4 border'
              required
              name='username'
              value={userForm.username}
              onChange={handleFormChange}
            />
            <label htmlFor='email' className='py-1'>
              Email
            </label>
            <input
              type='email'
              className=' focus:outline-violet-600 py-1 px-4 border'
              required
              name='email'
              value={userForm.email}
              onChange={handleFormChange}
            />
            <label htmlFor='contact' className='py-1'>
              Contact
            </label>
            <input
              type='number'
              className=' focus:outline-violet-600 py-1 px-4 border'
              required
              name='contact'
              value={userForm.contact}
              onChange={handleFormChange}
            />
            <label htmlFor='password' className='py-1'>
              Password
            </label>
            <input
              type='password'
              className=' focus:outline-violet-600 py-1 px-4 border'
              required
              name='password'
              value={userForm.password}
              onChange={handleFormChange}
            />
            <label htmlFor='password' className='py-1'>
              Confirm Password
            </label>
            <input
              type='password'
              className=' focus:outline-violet-600 py-1 px-4 border'
              required
              name='confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type='submit'
              className='bg-orange-600 text-white py-2 rounded my-2'
            >
              Sign Up
            </button>
            <section className='flex  gap-1 text-violet-600'>
              <p>Already have an account? </p>
              <NavLink to='/login' className='underline '>
                <p>Sign In</p>
              </NavLink>
            </section>
          </div>
        </form>
      </section>
    </div>
  );
};
export default RegisterPage;
