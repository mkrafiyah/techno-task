import { Link } from 'react-router-dom';
import logo from '../../../../public/images/logo.png';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <footer className="footer p-10 bg-blue-300 mt-10 text-black">
        <aside>
        <img className='w-10' src={logo} alt="logo" />
          <p className="text-xl font-bold">TechnoTask<br/> <span className="text-base font-normal">Providing Service since 2002</span></p>
        </aside> 
        <nav>
          <header className="footer-title">Social</header> 
          <div>
          <div className="grid grid-flow-col gap-4">
            <Link to='https://www.facebook.com/'>
            <FaFacebookF className='w-[30px] h-[30px]'></FaFacebookF>
            </Link>
            
            <Link to='https://www.youtube.com/'>
            <FaYoutube className='w-[30px] h-[30px]'/>
            </Link>
            <Link to='https://twitter.com'>
            <FaTwitter className='w-[30px] h-[30px]'/>
            </Link>
            
          
          </div>
         
          </div>
       
        </nav>

      </footer>
       <p className='text-center bg-blue-300'>Copyright © 2023 - All right reserved</p>
       </>
 
    );
};

export default Footer;