import React, { Component } from 'react';
import "../css/FormHeader.scss";

export class FormHeader extends Component {
  render() {
    return (
      <div className="formHeader_con">
        <h1>Blå konto</h1>
        <p><b>Danske Licens Spil A/S:</b> Oddset, eOddset, Tips, Dantoto, Casino, Live Casino, Spillehjørnet, Zezam, Poker, Bingo</p>
      
        <div className="formProgressIndicator"></div>
      </div>
    )
  }
}

export default FormHeader
