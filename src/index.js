/*
*DESCOMENTAR PARA MOSTAR LA WEB
*/


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";

Modal.setAppElement("#root");

ReactDOM.render(
  <App />,
  document.getElementById("root")
);


/*
*DESCOMENTAR PARA ACTIVAR LA WEB TEMPORAL
*/


/*
import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Estamos terminando
          <br />
          la página web
        </h1>
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/