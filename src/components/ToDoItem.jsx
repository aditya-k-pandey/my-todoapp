import { useContext, useState } from "react";
import { TodoContext } from "../store/todo-store-context";

const ToDoItem = ({ todoName, todoDate, id }) => {
    const { deleteItem, editItem } = useContext(TodoContext)

    const [isEditing, setIsEditing] = useState(false);

    const [newName, setNewName] = useState(todoName);
    const [newDate, setNewDate] = useState(todoDate);

    const handleDelete = () => {
        deleteItem(id)
    }

    const handleSave = () => {
        editItem(id, newName, newDate);
        setIsEditing(false);
    }

    return (
        <div className="grid grid-cols-12 bg-[#cdd4da] w-[50%] ml-[21.5%] border-2 border-gray-500">
            <div className="col-span-4 p-6 font-semibold">
                {isEditing ? (
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                ) : (
                    todoName
                )}
            </div>

            <div className="col-span-4 p-6 font-semibold">
                {isEditing ? (
                    <input
                        type="text"
                        value={newDate}
                        onChange={(e) => setNewDate(e.target.value)}
                    />
                ) : (
                    todoDate
                )}
            </div>

            <div className="col-span-2 p-4">
                <button className="bg-[#f8f9fa] hover:bg-gray-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded" onClick={handleDelete}>
                    Delete
                </button>
            </div>

            <div className="col-span-2 p-4">
                {isEditing ? (
                    <button className="bg-[#f8f9fa] hover:bg-gray-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded" onClick={handleSave}>
                        Save
                    </button>
                ) : (
                    <button className="bg-[#f8f9fa] hover:bg-gray-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded" onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                )}
            </div>
        </div>
    )
}

export default ToDoItem;