import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoSearch = () => {
  const { text, handleChange } = useContext(TodoContext);

  return (
    <>
      <input
        value={text}
        name='text'
        onChange={handleChange}
        type='text'
        placeholder='Write todo'
      />
    </>
  );
};
