import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
              <div className="flex flex-col lg:flex-row">
                            <div className="w-64 min-h-screen bg-blue-400">
                                <ul className="menu">

                                    <li>
                                        <NavLink to='/dashboard/profile'>
                                            
                                            User Profile</NavLink></li>
                                    <li>
                                        <NavLink to='/dashboard/tasks'>
                                          
                                            Add A Task</NavLink></li>
                                    <li>
                                        <NavLink to='/dashboard/list'>
                                          
                                            List Tasks</NavLink></li>
                                    <li>
                                        <NavLink to='/'>
                                            Home</NavLink></li>

                                    <div className="divider"></div>
                                    
                                </ul>


                            </div>
                            {/* dashboard content */}
                            <div className="flex-1 p-8">
                                <Outlet></Outlet>
                            </div>
                        </div>
        </div>
    );
};

export default Dashboard;