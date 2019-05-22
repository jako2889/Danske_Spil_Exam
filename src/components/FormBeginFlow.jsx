import React, { Component } from 'react';
import FormAccountDetails from "./FormAccountDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import FormSecurityDetails from "./FormSecurityDetails";
import FormNemID from "./FormNemID";
import FormSucces from "./FormSucces";

export class FormBeginFlow extends Component {
    state = {
        step: 1,
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
        cpr: "",
        firstName: "",
        lastName: "",
        streetName: "",
        houseNumber: "",
        postNumber: "",
        city: "",
        country: "",
        phone: "",
        securityQuestion: "",
        securityAnswer: "",
        maxBetting: ""
    }

    // PROCEED TO NEXT STEP
    nextStep = () => {
        const { step } =  this.state;
        this.setState({
            step: step + 1
        });
    }

    // BACK TO PREVIOUS STEP
    prevStep = () => {
        const { step } =  this.state;
        this.setState({
            step: step - 1
        });
    }

    // HANDLE FIELDS INPUT CHANGE
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }


    render() {
        const { step } = this.state;
        const { email, userName, password, confirmPassword, cpr, firstName, lastName, streetName, houseNumber, postNumber, city, country, phone, securityQuestion, securityAnswer, maxBetting} = this.state;
        const values = { email, userName, password, confirmPassword, cpr, firstName, lastName, streetName, houseNumber, postNumber, city, country, phone, securityQuestion, securityAnswer, maxBetting};

        switch(step) {
            case 1:
                return (
                    <FormAccountDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    step={this.state.step}
                    />
                )
            case 2:
                return <FormPersonalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                step={this.state.step}
                />
            case 3:
                return <FormSecurityDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                step={this.state.step}
                />
            case 4:
                return <FormNemID
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                step={this.state.step}
                />
            case 5:
                return <FormSucces
                handleChange={this.handleChange}
                values={values}
                />
        }
    }
}

export default FormBeginFlow
