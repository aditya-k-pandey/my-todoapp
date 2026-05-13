import { useContext, useRef } from "react";
import styles from "./AddField.module.css"
import { TodoContext } from "../store/todo-store-context";

const AddField = () => {
    const { addItem } = useContext(TodoContext)

    const todoName = useRef("")
    const todoDate = useRef("")

    const handleClick = () => {
        const todoNameValue = todoName.current.value;
        const todoDateValue = todoDate.current.value;

        const formattedDate = new Date(todoDateValue).toLocaleDateString('en-GB')
        addItem(todoNameValue, formattedDate);
        todoName.current.value = "";
        todoDate.current.value = "";
    }

    return (
        <div className="flex justify-center items-center mt-10">
            <input
                style={{padding: "10px", width: "35%", height: "50px", boxSizing: "border-box", border: "2px solid black", marginRight: "2px"}}
                type="text"
                placeholder='add item...'
                ref={todoName}
            />

            <input 
            type="date"
            style={{width: "15%", border: "2px solid black", height: "50px", boxSizing: "border-box", padding: "8px"}}
            ref={todoDate}
            />

            <button className={`${styles.btn} h-[50px] bg-black hover:bg-gray-800 text-white font-bold px-4 rounded`} onClick={handleClick}>ADD</button>
        </div>
    )
}


export default AddField;