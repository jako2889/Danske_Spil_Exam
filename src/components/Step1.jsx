import React, { Component } from "react";
import "../css/Step1.scss";

// import Step1Image from "../assets/step1_image.svg";
import ds_logo from "../assets/ds_logo.svg";
export class Step1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <div className="Modal_wrapper">
        <div className="Modal_con">
          <div className="lp_logo_wrap">
            <div className="lp_logo_con">
              <img src={ds_logo} alt="Danske spil logo" />
            </div>
          </div>
          <div className="lp_txt_con">
            <div className="lp_header">Velkommen</div>
            <div className="lp_l1">
              Mærk spændeingen ved at bette når du spiller på dine yndlings
              spil.
            </div>
            <div className="lp_l2">
              Gennemfør vores hurtige tutorial og vind en velkomst bonus på
              <span className="lp_span"> 250kr.</span>
            </div>
          </div>
          <div className="lp_btn_wrap">
            <div className="lp_btn_con">
              <button
                className="lp_btn"
                onClick={this.continue}
                style={{ cursor: "pointer" }}
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Step1;

//         <div className="Modal_text">
{
  /* <h1>Velkommen</h1>
<p>
  Hos Danske Spil tilbyder vi en underholdende &amp; sikker spil
  oplevelse. Vi vil gerne lige vise dig, hvordan du bedst vinder med
  dine yndlings hold.
</p>
<div className="Button_con">
  <button className="Modal_button" onClick={this.continue}>
    Start Tutorial
  </button>
  <div className="button_tip" />
</div>
</div> */
}
