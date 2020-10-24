import React from "react";
import "./styles.css";

const EditorArea = () => {
  return (
    <div className="editor_area" contentEditable onChange={console.log}></div>
  );
};

export default EditorArea;
