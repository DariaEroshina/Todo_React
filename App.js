import "./styles.css";

import { useState } from "react";
import Todo from "./todo";
import TodoForm from "./todoform";
import ToDoForm from "./todoform";

export default function App() {
  // Определяем состояние
  // todos = имя масива задач
  // setTodos = функция изменения задач
  // [] = пустой массив (задачи)
  const [todos, setTodos] = useState([]);

  // ...

  // Функция добавления задачи
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      };
      setTodos([...todos, newItem]);
    }
  };

  // Функция удаления задачи
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id != id)]);
  }

  // Функция переключения задачи
  const handleToggle = () => {};

  return (
    <div className="App">
      <h1>Todo React</h1>

      <header>
        <h2> Список задач: {todos.length}</h2>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            toggleTask={removeTask}
            removeTask={removeTask}
            key={todo.id}
          />
        );
      })}
    </div>
  );
}
