import React, { Component } from 'react'

export class FormPersonalDetails extends Component {
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
                    <h1>Form Personal Details</h1>    
                    <button onClick={this.continue}>Continue</button>
                    <button onClick={this.back}>Back</button>
                    </React.Fragment>

        )
    }
}

export default FormPersonalDetails
