// Файл для компонента
// добавление задачи

import { useState } from "react";

function ToDoForm({ addTask }) {
  // Определяем состояние
  // userInput = имя (ввод пользователя)
  // setUserInput = функция изменения (ввода пользователя)
  // "" = начальное состояние (ввода пользователя)
  const [userInput, setUserInput] = useState("");
  // Функция-обработчик работы формы
  const handlerSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  // Функция-обработчик нажатия
  const handlerChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  // Функция-обработчик изменения
  const handlerKeyPress = (e) => {
    if (e.key === "Enter") {
      handlerSubmit(e);
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handlerChange}
        onKeyDown={handlerKeyPress}
        placeholder="Введите задачу"
      />
      <button>Сохранить</button>
    </form>
  );
}

export default ToDoForm;
