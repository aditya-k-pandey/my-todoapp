import Heading from './components/Heading'
import AddField from './components/AddField'
import ToDoList from './components/ToDoList'
import { useState } from 'react'
import { TodoContextProvider } from './store/todo-store-context'
import './App.css'

function App() {
  

  return (
    <TodoContextProvider>

      <Heading />
      <AddField />
      <ToDoList/>

    </TodoContextProvider>
  )
}

export default App