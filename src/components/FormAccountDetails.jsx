import React, { Component } from 'react';

export class FormAccountDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        // Make values a variable to destruct and just use the variable instead of props
        const { values, handleChange } = this.props;
        return (
                    <React.Fragment>
                    <h1>Form Account Details</h1>    
                    <button onClick={this.continue}>Continue</button>
                    </React.Fragment>
        )
    }
}

export default FormAccountDetails
