import useTodos from "./hook/useTodos";

import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import TodoSummary from "./components/TodoSummary";
import TodoFilter from "./components/TodoFilter";
import DeleteTodo from "./components/DeleteTodo";

function App() {
  const {
    todos,
    filterType,
    showConfirm,
    setCompleted,
    addTodo,
    deleteTodo,
    handleDeleteItem,
    handleClose,
    filterTodo,
  } = useTodos();
  return (
    <main className="max-w-xl mx-auto h-screen p-4">
      <h1 className="text-3xl text-center font-bold py-4">MY TO DO LIST</h1>
      <TodoFilter filterTodo={filterTodo} />
      <div className="flex flex-col items-center gap-2">
        <AddTodoForm addTodo={addTodo} />
      </div>
      <TodoList
        todos={todos}
        setCompleted={setCompleted}
        deleteTodo={deleteTodo}
        filterType={filterType}
      />
      <TodoSummary todos={todos} />

      <DeleteTodo
        handleDeleteItem={handleDeleteItem}
        handleClose={handleClose}
        showConfirm={showConfirm}
      />
    </main>
  );
}

export default App;
