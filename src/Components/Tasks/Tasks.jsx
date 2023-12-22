import { useState } from "react";
import CreateTasks from "../CreateTasks/CreateTasks";



const Tasks = () => {
    const [givenTasks, setGivenTasks] = useState([]);

    console.log("tasks", givenTasks)
    return (
        <div className="bg-blue-200  w-full h-full flex flex-col items-center pt-10 gap-10">
            <CreateTasks givenTasks={givenTasks} setGivenTasks={setGivenTasks}></CreateTasks>
        </div>
    );
};

export default Tasks;