import { Link } from 'react-router-dom';
import bannerImg from '../../../../public/images/task banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-blue-100">
        <div className="hero-content flex-col lg:flex-row">
          <img src= {bannerImg}className="max-w-2xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Manage Your Tasks!!!</h1>
            <p className="py-6">Manage simple to complex projects with us with less efforts.</p>
            <Link to='/login'><button className="btn bg-blue-700 text-white">Let’s Explore</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;