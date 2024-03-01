import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let todoList = [
  { id: 1, title: "Wake Up Early" },
  { id: 2, title: "Make breakfast" },
  { id: 3, title: "Drive kids to school" },
  { id: 4, title: "Take a look at the plan for the day" },
  { id: 5, title: "Complete top priority tasks" },
  { id: 6, title: "Cook dinner" },
  { id: 7, title: "Spend time with family" },
  { id: 8, title: "Learn React" },
  { id: 9, title: "Read 'The Road to React'" },
  { id: 10, title: "Complete assignment 1" },
];


function App() {
  const [count, setCount] = useState(0)

return (
<div>
  <h1>Todo List</h1>

  <ul>
   {todoList.map((item) => (
   <li key={item.id}>{item.title}</li>
   ))}
  </ul>
</div>
);
}

export default App
