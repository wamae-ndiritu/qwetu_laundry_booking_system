import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/userActions";
import Message from "../utils/Message";
import { resetUserState } from "../redux/slices/userSlices";
import Loading from "../utils/Loading";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {userInfo, loading, error} = useSelector((state) => state.user);

  const [userForm, setUserForm] = useState({
    email: "",
    password: ""
  });

  const handleFormChange = (e) => {
    setUserForm({...userForm, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userForm))
  }

  useEffect(() => {
    if (userInfo?.user?.is_superuser) {
      navigate("/");
    }else if (userInfo?.token?.access) {
      navigate("/my-account")
    }
  }, [navigate, userInfo])

  return (
    <div className="h-screen relative  loginpage">
      <section className=" flex flex-col items-center absolute top-0 bottom-0 left-0 right-0 overlay">
        <div className="mt-40 text-center">
          <h1 className="font-bold text-3xl text-white  ">
            Welcome to Qwetu Loundry Booking System
          </h1>
          <h2 className="text-white ">
            Making loundry services boking easy and more efficient.
          </h2>
        </div>
        <form className="bg-white w-2/6 flex flex-col items-center mt-5 px-8 py-4  border rounded " onSubmit={handleSubmit}>
          <h3 className="text-orange-600 font-semibold text-2xl">Sign In</h3>
          {
            loading && <Loading/>
          }
          {
            error && <Message onClose={() => dispatch(resetUserState())}>{error}</Message>
          }
          <div className="w-full flex flex-col">
            <label htmlFor="user name" className="py-1">
              Email
            </label>
            <input
              type="email"
              className=" focus:outline-violet-600 py-1 px-2 border"
              name="email"
              value={userForm.email}
              onChange={handleFormChange}
              required
            />
            <label htmlFor="password" className="py-1">
              Password
            </label>
            <input
              type="password"
              className=" focus:outline-violet-600 py-1 px-2 border"
              required
              name="password"
              value={userForm.password}
              onChange={handleFormChange}
            />
            <button className="bg-orange-600 text-white py-2 rounded my-2">
              Sign In
            </button>
            <section className="flex gap-1 text-violet-600">
              <p>Don`t have an account?</p>
              <NavLink to="/register" className="underline ">
                <p>Sign up</p>
              </NavLink>
            </section>
          </div>
        </form>
      </section>
    </div>
  );
};
export default Login;
