import React, { Component } from "react";
import "../css/rightCol.scss";
import arrowRight from "../assets/arrow_right.svg";
import infoIcon from "../assets/info.svg";
import deleteIcon from "../assets/delete.svg";
import yellowBox, { YellowBox } from "./YellowBox.jsx";

export class RightColumn extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    // VARIBALE WIL BE SET DEPENDING ON STEP
    let yBox;
    let ybContent;

    // SETS STEP FOR CLICK AND  BORDER TURE / FALSE
    let stepTjek12;

    // STEP 12
    // ---------------------------------------------------
    if (this.props.step === 12) {
      ybContent = {
        title: "Kupon",
        info: "Når du sætter et bet bliver det tilføjet til din Kupon",
        button: "on"
      };
      yBox = (
        <YellowBox
          nextStep={this.props}
          ybContent={ybContent}
          step={this.props.step}
        />
      );
      stepTjek12 = true;
    }
    // -------------------------------------------------

    // STEP 13
    let stepTjek13;
    // ---------------------------------------------------
    if (this.props.step === 13) {
      ybContent = {
        title: "Sats og vind",
        info:
          " Indtast 100kr. For at forsætte. Hvis du vinder, ganger vi dit beløb med det valgte odds. fx 100kr x 2,50 = 250kr. ",
        button: "on"
      };
      yBox = (
        <YellowBox
          nextStep={this.props}
          ybContent={ybContent}
          step={this.props.step}
        />
      );
      stepTjek13 = true;
    }
    // -------------------------------------------------

    // STEP 14
    let stepTjek14;
    // ---------------------------------------------------
    if (this.props.step === 14) {
      ybContent = {
        title: "Samlet gevinst",
        info:
          " Spiller du flere bets på engang kan du se din samlede gevinst her.  Lad os prøve et fiktivt spil på det bet du har lavet. Klik på “Køb spil” og se resultatet af kampen.",
        button: "on"
      };
      yBox = (
        <YellowBox
          nextStep={this.props}
          ybContent={ybContent}
          step={this.props.step}
        />
      );
      stepTjek14 = true;
    }
    // -------------------------------------------------

    return (
      <article className="right_column">
        <div
          style={
            stepTjek12 ? { outline: "2px solid orange" } : { outline: "none" }
          }
        >
          <div className="kupon_con">
            <div className="Kupon"> Kupon(1)</div>
            <div className="aktive">Aktive spil (0)</div>
            {this.props.step === 12 && yBox}
          </div>
          <div className="valgteSpil">
            <div>Valgte Spil(1)</div>
            <div>
              <img
                src={arrowRight}
                style={{ transform: "rotate(90deg)" }}
                alt="arrow Icon"
              />
            </div>
          </div>
          <div className="kupon_sats">
            <div>
              <div>Astralis - Liquid</div>
              <div className="r_col_icon">
                <img src={infoIcon} alt="info icon" />
              </div>
            </div>
            <div>Kampvinder</div>

            <div
              style={
                stepTjek13
                  ? { outline: "2px solid orange" }
                  : { outline: "none" }
              }
            >
              <div>Astralis</div>
              <div className="ods_sats">
                <div>2,50</div>
                <div>0kr.</div>
                <div className="r_col_icon">
                  <img src={deleteIcon} alt="delete icon" />
                </div>
              </div>
            </div>
            {this.props.step === 13 && yBox}
            <div>Mulig gevinst: 0,00kr.</div>
          </div>
          <div
            className="samlet_gevinst"
            style={
              stepTjek14 ? { outline: "2px solid orange" } : { outline: "none" }
            }
          >
            <div className="samlet_insats_gevinst">
              {this.props.step === 14 && yBox}

              <div>
                <div>Samlet indsats:</div>
                <div>0,00kr.</div>
              </div>
              <div>
                <div>Mulig gevinst i alt:</div>
                <div>0,00kr.</div>
              </div>
            </div>
            <div className="slet">
              <div>
                <div>Slet vaglte spil</div>
                <div className="r_col_icon">
                  <img src={deleteIcon} alt="delete icon" />
                </div>
              </div>
            </div>
            <div className="koeb_spil_con">
              <button
                className="koeb_knap"
                onClick={stepTjek14 ? this.continue : undefined}
              >
                Køb Spil
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default RightColumn;
