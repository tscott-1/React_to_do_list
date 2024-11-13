import { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import './App.css';


function App() {

  const [todos, setTodos] = useState([
    {
        text: "Learn about React",
        isCompleted: false,
    },{
        text: "Meet friend for lunch",
        isCompleted: false,
    },{
        text: "Build really cool todo app",
        isCompleted: false,
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className='app'>
        <h1 className='todo-list'>My todo list</h1>
        {todos.map((todo, index) => (
          <TodoItem todo={todo} key={index} />
        ))}
        <TodoForm addTodo={addTodo} />
    </div>
  );
}
   
export default App;
