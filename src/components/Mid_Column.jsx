import React, { Component } from "react";
import "../css/Mid_Column.scss";
import starIcon from "../assets/star.svg";
import yellowBox, { YellowBox } from "./YellowBox.jsx";

export class Mid_Column extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    // RENDER SUB LISTS
    let midRow2;
    if (this.props.step > 9) {
      midRow2 = (
        <Scnd_Column step={this.props.step} nextStep={this.props.nextStep} />
      );
    }
    console.log(this.props.nextStep);
    return (
      <div className="mid_col_wrapper">
        <First_row step={this.props.step} nextStep={this.props.nextStep} />
        {midRow2}
      </div>
    );
  }
}

export default Mid_Column;

export class First_row extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    // VARIBALE WIL BE SET DEPENDING ON STEP
    let yBox;
    let ybContent;

    // SETS STEP FOR CLICK AND  BORDER TURE / FALSE

    let stepTjek8;
    let stepTjek9;

    // STEP 8
    // ---------------------------------------------------
    if (this.props.step === 8) {
      ybContent = {
        title: "Tilføj til favoritter",
        info:
          "Du kan tilføje bets til dine favortitter så du altid har det lige ved hånden",
        button: "on"
      };
      yBox = (
        <YellowBox
          nextStep={this.props}
          ybContent={ybContent}
          step={this.props.step}
        />
      );
      stepTjek8 = true;
    }
    // -------------------------------------------------

    // STEP 9
    // ---------------------------------------------------
    if (this.props.step === 9) {
      ybContent = {
        title: "Sorter og Filtrer",
        info: "Du kan sorte og filtere efter tid, væddemål, TV",
        button: "on"
      };
      yBox = (
        <YellowBox
          nextStep={this.props}
          ybContent={ybContent}
          step={this.props.step}
        />
      );
      stepTjek9 = true;
    }
    // -------------------------------------------------

    return (
      <div className="mid_wrapper">
        <div className="mid_con">
          <p>Forside > Esport > Counter-Strike GO > ESL Pro League</p>

          <div
            className="mid_header"
            style={
              stepTjek8 ? { outline: "2px solid orange" } : { outline: "none" }
            }
          >
            <p className="title">ESL Pro League</p>
            <div className="favourites">
              <p>Tilføj til mine favoritter</p>
              <img src={starIcon} alt="A star icon" />
            </div>
            {this.props.step === 8 && yBox}
          </div>

          <div
            className="mid_content"
            style={
              stepTjek9 ? { outline: "2px solid orange" } : { outline: "none" }
            }
          >
            <div className="time">
              <label htmlFor="time">Tid</label>
              <select name="time">
                <option value="all">Alle</option>
                <option value="today">Idag</option>
                <option value="next4hours">Næste 4 timer</option>
                <option value="next3days">Næste 3 dage</option>
              </select>
            </div>
            <div className="bet">
              <label htmlFor="bet">Væddemål</label>
              <select name="bet">
                <option value="all">Alle kampe</option>
                <option value="matchwinner">Kampvinder</option>
                <option value="firsthalf">Hvem vinder første halvleg?</option>
                <option value="secondhalf">Hvem vinder anden halvleg</option>
                <option value="firstgoal">Hvem scorer først?</option>
                <option value="bothteamscores">
                  Begge hold scorer? Ja/Nej
                </option>
              </select>
            </div>
            <div className="streaming">
              <label htmlFor="streaming">Tv</label>
              <select name="streaming">
                <option value="tv">Tv</option>
                <option value="danskespil">Danske Spil Tv</option>
              </select>
            </div>
          </div>
          {this.props.step === 9 && yBox}
        </div>
      </div>
    );
  }
}

export class Scnd_Column extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    // VARIBALE WIL BE SET DEPENDING ON STEP
    let yBox;
    let ybContent;

    // SETS STEP FOR CLICK AND  BORDER TURE / FALSE
    let stepTjek10;
    let stepTjek11 = false;

    // STEP 10
    // ---------------------------------------------------
    if (this.props.step === 10) {
      ybContent = {
        title: "Mulige Bets",
        info: "Her ser du en liste med de bets du kan spille på samt oddsne",
        button: "on"
      };
      yBox = (
        <YellowBox
          nextStep={this.props}
          ybContent={ybContent}
          step={this.props.step}
        />
      );
      stepTjek10 = true;
    }
    // -------------------------------------------------
    // STEP 11
    // ---------------------------------------------------
    if (this.props.step === 11) {
      ybContent = {
        title: "Sæt dit væddemål",
        info: `Klik på odds "1" eller "2" og sæt dit væddemål på den du tror der vinder mellem 
        Astralis vs Liquid
        
        `,
        button: "on"
      };
      yBox = (
        <YellowBox
          nextStep={this.props}
          ybContent={ybContent}
          step={this.props.step}
        />
      );
      stepTjek11 = true;
    }
    // -------------------------------------------------
    return (
      <table
        style={
          stepTjek10 ? { outline: "2px solid orange" } : { outline: "none" }
        }
      >
        <tr>
          <th>Tid</th>
          <th>Kamp</th>
          <th>
            <div className="th_odds_con">
              <div>1</div>
              <div>X</div>
              <div>2</div>
            </div>
          </th>
          <th>{this.props.step === 10 && yBox} </th>
        </tr>
        <tr
          style={
            stepTjek11 ? { outline: "2px solid orange" } : { outline: "none" }
          }
        >
          <td>15:00</td>
          <td>Astralis - Liquid</td>
          <td>
            <div className="odds_con">
              <div
                className="odds_1"
                onClick={stepTjek11 ? this.continue : undefined}
              >
                2,50
              </div>
              <div>-</div>
              <div
                className="odds_2"
                onClick={stepTjek11 ? this.continue : undefined}
              >
                2,50
              </div>
            </div>
          </td>
          <td>+6 {this.props.step === 11 && yBox}</td>
        </tr>

        <tr>
          <td>15:55</td>
          <td>Winstrike - x-kom</td>
          <td>
            <div className="odds_con">
              <div className="odds_1">3,15</div>
              <div>-</div>
              <div className="odds_2">1,35</div>
            </div>
          </td>
          <td>+14</td>
        </tr>
        <tr>
          <td>16:00</td>
          <td>Flash Wolves - Phon Vu Buffalo</td>
          <td>
            <div className="odds_con">
              <div className="odds_1">1,10</div>
              <div>-</div>
              <div className="odds_2">6,50</div>
            </div>
          </td>
          <td>+30</td>
        </tr>
        <tr>
          <td>17:00</td>
          <td>pro100 - Team Spirit</td>
          <td>
            <div className="odds_con">
              <div className="odds_1">3,45</div>
              <div>-</div>
              <div className="odds_2">1,30</div>
            </div>
          </td>
          <td>+4</td>
        </tr>
      </table>
    );
  }
}
