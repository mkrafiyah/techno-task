import { Link } from "react-router-dom";
import errorImg from '../../../public/images/404-error.jpg';

const ErrorPage = () => {
    return (
        <div className="bg-blue-200">
        <img className="w-[700px] mx-auto py-6 rounded-xl" src={errorImg} alt="" />
        <Link to='/'><button className="btn py-4 px-6 flex items-center mx-auto mb-5 bg-blue-900 text-white">Back to Home</button></Link>
       </div>
    );
};

export default ErrorPage;