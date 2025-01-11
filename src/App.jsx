import { useState } from "react";
import "./App.css";
import FirstChild from "./components/FirstChild.jsx";
import SecondChild from "./components/SecondChild.jsx";

function App() {
  return (
    <>
      <FirstChild />
      <SecondChild />
    </>
  );
}

export default App;
