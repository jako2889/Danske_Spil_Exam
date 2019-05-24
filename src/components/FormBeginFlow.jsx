import React, { Component } from 'react';
import FormAccountDetails from "./FormAccountDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import FormSecurityDetails from "./FormSecurityDetails";
import FormNemID from "./FormNemID";
import FormSucces from "./FormSucces";

// Validating inputs
const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(value => {
        value.length > 0 && (valid = false);
    });
    
    return valid;
}

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
        maxBetting: "",
        formErrors: {
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

        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        console.log("Name: ", name);
        console.log("value: ", value);

        switch (name) {
            case "email":
                formErrors.email =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
            case "userName":
                formErrors.userName =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
            case "password":
                formErrors.password =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
            case "confirmPassword":
                formErrors.confirmPassword =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
            case "cpr":
                formErrors.cpr =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
            case "firstName":
                formErrors.firstName =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
            case "lastName":
                formErrors.lastName =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
            case "streetName":
                formErrors.streetName =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
            case "postNumber":
                formErrors.postNumber =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
            case "city":
                formErrors.city =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
            case "country":
                formErrors.country =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
            case "phone":
                formErrors.phone =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
            case "securityQuestion":
                formErrors.securityQuestion =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
            case "securityAnswer":
                formErrors.securityAnswer =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
            case "maxBetting":
                formErrors.maxBetting =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
                default:
                break;
        }

    }
    handleSubmit = e => {
        e.preventDefault();
        if(formValid(this.state.formErrors)) {
            console.log('Submitting', this.state.values);
        }else {
            console.error("Form invalid - display error message");
        }
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
                    formErrors={this.state.formErrors}
                    />
                )
            case 2:
                return <FormPersonalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                step={this.state.step}
                formErrors={this.state.formErrors}
                />
            case 3:
                return <FormSecurityDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                step={this.state.step}
                formErrors={this.state.formErrors}
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
