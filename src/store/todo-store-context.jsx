import { createContext, useState } from "react";

export const TodoContext = createContext({
    todoItems: [],
    addItem: () => { },
    deleteItem: () => { },
    editItem: () => { }
})

export const TodoContextProvider = ({ children }) => {

    const [todoItems, setTodoItems] = useState([])

    const addItem = (todoName, todoDate) => {
        const newTodoItems = [...todoItems, { id: Date.now(), name: todoName, dueDate: todoDate }]
        setTodoItems(newTodoItems);
    }

    const deleteItem = (todoId) => {
        const afterDelete = todoItems.filter(item => item.id !== todoId)
        setTodoItems(afterDelete);
    }

    const editItem = (todoId, newName, newDate) => {

    const updatedTodos = todoItems.map((item) => {

        if (item.id === todoId) {
            return {
                ...item,
                name: newName,
                dueDate: newDate
            };
        }

        return item;
    });

    setTodoItems(updatedTodos);
}

    return (
        <TodoContext.Provider value={
            {
                todoItems,
                addItem,
                deleteItem,
                editItem
            }
        }>
            {children}
        </TodoContext.Provider>
    )
}