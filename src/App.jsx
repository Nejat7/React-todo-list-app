import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app">
      <main className="main">
        <TodoHeader />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
