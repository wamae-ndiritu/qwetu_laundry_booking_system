import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const {userInfo} = useSelector((state) => state.user);
  return (
    <div className='bg-slate-100  px-4 py-4 flex justify-between items-center'>
      <h4 className='text-xl font-semibold'>Students Residence</h4>
      <div className='flex items-center gap-3'>

        <span className='flex flex-col items-center text-sm text-gray-600 text-right'>
          <h6 className='uppercase'>{userInfo?.user?.full_name || userInfo?.user?.username}</h6>
          {
            userInfo?.user?.is_superuser && <span className="bg-orange-600 px-2 py-1 rounded text-white my-1">Admin</span>
          }
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
