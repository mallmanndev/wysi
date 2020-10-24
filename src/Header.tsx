import React, { useEffect } from "react";
import useController from "./lib/useController";
import BoldButton from './lib/components/Buttons/BoldButton'

const Header = (props:any) :JSX.Element => {
  // Default buttons if users don't pass into Header Component
  const defaultButtons = [
    <BoldButton key='negrito' label="negrito"  ></BoldButton>
  ]

return <>{props.children || defaultButtons}</>
};

export default Header;
