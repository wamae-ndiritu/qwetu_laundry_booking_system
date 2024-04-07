import { Link, NavLink } from "react-router-dom";
const RegisterPage = () => {
  return (
    <div className="h-screen relative  loginpage">
      <section className=" flex flex-col items-center absolute top-0 bottom-0 left-0 right-0 overlay">
        <div className="mt-5 ">
          <h1 className="font-bold text-3xl text-white  ">
            Welcome to Qwetu Loundry Booking System
          </h1>
          <h2 className="text-white ">
            Making loundry services boking easy and more efficient.
          </h2>
        </div>
        <form className="bg-white w-2/5 flex flex-col items-center m-auto  border rounded p-4">
          <h3 className="text-violet-600 font-semibold text-2xl">Sign Up</h3>
          <div className="flex flex-col">
            <label htmlFor="Full Name" className="p-1">
              Full Name
            </label>
            <input
              type="text"
              className=" focus:outline-violet-600 py-1 px-4 border"
            />
            <label htmlFor="user name" className="p-1">
              User Name
            </label>
            <input
              type="text"
              className=" focus:outline-violet-600 py-1 px-4 border"
            />
            <label htmlFor="email" className="p-1">
              Email
            </label>
            <input
              type="email"
              className=" focus:outline-violet-600 py-1 px-4 border"
            />
            <label htmlFor="contact" className="p-1">
              Contact
            </label>
            <input
              type="number"
              className=" focus:outline-violet-600 py-1 px-4 border"
            />
            <label htmlFor="password" className="p-1">
              Password
            </label>
            <input
              type="password"
              className=" focus:outline-violet-600 py-1 px-4 border"
            />
            <label htmlFor="password" className="p-1">
              Confirm Password
            </label>
            <input
              type="password"
              className=" focus:outline-violet-600 py-1 px-4 border"
            />
            <button className="bg-violet-600 text-white py-2 rounded m-2">
              Sign Up
            </button>
            <section className="flex  gap-1 text-violet-600">
              <p>Already have an account,</p>
              <NavLink to="/login" className="underline ">
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