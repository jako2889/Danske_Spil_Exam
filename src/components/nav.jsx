import React, { Component } from "react";
import "../css/nav.scss";
import logo_1 from "../assets/logo_1.svg";
import logo_2 from "../assets/logo_2.svg";
import arrowDown from "../assets/arrow_down.svg";

export class Nav extends Component {
  render() {
    return (
      <div className="nav_con">
        <header>
          <div className="row_1">
            <div className="row_1_con">
              <div>
                <div className="Logo_con">
                  <div className="logo">
                    <img src={logo_1} />
                  </div>
                </div>
                <div className="col_1">
                  <div>
                    <a href="#">Flere spil</a>
                    <div className="arrowDown">
                      <img src={arrowDown} alt="" />
                    </div>
                  </div>
                  <a href="#">Hjælp</a>
                  <a href="#">Om os</a>
                </div>
              </div>
              <div>
                <div className="col_2">
                  <a href="#">Log Ind</a>
                  <a href="#">Opret konto</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row_2">
            <div className="row_2_con">
              <div className="logo2_con">
                <div className="logo2">
                  <img src={logo_2} alt="LOGO" />
                </div>
              </div>
              <div className="col">
                <div>
                  {" "}
                  <a href="#">TITEL</a>
                  <div className="arrowDown">
                    <img src={arrowDown} alt="" />
                  </div>
                </div>
                <div>
                  {" "}
                  <a href="#">LIVE</a>
                </div>
                <div>
                  {" "}
                  <a href="#">Måljagt</a>
                </div>
                <div>
                  {" "}
                  <a href="#">Oddset Inside</a>
                </div>
                <div>
                  {" "}
                  <a href="#">Managerspil</a>
                  <div className="arrowDown">
                    <img src={arrowDown} alt="" />
                  </div>
                </div>
                <div>
                  {" "}
                  <a href="#">Kampagner</a>
                  <div className="arrowDown">
                    <img src={arrowDown} alt="" />
                  </div>
                </div>
                <div>
                  {" "}
                  <a href="#">Statistik</a>
                  <div className="arrowDown">
                    <img src={arrowDown} alt="" />
                  </div>
                </div>
                <div>
                  {" "}
                  <a href="#">Alt om Oddset</a>
                  <div className="arrowDown">
                    <img src={arrowDown} alt="" />
                  </div>
                </div>
              </div>
              <div />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Nav;