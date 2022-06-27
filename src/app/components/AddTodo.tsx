import { useForm } from "../hooks/useForm";
import imageTodo from "../../assets/imageTodo.png";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Input } from "../shared/Input";
import { Button } from "../shared/Button";

type props = {
  addTodo: (value: string) => void;
  visible?: boolean;
  open: boolean;
};
export const AddTodo = ({ addTodo, visible = false, open }: props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [open]);

  const {
    form: { text },
    handleChange,
    resetForm,
  } = useForm({
    text: "",
  });

  return (
    <motion.section
      className={ `${ visible ? "hidden md:block cols-1 md:p-8" : "block" }
                  w-96 bg-white p-4 rounded-lg shadow-sm shadow-slate-500/50 justify-items-center`}
      initial={ { opacity: 0, y: "-200%" } }
      animate={ { opacity: 1, y: "0%" } }
      exit={ { opacity: 0, y: "-200%" } }
      transition={ { duration: 1 } }>
      <h3 className='text-center text-2xl text-gray-600 mb-3'>Crear una tarea</h3>
      <div className='input-text'>
        <Input
          onChange={ handleChange }
          value={ text }
          name='text'
          type='text'
          placeholder='Ingrese tarea a realizar'
          ref={ inputRef }
          label='Write Todo'
        />
      </div>

      <div className='flex justify-end space-x-2 w-full'>
        <Button onFunction={ resetForm } border='border-red-500' text='text-red-500' bg="bg-red-500">
          Cancel
        </Button>
        <Button onFunction={ () => addTodo(text) } border='border-indigo-500' text='text-indigo-500' bg="bg-indigo-500" >
          Enviar
        </Button>
      </div>

      <img className='m-auto' src={ imageTodo } alt='' />
    </motion.section>
  );
};
