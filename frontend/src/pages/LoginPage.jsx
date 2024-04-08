import { NavLink } from "react-router-dom";
const Login = () => {
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
        <form className="bg-white w-2/6 flex flex-col items-center mt-5 px-8 py-4  border rounded ">
          <h3 className="text-violet-600 font-semibold text-2xl">Sign In</h3>
          <div className="w-full flex flex-col">
            <label htmlFor="user name" className="py-1">
              User Name
            </label>
            <input
              type="text"
              className=" focus:outline-violet-600 py-1 px-2 border"
            />
            <label htmlFor="password" className="py-1">
              Password
            </label>
            <input
              type="password"
              className=" focus:outline-violet-600 py-1 px-2 border"
            />
            <button className="bg-violet-600 text-white py-2 rounded my-2">
              Sign In
            </button>
            <section className="flex  gap-1 text-violet-600">
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
