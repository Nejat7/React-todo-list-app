import { useContext } from "react";
import IconCross from "../assets/icon-cross.svg";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo = { id: "", text: "testTodo" } }) => {
  const { deleteTodo } = useContext(TodoContext);
  return (
    <div className="todo-item">
      <p className="todo-item__text">{todo.text}</p>
      <img onClick={() => deleteTodo(todo.id)} src={IconCross} alt="delete" />
    </div>
  );
};

export default TodoItem;
