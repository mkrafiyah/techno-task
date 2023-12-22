import { useState } from "react";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
import Swal from "sweetalert2";




const CreateTasks = ({givenTasks, setGivenTasks}) => {
    const axiosPublic = UseAxiosPublic();

    // const [tasks, setTasks] = useState({
    //     title: "",
    //     description: "",
    //     deadlines: "",
    //     priority: "",
    //     status: "todo"
    // })
    // console.log(tasks)

    const handleSubmit = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const title = form.get("title");
        const description = form.get("description");
        const deadlines = form.get("deadlines");
        const priority = form.get("priority");
        const status = form.get("status");
        const newTasks = {title, description, deadlines, priority, status}
        // setGivenTasks((previous)=>{
        //     const list = [...previous, tasks]
         
            
        //     return list;
        // })
       
        axiosPublic.post('/tasks', newTasks)
        .then(res=>{
         console.log(res.data)
         Swal.fire({
            icon: 'Success!',
            title: 'Success!',
            text: 'Tasks Added successfully',
            icon: 'success',
            confirmButtonText: 'Done'
        })
        })
    }
    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mx-auto w-2/5 border bg-blue-300 p-10 mb-10">
                <label className="label">
                    <span className="label-text">Title</span>
                </label>
                <input type="text" name="title" placeholder="Property title" className="input input-bordered" />
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <input type="text" name="description" placeholder="Description" className="input input-bordered"  />
                <label className="label">
                    <span className="label-text">Deadline</span>
                </label>
                <input type="text" name="deadlines" placeholder="Deadline" className="input input-bordered"  />
                <label className="label">
                    <span className="label-text">Priority</span>
                </label>
                <input type="text" name="priority" placeholder="Priority" className="input input-bordered"  />
                <label className="label">
                    <span className="label-text">Status</span>
                </label>
                <input type="text" name="status" placeholder="Status" className="input input-bordered"  />
                <button className="btn text-white bg-blue-700 mb-10">Add A Tasks</button>
            </form>
    );
};

export default CreateTasks;