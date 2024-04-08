import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashBoardLayout from "./components/DashBoardLayout";
import StudentsPage from "./pages/StudentsPage";
import ServicesPage from "./pages/ServicesPage";
import SchedulesPage from "./pages/SchedulesPage";
import StaffsPage from "./pages/StaffsPage";
import ProfilePage from "./pages/ProfilePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route element={<DashBoardLayout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/page/:id' element={<Dashboard />} />
          <Route path='/students' element={<StudentsPage />} />
          <Route path='/students/:id' element={<StudentsPage />} />
          <Route path='/laundry-services' element={<ServicesPage />} />
          <Route path='/schedules' element={<SchedulesPage />} />
          <Route path='/staff' element={<StaffsPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
