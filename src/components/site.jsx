import React, { Component } from "react";
import LeftColumn from "./LeftColumn.jsx";
import Step1 from "./Step1.jsx";
import MidCol from "./Mid_Column.jsx";
import RightCol from "./RightColumn.jsx";
import BlackCover from "./BlackCover.jsx";
import TheGame from "./TheGame.jsx";
import "../css/mainGrid.scss";
import FormBeginFlow from "./FormBeginFlow.jsx";

export class site extends Component {
  state = {
    step: 1,
    Kampvinder: ""
  };

  //PROCEED TO NEXT STEP
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // SET KAMPVINDER

  setKampvinder = e => {
    console.log(e.target);

    // this.setState({
    //   Kampvinder: "hej"
    // });

    let clickedTeam = e.target.className;
    if (clickedTeam === "odds_1") {
      this.setState({
        Kampvinder: "Astralis"
      });
    }
    if (clickedTeam === "odds_2") {
      this.setState({
        Kampvinder: "Liquid"
      });
    }
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

    switch (step) {
      //   default:*/
      // // return <MainStep nextStep={this.nextStep} step={this.state.step} />;
      // /*  break;
      case 1:
        return (
          <div id="site_content_container">
            <Step1 nextStep={this.nextStep} />
          </div>
        );
      case 2:
        return (
          <div id="site_content_container">
            <LeftColumn nextStep={this.nextStep} step={this.state.step} />
          </div>
        );
      case 3:
        return (
          <div id="site_content_container">
            <LeftColumn nextStep={this.nextStep} step={this.state.step} />
          </div>
        );
      case 4:
        return (
          <div id="site_content_container">
            <LeftColumn nextStep={this.nextStep} step={this.state.step} />
          </div>
        );
      case 5:
        return (
          <div id="site_content_container">
            <LeftColumn nextStep={this.nextStep} step={this.state.step} />
          </div>
        );
      case 6:
        return (
          <div id="site_content_container">
            <LeftColumn nextStep={this.nextStep} step={this.state.step} />
          </div>
        );
      case 7:
        return (
          <div id="site_content_container">
            <LeftColumn nextStep={this.nextStep} step={this.state.step} />
          </div>
        );
      case 8:
        return (
          <div id="site_content_container">
            <LeftColumn nextStep={this.nextStep} step={this.state.step} />
            <MidCol nextStep={this.nextStep} step={this.state.step} />
          </div>
        );
      case 9:
        return (
          <div id="site_content_container">
            <LeftColumn nextStep={this.nextStep} step={this.state.step} />
            <MidCol nextStep={this.nextStep} step={this.state.step} />
          </div>
        );

      case 10:
        return (
          <div id="site_content_container">
            <LeftColumn nextStep={this.nextStep} step={this.state.step} />
            <MidCol nextStep={this.nextStep} step={this.state.step} />
          </div>
        );
      case 11:
        return (
          <div id="site_content_container">
            <LeftColumn nextStep={this.nextStep} step={this.state.step} />
            <MidCol
              nextStep={this.nextStep}
              step={this.state.step}
              setKampvinder={this.setKampvinder}
            />
          </div>
        );
      case 12:
        return (
          <div id="site_content_container">
            <LeftColumn nextStep={this.nextStep} step={this.state.step} />
            <MidCol nextStep={this.nextStep} step={this.state.step} />
            <RightCol
              nextStep={this.nextStep}
              step={this.state.step}
              Kampvinder={this.state.Kampvinder}
            />
          </div>
        );
      case 13:
        return (
          <div id="site_content_container">
            <LeftColumn nextStep={this.nextStep} step={this.state.step} />
            <MidCol nextStep={this.nextStep} step={this.state.step} />
            <RightCol
              nextStep={this.nextStep}
              step={this.state.step}
              Kampvinder={this.state.Kampvinder}
            />
          </div>
        );
      case 14:
        return (
          <div id="site_content_container">
            <LeftColumn nextStep={this.nextStep} step={this.state.step} />
            <MidCol nextStep={this.nextStep} step={this.state.step} />
            <RightCol
              nextStep={this.nextStep}
              step={this.state.step}
              Kampvinder={this.state.Kampvinder}
            />
          </div>
        );

      case 15:
        return (
          <div id="site_content_container">
            <LeftColumn nextStep={this.nextStep} step={this.state.step} />
            <MidCol nextStep={this.nextStep} step={this.state.step} />
            <RightCol
              nextStep={this.nextStep}
              step={this.state.step}
              Kampvinder={this.state.Kampvinder}
            />
            <BlackCover nextStep={this.nextStep} step={this.state.step} />
            <TheGame nextStep={this.nextStep} step={this.state.step} />
          </div>
        );
      case 16:
        return (
          <div id="site_content_container">
            <LeftColumn nextStep={this.nextStep} step={this.state.step} />
            <MidCol nextStep={this.nextStep} step={this.state.step} />
            <RightCol
              nextStep={this.nextStep}
              step={this.state.step}
              Kampvinder={this.state.Kampvinder}
            />
            <BlackCover nextStep={this.nextStep} step={this.state.step} />
            <TheGame
              nextStep={this.nextStep}
              step={this.state.step}
              nextStepAPP={this.props.nextStepAPP}
            />
          </div>
        );
    }
  }
}

export default site;
