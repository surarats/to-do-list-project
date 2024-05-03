import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface AddTodoFormProps {
  addTodo: (title: string, description: string) => void;
}

export default function AddTodoForm({ addTodo }: AddTodoFormProps) {
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    addTodo(newTask, newDescription);
    setNewTask("");
    setNewDescription("");
  };

  return (
    <form
      className="flex items-start gap-2 py-4 flex-auto w-full"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-end gap-2  w-full">
        <TextField
          id="outlined-basic"
          label="New task"
          variant="outlined"
          size="medium"
          className="w-full"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          className="w-full"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          size="medium"
          className="w-32"
        >
          Add
        </Button>
      </div>
    </form>
  );
}
