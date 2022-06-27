import React, { useEffect, useState } from "react";

type props = { show: boolean; toogleShow: React.Dispatch<React.SetStateAction<boolean>> };
export const withStorageAlert = (Element: ({ show, toogleShow }: props) => JSX.Element) => {
  return function WrapperComponentWithStorageLister(props: any) {
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
      props.onSincronize();
    }

    return <Element show={storageChange} toogleShow={toogleShow} />;
  };
};
