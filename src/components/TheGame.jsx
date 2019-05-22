import React, { Component } from "react";
import "../css/theGame.scss";
import joystick from "../assets/joystick.svg";
import placeHolderImageCS from "../assets/placeholderCS.jpg";

export class TheGame extends Component {
  render() {
    return (
      <div className="theGame_wrap">
        <div className="theGame_con">
          <div className="tg_head">
            <div className="tg_icon">
              <img src={joystick} alt="joystick icon" />
            </div>
            <div className="tg_league">ESL Pro League</div>
          </div>
          {/* <TheGameStep1 /> */}
          <TheGameStep2 />
        </div>
      </div>
    );
  }
}
export default TheGame;

export class TheGameStep1 extends Component {
  render() {
    return (
      <div className="tg_s1_wrap">
        <div className="tg_s1_txt">
          Mærk spændingen ved at bette når du følger dine favorit sportgrene i
          tv'et eller på internettet.
        </div>
        <div className="game_frame">
          <div className="team_counter_com">
            <div>
              <div>
                Astralis <span>0</span> - <span>0</span> Liquid
              </div>
              <div>29´</div>
            </div>
          </div>
          <div className="tg_svg_con">
            <img src={placeHolderImageCS} alt="SVG ANIMATION PLACEHOLDER" />
          </div>
        </div>
      </div>
    );
  }
}

export class TheGameStep2 extends Component {
  render() {
    return (
      <div className="tg_s2_wrap">
        <div className="tg_s2_header">Tilykkke</div>
        <div className="result">
          Astralis <span>2</span> - <span>1</span> Liquid{" "}
        </div>

        <div className="tg_s2_txt">
          Tillykke med dit første succesfulde bet og en sejr til Astralis! Din
          gevinst på 250kr betting bonus er sendt med til din oprettelse af din
          danske spil konto.
        </div>
        <div className="gevinst_con">
          <div>250kr.</div>
          <div>BETTNG BONUS</div>
        </div>
        <button className="tg_s2_but">OPET KONTO</button>
      </div>
    );
  }
}
