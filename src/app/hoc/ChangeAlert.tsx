import React from "react";
import { withStorageAlert } from "./withStorageAlert";

type props = { show: boolean; toogleShow: React.Dispatch<React.SetStateAction<boolean>> };
export const ChangeAlert = ({ show, toogleShow }: props) => {
  function loadCarga() {
    toogleShow(false);
  }

  return (
    <>
      {show && (
        <p>
          Hubo cambios <button onClick={loadCarga}>x</button>{" "}
        </p>
      )}
    </>
  );
};

export const ChangeAlertWithStorageListner = withStorageAlert(ChangeAlert);
