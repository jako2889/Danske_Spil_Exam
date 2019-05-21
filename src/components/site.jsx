import React, { Component } from "react";
import LeftColumn from "./LeftColumn.jsx";

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

    // return <div>HEJ</div>;

    switch (step) {
      //   default:*/
      // // return <MainStep nextStep={this.nextStep} step={this.state.step} />;
      // /*  break;
      case 1:
        return <div>STEP 1</div>;
      case 2:
        return <LeftColumn nextStep={this.nextStep} step={this.state.step} />;
      case 3:
        return <LeftColumn nextStep={this.nextStep} step={this.state.step} />;
      case 4:
        return <LeftColumn nextStep={this.nextStep} step={this.state.step} />;
      case 5:
        return <LeftColumn nextStep={this.nextStep} step={this.state.step} />;
      case 6:
        return <LeftColumn nextStep={this.nextStep} step={this.state.step} />;
      case 7:
        return <LeftColumn nextStep={this.nextStep} step={this.state.step} />;
      case 7:
        return <h1>MIDHTER COLUMN IN</h1>;
      //   case 3:
      //     return <Step3 nextStep={this.nextStep} />;
      //   case 4:
      //     return <Step4 nextStep={this.nextStep} />;
      //   case 5:
      //     return <Step5 nextStep={this.nextStep} />;
      //   case 6:
      //     return <Step6 nextStep={this.nextStep} />;
      //   case 7:
      //     return <Step7 nextStep={this.nextStep} />;
    }
  }
}

export default site;
