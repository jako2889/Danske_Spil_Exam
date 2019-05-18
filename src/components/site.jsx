import React, { Component } from "react";
// import LeftColumn from "./LeftColumn.jsx";
// import Step1 from "./Step1.jsx";
export class site extends Component {
  state = {
    step: 2
  };

  //PROCEED TO NEXT STEP
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //PROCEED TO PREV STEP
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  render() {
    const { step } = this.state;

    return <div>HEJ</div>;

    // switch (step) {
    // //   case 1:
    // //     return <LeftColumn />;

    // //   case 2:
    // //     return <Step1 />;
    // }
  }
}

export default site;
