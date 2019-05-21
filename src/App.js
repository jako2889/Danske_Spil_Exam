import React from "react";
import Site from "./components/site.jsx";
import Nav from "./components/nav.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="site_content_wrapper">
        <div className="site_content_container">
          <Site />
        </div>
      </div>
    </div>
  );
}

export default App;
