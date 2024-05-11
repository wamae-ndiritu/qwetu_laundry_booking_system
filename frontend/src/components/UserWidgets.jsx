import HomeIcon from "@mui/icons-material/Home";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import { useSelector } from "react-redux";

const UserWidgets = () => {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <div className='grid grid-cols-2 gap-5 text-white'>
      <div className='bg-violet-500 rounded px-4 py-2 flex flex-col justify-between'>
        <span className='my-0 flex items-end justify-between gap-2'>
          <h4 className='text-xl'>My Account</h4>
          <HomeIcon style={{ fontSize: "30px" }} />
        </span>
        <span className='my-1 flex items-center justify-between'>
          <h6 className='uppercase font-normal'>{userInfo?.user?.full_name}</h6>
          {!userInfo?.user?.is_superuser && (
            <h6 className='w-max bg-orange-600 rounded px-2 py-1 text-white'>
              Student
            </h6>
          )}
        </span>
      </div>
      <div className='bg-orange-600 rounded p-4'>
        <div className='flex justify-around'>
          <span className='flex flex-col items-center'>
            <span className='bg-slate-200 rounded-full flex items-center justify-center p-1 text-orange-600'>
              <DryCleaningIcon style={{ fontSize: "46px" }} />
            </span>
            <h6 className='px-2 text-center'>5 Laundry services</h6>
          </span>
          <span className='flex flex-col items-center'>
            <span className='bg-slate-200 rounded-full flex items-center justify-center p-1 text-orange-600'>
              <BookmarkAddedIcon style={{ fontSize: "46px" }} />
            </span>
            <h6 className='text-center'>10 Total Bookings</h6>
          </span>
          <span className='flex flex-col items-center'>
            <span className='bg-slate-200 rounded-full flex items-center justify-center p-1 text-orange-600'>
              <AvTimerIcon style={{ fontSize: "46px" }} />
            </span>
            <h6 className='text-center'>3 Time Slots</h6>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserWidgets;
