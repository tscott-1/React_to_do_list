import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoItem from './components/TodoItem';


function App() {
  return (
    <div>
        <h1>My todo list</h1>
        <TodoItem text="Finish plus project." />
        <TodoItem text="Feed cat." />
        <TodoItem text="Be awesome." />
    </div>
  );
}
   
export default App;
