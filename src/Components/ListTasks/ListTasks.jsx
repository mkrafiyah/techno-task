import Complete from "../Complete/Complete";
import Ongoing from "../Ongoing/Ongoing";
import Todo from "../Todo/Todo";


const ListTasks = ({givenTasks, setGivenTasks}) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
           <Todo></Todo>
           <Ongoing></Ongoing>
           <Complete></Complete>
        </div>
    );
};

export default ListTasks;