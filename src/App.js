import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./data";
import PreLoadScreen from "./components/PreLoadScreen";
// import "./App.css"; 

function App() {
  return (
    <div className="App">
      <PreLoadScreen />
      <Data />
    </div>
  );
}

export default App;
