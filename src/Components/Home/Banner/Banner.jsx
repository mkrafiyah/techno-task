import { Link } from 'react-router-dom';
import bannerImg from '../../../../public/images/task banner.jpg';
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'

const Banner = () => {
  useEffect(()=>{
    Aos.init()
}, [])
    return (
        <div className="hero min-h-screen bg-blue-100">
        <div  className="hero-content flex-col lg:flex-row">
          <img data-aos='fade-up'  src= {bannerImg}className=" w-96 lg:max-w-2xl rounded-lg shadow-2xl" />
          <div  data-aos='fade-up'>
            <h1 data-aos='fade-down'  className="text-5xl font-bold text-sky-900">Manage Your Tasks!!!</h1>
            <p data-aos='fade-up' className="py-6">Manage simple to complex projects with us with less efforts.</p>
            <Link to='/login'><button className="btn bg-blue-700 text-white">Let’s Explore</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;