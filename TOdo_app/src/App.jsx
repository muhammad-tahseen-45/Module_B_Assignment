import { useState } from 'react'
import Todo_app from './componentsa/todo_app'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todo_app/>
     
    </>
  )
}

export default App
