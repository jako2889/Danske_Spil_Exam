import React, { Component } from 'react';
import "../css/Mid_Column.scss";
import starIcon from "../assets/star.svg";

export class Right_Column extends Component {
  render() {
    return (
      <div className="mid_wrapper">
        <div className="mid_con">
            <p>Forside > Esport > Counter-Strike GO > ESL Pro League</p>
            <div className="mid_header">
                <p className="title">ESL Pro League</p>
                <div className="favourites">
                <p>Tilføj til mine favoritter</p>
                <img src={starIcon} alt="A star icon"/>
                </div>
            </div>
            <div className="mid_content">
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
                        <option value="bothteamscores">Begge hold scorer? Ja/Nej</option>
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
        </div>
        
      </div>
    )
  }
}

export default Right_Column
