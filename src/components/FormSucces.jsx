import React, { Component } from 'react'

export class FormSucces extends Component {
  render() {
        // Make values a variable to destruct and just use the variable instead of props
        const { values, handleChange } = this.props;
    return (
      <div>
        <h1>Succes</h1>
      </div>
    )
  }
}

export default FormSucces
