import logo from "./logo.svg";
import "./App.css";
import Form from "./components/cateringForm";
import NavBar from "./components/NavBar";
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./components/Button";
import "./index.css"

function App() {
  return (
    <div className="App">

      <Button onClick={() => { console.log("You clicked on ME") }}
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--large"> Buy Now </Button>

      <NavBar />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Form />
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)