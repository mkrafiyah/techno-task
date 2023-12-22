import { useEffect, useState } from "react";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
import Swal from "sweetalert2";


const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [fresh, setFresh] = useState([]);
    const axiosPublic = UseAxiosPublic();

    useEffect(()=>{
        axiosPublic.get('/tasksStatus?status=todo')
        .then(res=>{
          console.log(res.data)
          setTodo(res.data)
        })
    }, [])

    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/tasks/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                          
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    
                    })
                    
            }
        });
    }
    

console.log(todo)

    return (
        <div className="">
            <h2 className="text-3xl text-start mb-4 font-bold text-cyan-900">ToDo Lists</h2>
            {
                todo.map(single=> 
                    <div key={single._id} className="card bg-blue-100 mb-6 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">Title: {single.title}</h2>
                      <p>{single.description}</p>
                      <p>Deadline: {single.deadlines}</p>
                      <p>Status: {single.status}</p>
                      <p>Priority: {single.priority}</p>
                      <div className="card-actions justify-end">
                        <button onClick={()=> handleDelete(single._id)} className="btn btn-primary">Delete</button>
                      </div>
                    </div>
                  </div>
              )
            }
        </div>
    );
};

export default Todo;