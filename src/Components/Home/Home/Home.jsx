
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import PublicUsers from "../PublicUsers/PublicUsers";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <PublicUsers></PublicUsers>
            <Footer></Footer>
        </div>
    );
};

export default Home;