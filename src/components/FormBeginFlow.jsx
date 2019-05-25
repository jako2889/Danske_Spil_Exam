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
    nextStep = (e) => {
        e.preventDefault();
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
    currentStep = () => {
        const { step } =  this.state;
        this.setState({
            step: step
        });
    }

    handleChange = input => e => {
// HANDLE FIELDS INPUT CHANGE   
        this.setState({[input]: e.target.value});


//FOR EACH INPUT MAKE VALIDATION CHECK WITH SWITCH SYNC WITH NAME ATTRIBUTE IN INPUT
        const {name, value} = e.target;
        //MAKE VARIALBE THAT TAKES EMPTY ARRAY FORM ERROR VALUES FROM STATE
        let formErrors = this.state.formErrors;

        console.log("Name: ", name);
        console.log("value: ", value);

        //EACH CASE SETS EACH VALUE FROM FORMERROR TO SHOW AN ERROR MESSAGE IF CONDITIONS IS MET
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
    handleSubmitAccount = e => {
        e.preventDefault();

        console.log(e);
        let {email, userName, password, confirmPassword} = this.state;
        let accountValues = [email, userName, password, confirmPassword];
        console.log("This is accountvalues: ",accountValues);

        //MAKE VARIALBE THAT ITERATE WITH MAP THROUGH ACCVALUES AND SETS VALUE TO TRUE IF STRING IS EMPTY
        let check = accountValues.map((value => {
            return "" === value && true;
          }));

        console.log("STRING VALUE IS: ",check);
        //LOOP THROUGH AND CHECK IF ANY IS TRUE IF TRUE PASS TRUE IF ELSE PASS FALSE
        let realCheck = check.some(function (item) {
            return item === true;
        });

        console.log("IS THERE AN ERROR IN ANY INPUT?",realCheck);
        if(realCheck === true) {
                console.log("ERROR IN INPUT");
                 //CALL CURRENT STEP
                 this.currentStep(e);
        }else {
                console.log("NO ERRORS IN INPUT");
                //CALL NEXT STEP
                this.nextStep(e);
        }

    }
    handleSubmitPersonal = e => {
        e.preventDefault();

        console.log(e);
        // VALUES SHOULD BE AN ARRAY
        let {cpr, firstName, lastName, streetName, houseNumber, postNumber, city, country, phone} = this.state;
        let personalValues = [cpr, firstName, lastName, streetName, houseNumber, postNumber, city, country, phone];
        console.log("This is personalValues: ",personalValues);

                //MAKE VARIALBE THAT ITERATE WITH MAP THROUGH ACCVALUES AND SETS VALUE TO TRUE IF STRING IS EMPTY
                let check = personalValues.map((value => {
                    return "" === value && true;
                  }));
        
                console.log("STRING VALUE IS: ",check);
                //LOOP THROUGH AND CHECK IF ANY IS TRUE IF TRUE PASS TRUE IF ELSE PASS FALSE
                let realCheck = check.some(function (item) {
                    return item === true;
                });
        
                console.log("IS THERE AN ERROR IN ANY INPUT?",realCheck);
                if(realCheck === true) {
                        console.log("ERROR IN INPUT");
                         //CALL CURRENT STEP
                         this.currentStep(e);
                }else {
                        console.log("NO ERRORS IN INPUT");
                        //CALL NEXT STEP
                        this.nextStep(e);
                }

    }
    handleSubmitSecurity = e => {
        e.preventDefault();

        console.log(e);
        // VALUES SHOULD BE AN ARRAY
        let {securityQuestion, securityAnswer, maxBetting} = this.state;
        let securityValues = [securityQuestion, securityAnswer, maxBetting];
        console.log("This is securityValues: ",securityValues);

                        //MAKE VARIALBE THAT ITERATE WITH MAP THROUGH ACCVALUES AND SETS VALUE TO TRUE IF STRING IS EMPTY
                        let check = securityValues.map((value => {
                            return "" === value && true;
                          }));
                
                        console.log("STRING VALUE IS: ",check);
                        //LOOP THROUGH AND CHECK IF ANY IS TRUE IF TRUE PASS TRUE IF ELSE PASS FALSE
                        let realCheck = check.some(function (item) {
                            return item === true;
                        });
                
                        console.log("IS THERE AN ERROR IN ANY INPUT?",realCheck);
                        if(realCheck === true) {
                                console.log("ERROR IN INPUT");
                                 //CALL CURRENT STEP
                                 this.currentStep(e);
                        }else {
                                console.log("NO ERRORS IN INPUT");
                                //CALL NEXT STEP
                                this.nextStep(e);
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
                    handleSubmitAccount={this.handleSubmitAccount}
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
                handleSubmitPersonal={this.handleSubmitPersonal}
                />
            case 3:
                return <FormSecurityDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                step={this.state.step}
                formErrors={this.state.formErrors}
                handleSubmitSecurity={this.handleSubmitSecurity}

                />
            case 4:
                return <FormNemID
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                step={this.state.step}
                handleSubmit={this.handleSubmit}
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
