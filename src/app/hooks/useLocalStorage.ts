import React, { useEffect, useState } from "react";
import { ITodo } from "../models/todo.model";

export const useLocalStorage = () => {
  const [syconcroniz, setSyconcronize] = useState(true);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const datosLocalStorage = JSON.parse(localStorage.getItem("todos")!) || [];
    setTimeout(() => {
      setTodos(datosLocalStorage);
      setLoading(false);
      setSyconcronize(true);
    }, 3000);
  }, [syconcroniz]);

  useEffect(() => {
    const todosSave = JSON.stringify(todos);
    localStorage.setItem("todos", todosSave);
  }, [todos.length]);

  const onSincronize = () => {
    setLoading(true);
    setSyconcronize(false);
  };

  return {
    todos,
    setTodos,
    loading,
    onSincronize,
  };
};
