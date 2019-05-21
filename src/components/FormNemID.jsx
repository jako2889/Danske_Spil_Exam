import React, { Component } from 'react';
import FormHeader from "./FormHeader";

export class FormNemID extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        // Make values a variable to destruct and just use the variable instead of props
        const { values, handleChange } = this.props;
        return (
                    <React.Fragment>
                    <FormHeader step={this.props.step} /> 
                    <h1>Form Nem ID</h1>    
                    <button onClick={this.continue}>Continue</button>
                    <button onClick={this.back}>Back</button>
                    </React.Fragment>

        )
    }
}

export default FormNemID
