import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoInput = () => {
  const { addTodo } = useContext(TodoContext);
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText === "") return;
    addTodo(todoText);
    setTodoText("");
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Create new todo..."
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
    </form>
  );
};

export default TodoInput;
