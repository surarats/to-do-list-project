import { Todo } from "../types/todo";

interface TodoSummary {
  todos: Todo[];
}

export default function TodoSummary({ todos }: TodoSummary) {
  const todoCompleted: Todo[] = todos.filter((todo) => todo.completed);
  return (
    <div className="text-center font-bold">
      <span className="text-green-500">Completed:</span> {todoCompleted.length}/
      {todos.length}
    </div>
  );
}
