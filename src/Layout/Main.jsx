import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Navbar/Navbar";
import Footer from "../Components/Home/Footer/Footer";


const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;