import React, { Component } from 'react';
import GameSvg from "./GameSvg";

export class GameModal extends Component {
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

        <GameSvg ref={this.game} />

    )
  }
}

export default GameModal
