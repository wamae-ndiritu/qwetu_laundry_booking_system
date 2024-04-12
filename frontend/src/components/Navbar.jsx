import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Navbar = () => {
  return (
    <div className='bg-slate-100  px-4 py-4 flex justify-between items-center'>
      <h4 className='text-xl font-semibold'>Students Residence</h4>
      <div className='flex items-center gap-3'>
        <span className='bg-slate-50 w-8 h-8 rounded-full flex justify-center items-center text-gray-600 relative'>
          <NotificationsIcon style={{ fontSize: "18px" }} />
          <span className='bg-red-500 w-4 h-4 rounded-full text-white text-sm flex justify-center items-center badge'>
            0
          </span>
        </span>
        <span className='text-sm text-gray-600 text-right'>
          <h6 className='uppercase'>Wamae Ndiritu</h6>
        </span>
        <Link to='/profile'>
          <img
            src='/profile.jpeg'
            alt='profile'
            className='h-10 w-10 rounded-full object-cover'
          />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
