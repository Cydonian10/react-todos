import { ITodo } from "../models/todo.model";

type props = {
  children: JSX.Element[] | JSX.Element;
  onLoading: () => JSX.Element;
  loading: boolean;
  onEmtyTodos: () => JSX.Element;
  todos: ITodo[];
};
export const TodoList = ({ children, loading, onLoading, onEmtyTodos, todos }: props) => {
  return (
    <>
      {loading && onLoading()}
      {todos.length === 0 && onEmtyTodos()}
      <section>{children}</section>
    </>
  );
};
