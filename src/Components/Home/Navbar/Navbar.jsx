import { NavLink } from "react-router-dom";
import logo from '../../../../public/images/logo.png';


const Navbar = () => {
    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/d'>Home</NavLink></li>
    <li><NavLink to='/d'>Home</NavLink></li>
    <li><NavLink to='/d'>Dashboard</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    </>
    return (
        <div className="navbar bg-blue-300 mb-10">
            <div className="navbar-start pl-4">
                <img className="w-8" src={logo} alt="logo" />
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">TechnoTask</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;