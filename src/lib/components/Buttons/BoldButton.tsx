import React,{useEffect} from "react";
import useController from "../../useController";
import {IButton} from "../Button/Ibutton"
import "../Button/styles.css";

const BoldButton = (props:IButton) => {
    const [bold, setBold] = useController("bold");

    useEffect(() => {
        console.log(bold);
      }, [bold]);

    return (
        <button className="editor-button" title={props.title || props.label} onClick={()=>setBold(!bold)} >{props.label}</button>
    );
  };
  
  export default BoldButton;
  