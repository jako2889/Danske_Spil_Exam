import React, { Component } from 'react';
import FormHeader from "./FormHeader";
import "../css/FormStyle.scss";
import NemidImage from "../assets/nemid.svg";

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
            <div className="form_wrapper">
            <FormHeader step={this.props.step} />
                <form>
                    <div className="formIntroText">
                        <h1>Login med Nem ID</h1>
                        <p>Login med Nem ID for at kunne benytte penge til at spille.</p>
                    </div>

                    <img className="nemIDImg" src={NemidImage} alt="Nem ID"></img>
        
                     <div className="FormDoubleButtons">
                        <button onClick={this.continue}>Continue</button>
                        <button onClick={this.back}>Back</button>
                    </div> 
    
                </form>
            </div>


        )
    }
}

export default FormNemID
