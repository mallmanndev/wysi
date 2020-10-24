import React from "react";
import useController from "../../useController";
import {IButton} from "./Ibutton"
import "./styles.css";




const Button = (props:IButton) => {
    return (
        <button className="editor-button" title={props.title || props.label} onClick={props.onClick} >{props.label}</button>
    );
  };
  
  export default Button;
  