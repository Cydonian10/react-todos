import React from "react";

type props = { setOpen: React.Dispatch<React.SetStateAction<boolean>>; open: boolean };
export const CreateTodoButton = ({ setOpen, open }: props) => {
  function openModal() {
    setOpen(!open);
  }
  return (
    <button className='bg-green-400 fixed bottom-4 right-4 z-50' onClick={openModal}>
      +
    </button>
  );
};
