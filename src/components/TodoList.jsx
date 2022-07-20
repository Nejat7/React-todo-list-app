import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })
      ) : (
        <h1>No todos here :(</h1>
      )}
    </div>
  );
};

export default TodoList;
