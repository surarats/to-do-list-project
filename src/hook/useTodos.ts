import { useEffect, useState } from "react";
import { dummyTodos } from "../data/todos";
import { Todo } from "../types/todo";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const saveTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    return saveTodos.length > 0 ? saveTodos : dummyTodos;
  });
  const [filterType, setFilterType] = useState("all");
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const setCompleted = (id: number, completed: boolean) => {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const addTodo = (title: string, description: string) => {
    setTodos((prevTodos: Todo[]) => [
      { id: Date.now(), title, description, completed: false },
      ...prevTodos,
    ]);
  };

  const deleteTodo = (id: number) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const handleDeleteItem = () => {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.filter((todo) => todo.id !== deleteId)
    );
    setShowConfirm(false);
  };

  const handleClose = () => {
    setShowConfirm(false);
  };

  const filterTodo = (filterType: string) => {
    setFilterType(filterType);
  };

  return {
    todos,
    filterType,
    showConfirm,
    setCompleted,
    addTodo,
    deleteTodo,
    handleDeleteItem,
    handleClose,
    filterTodo,
  };
}
