import logo from "./logo.svg";
import "./App.css";
import Form from "./components/cateringForm";
import NavBar from "./components/NavBar";
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./components/Button";
import "./index.css";
import Home from "./components/Home";
import WorkWithUs from "./components/WorkWithUs.Js";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          console.log("You clicked on ME");
        }}
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--large"
      >
        {" "}
        Buy Now{" "}
      </Button>

      <NavBar />

      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/WorkWithUs" component={WorkWithUs} />
        <Route exact path="AboutUs" component={AboutUs} />
        <Route exact path="Menu" component={Menu} />
        <Route exact path="ContactUs" component={ContactUs} />
      </Routes>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
