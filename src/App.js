import React from "react";
import Site from "./components/site.jsx";
import Nav from "./components/nav.jsx";
import Step1 from "./components/Step1";
import Mid_Column from "./components/Mid_Column.jsx";
import FormBeginFlow from "./components/FormBeginFlow.jsx";
import GameModal from "./components/GameModal";

function App() {
  return (
    <div className="App">
      <Nav />
      <div id="site_content_wrapper">
         <GameModal /> 
      </div>
    </div>
  );
}

export default App;
