import React, { ChangeEvent, useEffect, useRef } from "react";

type props = {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  ref: React.MutableRefObject<HTMLInputElement | null>;
  otline?: string;
  label: string
};
export const Input = ({
  type,
  placeholder,
  value,
  name,
  onChange,
  label,
  otline = "outline-indigo-500",
}: props) => {

  const inputRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    inputRef.current?.focus();
  }, []);


  return (
    <>
      <label className='text-gray-500 mb-2 block'>{ label }</label>
      <input
        className={ ` ${ otline } py-2 px-3 rounded-md shadow-md outline focus:outline-4 w-full text-gray-500` }
        value={ value }
        onChange={ onChange }
        name={ name }
        type={ type }
        placeholder={ placeholder }
        ref={ inputRef }
      />
    </>
  );
};
