import React, { useEffect, useState } from "react";

export const useStorageListener = (onSincronize: () => void) => {
  const [storageChange, setStorageChange] = useState(false);

  useEffect(() => {
    changeLocalStorage();
  }, [storageChange]);

  function changeLocalStorage() {
    window.addEventListener("storage", (change: any) => {
      if (change.key === "todos") {
        console.log("hubos cambios entodos");
        setStorageChange(true);
      }
    });
  }

  function toogleShow() {
    setStorageChange(false);
    onSincronize();
  }

  return {
    show: storageChange,
    toogleShow: toogleShow,
  };
};
