import React, { Component } from 'react';
import "../css/Step1.scss";
import Step1Image from "../assets/step1_image.svg";

export class Step1 extends Component {
  render() {
    return (
    <div className="Modal_wrapper">
      <div className="Modal_con">
        <div className="Modal_text">
            <h1>Velkommen</h1>
            <p>Hos Danske Spil tilbyder vi en underholdende &amp; sikker spil oplevelse. Vi vil gerne lige vise dig, hvordan du bedst vinder med dine yndlings hold.</p>
            <div className="Button_con">
            <button className="Modal_button">Start Tutorial</button>
            <div className="button_tip"></div>
            </div>
        </div>
        <img src={Step1Image} alt="Popular Games"/>
      </div>
    </div>
    )
  }
}

export default Step1
