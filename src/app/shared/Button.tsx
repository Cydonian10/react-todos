
type props = {
  onFunction: (value?: string) => void;
  border: "border-indigo-500" | "border-red-500";
  text: "text-indigo-500" | "text-red-500";
  bg: "bg-indigo-500" | "bg-red-500";
  children: string
};
export const Button = ({ onFunction, border, text, bg, children }: props) => {
  return (
    <button
      className={ `${ border }  ${ text } 
      border px-4 py-2 mt-4 rounded-md
      active:scale-95
      `}

      onClick={ () => onFunction() }>
      { children }
    </button>
  );
};
