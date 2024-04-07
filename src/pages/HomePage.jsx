import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen relative homepage">
        <div className="  absolute top-0 bottom-0 left-0 right-0 overlay"></div>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
