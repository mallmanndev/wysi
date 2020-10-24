import { useContext } from "react";
import Context from "./components/Wysi/Context";

const useController = (
  name: string
): [
  string,
  (
    newValue: string | number | Boolean | Array<any> | { [key: string]: any }
  ) => void
] => {
  const { controllers, setControllerValue } = useContext(Context);

  if (!name) throw new Error('you need to pass the "name" props.');

  const controller = controllers.find(
    (item: { name: string }) => item.name === name
  );
  if (!controller) throw new Error("Invalid controller name.");

  return [
    controller.value,
    (newValue) => {
      setControllerValue(name, newValue);
    },
  ];
};

export default useController;
