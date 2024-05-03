import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  setCompleted: (id: number, complete: boolean) => void;
  deleteTodo: (id: number) => void;
}

export default function TodoItem({
  todo,
  setCompleted,
  deleteTodo,
}: TodoItemProps) {
  return (
    <div className="flex items-center gap-2">
      <label
        className={`flex items-start justify-between gap-2 border rounded-md my-2 p-2 grow hover:cursor-pointer ${
          todo.completed ? "line-through bg-green-300" : "bg-slate-200"
        }`}
      >
        <div className="w-full">
          <h2 className="font-bold text-lg">{todo.title}</h2>
          <p className="">{todo.description}</p>
        </div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => setCompleted(todo.id, e.target.checked)}
        />
      </label>
      <button
        className="hover:cursor-pointer"
        onClick={() => deleteTodo(todo.id)}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}
