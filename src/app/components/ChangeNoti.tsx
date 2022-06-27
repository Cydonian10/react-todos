import { useStorageListener } from "../hooks/useStorageListener";

type props = { sincronize: () => void };
export const ChangeNoti = ({ sincronize }: props) => {
  const { show, toogleShow } = useStorageListener(sincronize);

  return (
    <div>
      {show && (
        <p>
          Hubo cambios <button onClick={toogleShow}>x</button>{" "}
        </p>
      )}
    </div>
  );
};
