import React, { ChangeEvent, useState } from "react";

export function useForm<T>(initialSate: T) {
  const [form, setForm] = useState(initialSate);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function resetForm() {
    setForm(initialSate);
  }

  return {
    form,
    handleChange,
    resetForm,
  };
}
