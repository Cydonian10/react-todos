import React, { ChangeEvent, createContext, useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { CreateTodoDto, ITodo } from "../models/todo.model";

const initialValue: CreateTodoDto = { text: "" };

interface TodoProviderContext {
  todos: ITodo[];
  loading: boolean;
  completetodo: (id: number) => void;
  eliminarTodo: (id: number) => void;
  total: number;
  complete: number;
  text: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  addTodo: (value: string) => void;
  serchTodos: ITodo[];
  onSincronize: () => void;
}

//! Context de todo context
export const TodoContext = createContext({} as TodoProviderContext);

//! Provider de todo context
type props = { children: JSX.Element | JSX.Element[] };
export const TodoProvider = ({ children }: props) => {
  const { todos, setTodos, loading, onSincronize } = useLocalStorage();
  const [serchTodos, setSearchTodos] = useState<ITodo[]>([]);
  const [complete, setComplete] = useState(0);
  const [total, setTotal] = useState(0);

  const {
    form: { text },
    handleChange,
  } = useForm(initialValue);

  useEffect(() => {
    if (text.length === 0) {
      setSearchTodos(todos);
    } else {
      setSearchTodos(todos.filter((item) => item.text.includes(text)));
    }
  }, [text, todos]);

  useEffect(() => {
    setComplete(todos.filter((item) => !!item.done).length);
    setTotal(todos.length);
  }, [todos]);

  function eliminarTodo(id: number) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  function completetodo(id: number) {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      })
    );
  }

  function addTodo(todo: string) {
    if (todo.trim().length === 0) {
      return
    }
    const newTodo = { id: new Date().getTime(), text: todo, done: false };
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <TodoContext.Provider
        value={ {
          complete,
          completetodo,
          eliminarTodo,
          loading,
          todos,
          total,
          text,
          handleChange,
          addTodo,
          serchTodos,
          onSincronize,
        } }>
        { children }
      </TodoContext.Provider>
    </>
  );
};
