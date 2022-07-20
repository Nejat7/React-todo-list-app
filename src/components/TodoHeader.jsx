import TodoInput from "./TodoInput";

const TodoHeader = () => {
  return (
    <div className="todo-header">
      <div className="todo-header__content">
        <h1 className="todo-header__title">todo</h1>
        <TodoInput />
      </div>
    </div>
  );
};

export default TodoHeader;
