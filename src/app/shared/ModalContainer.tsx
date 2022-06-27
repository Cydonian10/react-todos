import { motion } from 'framer-motion'


const variants = {
  open: {
    y: "0",
  },
  closed: {
    y: "-200%",
    opacity: "0",
    rotate: [0, 0, 270, 240, 0],
  }
}

type props = {
  children: JSX.Element | JSX.Element[],
  open: boolean
}
export const ModalContainer = ({ children, open }: props) => {
  return (
    <motion.p
      className='w-96 h-96 bg-white p-4 rounded-lg'
      transition={ { duration: 1 } }
      animate={ open ? "open" : "closed" } variants={ variants }
    >
      { children }
    </motion.p>
  )
}
