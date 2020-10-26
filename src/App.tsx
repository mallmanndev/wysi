import React from "react";
import "./App.css";
import Header from "./Header";
import Button  from './lib/components/Button'
import BoldButton from './lib/components/Buttons/BoldButton'
import { EditorArea, Wysi } from "./lib";
import controllers from "./lib/components/Wysi/defaultControllers";

function App() {
  return (
    <div>
      <h1>Wysi project</h1>
      <h3>Lets go hacking!</h3>

      <div>
        <Wysi>
          <Header>
              <BoldButton label='Negrito' title='Negrito'  />
              {/* Custom buttons */}
              <Button label='Itálico' onClick={()=>console.log("This is a custom action")} />
              <Button label='Sublinhado' />
          </Header>
          <EditorArea />
        </Wysi>
      </div>
    </div>
  );
}

export default App;
