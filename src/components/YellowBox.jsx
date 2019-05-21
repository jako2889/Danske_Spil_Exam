import React, { Component } from "react";
import "../css/yellowBox.scss";
import joystick from "../assets/joystick.svg";

export class YellowBox extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep.nextStep();
  };
  render() {
    console.log(this.props.ybContent);

    const ybC = this.props.ybContent;

    // RENDER NEXT BUTTON
    let next;
    if (
      this.props.step === 2 ||
      this.props.step === 3 ||
      this.props.step === 7
    ) {
      next = (
        <button id="yb_but" onClick={this.continue}>
          NEXT
        </button>
      );
    }

    return (
      <div id="YellowBox_wrap">
        <div id="yb_content_con">
          <div id="arrowLeft_con">
            <div id="arrowLeft" />
          </div>
          <div id="header_con">
            <div id="title">{ybC.title}</div>

            <div id="tips_icon">
              <img src={joystick} alt="" />
            </div>
          </div>
          <div id="y_txt">{ybC.info}</div>
          {next}
        </div>
      </div>
    );
  }
}

export default YellowBox;
