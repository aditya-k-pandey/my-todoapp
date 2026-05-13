import ToDoItem from "./ToDoItem"
import { TodoContext } from "../store/todo-store-context";
import { useContext } from "react";

const ToDoList = () => {
    const {todoItems} = useContext(TodoContext)
    return (
        <>
            {todoItems.map(item => <ToDoItem 
            todoName={item.name}
            todoDate={item.dueDate}
            key={item.id}
            id={item.id}
            />)}
        </>
    )

}

export default ToDoList;