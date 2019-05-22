import React, { Component } from "react";
import Site from "./components/site.jsx";
import Nav from "./components/nav.jsx";
import Step1 from "./components/Step1";
import Mid_Column from "./components/Mid_Column.jsx";
import FormBeginFlow from "./components/FormBeginFlow.jsx";

// function App() {

// }

export class App extends Component {
  state = {
    step: 1
  };

  //PROCEED TO NEXT STEP APP
  nextStepAPP = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // //PROCEED TO PREV STEP
  // prevStep = () => {
  //   const { step } = this.state;
  //   this.setState({
  //     step: step - 1
  //   });
  // };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <div className="App">
            <Nav />
            <div id="site_content_wrapper">
              <Site nextStepAPP={this.nextStepAPP} />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="App">
            <Nav />
            <FormBeginFlow />
          </div>
        );
    }
  }
}

export default App;
