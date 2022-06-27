import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoCounter = () => {
  const { complete, total } = useContext(TodoContext);
  return (
    <h1>
      Has completado {complete} de {total} tareas
    </h1>
  );
};
