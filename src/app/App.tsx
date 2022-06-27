// return React.createElement('h1', { id: "title" }, 'estamos bien'
// React.child.map.toArray(children).map(child => react.clonse(child,{loading:true}))
import { useContext, useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { ChangeNoti } from "./components/ChangeNoti";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { EmptyTodos } from "./components/EmptyTodos";
import { Loading } from "./components/Loading";
import { Modal } from "./components/Modal";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoContext } from "./context/TodoContext";
import { AnimatePresence } from 'framer-motion'

export function App() {
  const {
    completetodo,
    eliminarTodo,
    loading,
    addTodo,
    serchTodos,
    todos,
    onSincronize,
  } = useContext(TodoContext);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-700 h-screen text-white md:grid md:grid-cols-2 md:justify-items-center md:items-center">

        <AddTodo addTodo={ addTodo } visible={ true } open={ open } />

        <section className="task-container col-span-1">
          <CreateTodoButton setOpen={ setOpen } open={ open } />
          <TodoCounter />
          <TodoSearch />
          <TodoList
            todos={ todos }
            onEmtyTodos={ () => <EmptyTodos /> }
            loading={ loading }
            onLoading={ () => <Loading /> }>
            { serchTodos.map((todo) => (
              <TodoItem
                key={ todo.id }
                todo={ todo }
                completeTodo={ completetodo }
                eliminarTodo={ eliminarTodo }
              />
            )) }
          </TodoList>
        </section>

      </div>

      <AnimatePresence exitBeforeEnter>
        {
          open && <Modal open={ open }>
            <AddTodo addTodo={ addTodo } open={ open } />
          </Modal>
        }
      </AnimatePresence>


      {/* <ChangeAlertWithStorageListner onSincronize={onSincronize} /> */ }
      <ChangeNoti sincronize={ onSincronize } />
    </>

  );
}
