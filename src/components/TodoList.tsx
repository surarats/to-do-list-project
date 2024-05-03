import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  setCompleted: (id: number, complete: boolean) => void;
  deleteTodo: (id: number) => void;
  filterType: string;
}

export default function TodoList({
  todos,
  setCompleted,
  deleteTodo,
  filterType,
}: TodoListProps) {
  let filterIsComplete: Todo[];
  if (filterType === "complete") {
    filterIsComplete = todos.filter((todo) => todo.completed === true);
  } else if (filterType === "incomplete") {
    filterIsComplete = todos.filter((todo) => todo.completed === false);
  } else {
    // All Items
    return todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        setCompleted={setCompleted}
        deleteTodo={deleteTodo}
      />
    ));
  }

  return filterIsComplete.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      setCompleted={setCompleted}
      deleteTodo={deleteTodo}
    />
  ));
}
