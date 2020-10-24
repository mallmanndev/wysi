import React, { useState } from "react";
import Context from "./Context";

interface Props {}

const Wysi: React.FC<Props> = ({ children }) => {
  const [controllersValues, setControllersValues] = useState<{
    [key: string]:
      | string
      | number
      | Boolean
      | Array<any>
      | { [key: string]: any };
  }>({ bold: false });

  const setControllerValue = (
    controller: string,
    newValue: string | number | Boolean | Array<any> | { [key: string]: any }
  ) => {
    setControllersValues((state) => ({ ...state, [controller]: newValue }));
  };

  return (
    <Context.Provider
      value={{
        controllers: Object.keys(controllersValues).map((key) => ({
          name: key,
          value: controllersValues[key],
        })),
        setControllerValue,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Wysi;
