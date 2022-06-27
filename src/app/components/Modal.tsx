import { useMemo } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion"
import "./modal.css";
import { variantsModal, variantsModalContiainer } from "../animations/modal";

type props = {
  children: JSX.Element[] | JSX.Element; open: boolean
};
export const Modal = ({ children, open }: props) => {
  const openModal = useMemo(() => (open ? "show" : ""), [open]);

  return ReactDOM.createPortal(

    <motion.div
      className="modal"
      initial={ { opacity: 0 } }
      animate={ { opacity: 1 } }
      exit={ { opacity: 0 } }
      transition={ { duration: 0.5 } }
    >
      { children }
    </motion.div>,


    document.getElementById("modal")!
  );
};
