import React, { useMemo } from "react";
import { ITodo } from "../models/todo.model";

type props = {
  todo: ITodo;
  eliminarTodo: (id: number) => void;
  completeTodo: (id: number) => void;
};
export const TodoItem = ({ todo, eliminarTodo, completeTodo }: props) => {
  const todoDoneStyle = useMemo(() => (todo.done ? "underline" : ""), [todo.done]);

  return (
    <article>
      <div onClick={() => completeTodo(todo.id)}>c</div>
      <div className={`${todoDoneStyle}`}>
        {todo.id}- {todo.text} {JSON.stringify(todo.done)}
      </div>
      <button onClick={() => eliminarTodo(todo.id)}>x</button>
    </article>
  );
};
