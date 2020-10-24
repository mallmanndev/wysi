import React, { useEffect } from "react";
import useController from "./lib/useController";

const Header = () => {
  const [bold, setBold] = useController("bold");

  useEffect(() => {
    console.log(bold);
  }, [bold]);

  return (
    <div>
      <button onClick={() => setBold(!bold)}>negrito</button>
      <button>italico</button>
      <button>sublinhado</button>
    </div>
  );
};

export default Header;
