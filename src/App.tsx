import React from "react";
import "./App.css";
import Header from "./Header";
import { Wysi } from "./lib";
import controllers from "./lib/components/Wysi/defaultControllers";

function App() {
  return (
    <div>
      <h1>Wysi project</h1>
      <h3>Lets go hacking!</h3>

      <div>
        <Wysi>
          <div>
            <Header />
          </div>
        </Wysi>
      </div>
    </div>
  );
}

export default App;
