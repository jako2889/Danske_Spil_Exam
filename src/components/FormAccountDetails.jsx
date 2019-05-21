import React, { Component } from 'react';
import FormHeader from "./FormHeader";
import "../css/FormStyle.scss";

export class FormAccountDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        // Make values a variable to destruct and just use the variable instead of props
        const { values, handleChange } = this.props;
        return (
            
        <div className="form_wrapper">
        <FormHeader />
            <form>
                <h1>Form Account Details</h1>
                
                <div className="inputStyle">
                <input type="email" placeholder="Email"
                 onChange={handleChange("email")}
                 defaultValue={values.email}
                 required
                 ></input> 
                <label>Email</label>
                <div className="helpText">Required</div>
                 </div>

                <div className="inputStyle">
                <input type="text" placeholder="Brugernavn"
                 onChange={handleChange("userName")}
                 defaultValue={values.userName}
                 required
                 ></input> 
                <label>Brugernavn</label> 
                </div>

                <div className="inputStyle">
                <input type="password" placeholder="Adgangskode"
                 onChange={handleChange("password")}
                 defaultValue={values.password}
                 required
                 ></input> 
                 <label>Adgangskode</label> 
                 </div>

                <div className="inputStyle">
                <input type="password" placeholder="Indtast adgangskode igen"
                 onChange={handleChange("confirmPassword")}
                 defaultValue={values.confirmPassword}
                 required
                 ></input> 
                 <label>Indtast adgangskode igen</label>
                 </div>      
                <button onClick={this.continue}>Continue</button>

            </form>
        </div>
        )
    }
}

export default FormAccountDetails
