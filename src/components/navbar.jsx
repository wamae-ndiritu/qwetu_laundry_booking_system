import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-violet-500 py-4m-1  flex justify-between items-center ">
      <h1 className="text-white text-3xl font-bold m-3">Qwetu</h1>
      <ul className="flex m-3 ">
        <li>
          <button className="p-1 m-1  text-white font-semibold ">
            Services
          </button>
        </li>
        <li>
          <NavLink to="/login">
            <button className="p-1 m-1 rounded text-violet-600 bg-white ">
              Sign In
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/register">
            <button className="p-1 m-1  text-white rounded bg-black">
              Sign Up
            </button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
