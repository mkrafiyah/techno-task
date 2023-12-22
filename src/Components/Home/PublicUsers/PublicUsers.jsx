import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'

const PublicUsers = () => {
    useEffect(()=>{
        Aos.init()
    }, [])
    return (
       <div>
        <h2 className="text-4xl text-center font-bold mb-10 mt-10 mx-7">Happy <span className="text-sky-600">Users</span></h2>
        <div className="flex justify-evenly">
        <div data-aos='fade-up' className="flex-1 pl-10">
            
            <ul className="steps steps-vertical">
                <li className="step step-primary text-xl font-bold">Developers</li>
                <li className="step step-primary  text-xl font-bold">Bankers</li>
                <li className="step  text-xl font-bold">Students</li>
                <li className="step  text-xl font-bold">Businessmen</li>
            </ul>


        </div>
        <div data-aos='fade-down' className="flex-1 pr-10 my-auto">
        <p data-aos='fade-down' className="text-xl font-medium text-sky-900">People from various background can use this. It will help them to manage the tasks easily by giving less efforts.By using this app there daily life will be easy.</p>
        </div>
       </div>
        </div>
    );
};

export default PublicUsers;