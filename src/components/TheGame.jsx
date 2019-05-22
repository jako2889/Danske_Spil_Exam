import React, { Component } from "react";
import "../css/theGame.scss";
import joystick from "../assets/joystick.svg";
import GameSvg from "./GameSvg";

export class TheGame extends Component {
  // MAKE COUNTER / AFTER COUNTER ENDS GO TO NEXT STEP
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    console.log(this.props.nextStepAPP);

    // STEP 15
    // ---------------------------------------------------
    // let TheGameStep1;
    // if (this.props.step === 15) {
    //   TheGameStep1 = <TheGameStep1 />;
    // }
    // console.log(this.props.step);
    // -------------------------------------------------
    // STEP 16
    // ---------------------------------------------------
    // let TheGameStep2;
    // if (this.props.step === 16) {
    //   TheGameStep2 = <TheGameStep2 />;
    // }
    // -------------------------------------------------

    return (
      <div className="theGame_wrap" onClick={this.continue}>
        <div className="theGame_con">
          <div className="tg_head">
            <div className="tg_icon">
              <img src={joystick} alt="joystick icon" />
            </div>
            <div className="tg_league">ESL Pro League</div>
          </div>
          {this.props.step === 15 && <TheGameStep1 />}
          {this.props.step === 16 && (
            <TheGameStep2 nextStepAPP={this.props.nextStepAPP} />
          )}
        </div>
      </div>
    );
  }
}
export default TheGame;

export class TheGameStep1 extends Component {
  constructor() {
    super();
    this.game = React.createRef();
  }

  componentDidMount() {
    const gameRef = this.game.current;
    console.log(gameRef);
  }
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
            <GameSvg ref={this.game} />
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
        <button className="tg_s2_but" onClick={this.props.nextStepAPP}>
          OPET KONTO
        </button>
      </div>
    );
  }
}
