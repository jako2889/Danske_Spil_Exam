import React, { Component } from 'react';
import FormHeader from "./FormHeader";
import "../css/FormStyle.scss";
import { TweenMax, Back } from "gsap";

export class FormAccountDetails extends Component {
    constructor(props) {
        super(props);
        // reference to the DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = null;
      }
    
      componentDidMount() {
        // use the node ref to create the animation
        this.myTween = TweenMax.from(this.myElement, 1, {
          x: 1100,
          ease: Back.easeOut.config(1.0002)
        });
      }

    continue = e => {
        e.preventDefault();
        console.log("validate");
            if((this.props.values.userName === "" && this.props.values.password === "")) {

                
                console.log("ERROR");


            }else {
                this.props.nextStep();
            }


          //  { (this.state.values.userName === "" && this.state.values.password === "")? "" : console.log("ERROR") }
        
        
    }
    render() {
        // Make values a variable to destruct and just use the variable instead of props
        const { values, handleChange, formErrors } = this.props;
        console.log(formErrors);

        return (
            
        <div className="form_wrapper" ref={div => (this.myElement = div)}>
        <FormHeader step={this.props.step} />
            <form>
                    <div className="formIntroText">
                        <h1>Opret Blå Konto</h1>
                        <p>Med en Blå Konto kan du spille Oddset, eOddset, Tips, Dantoto, Casino, LiveCasino, Spillehjørnet, Zezam, Poker og Bingo. Du skal være minimum 18 år for at oprette en konto, så husk at have dit NemID parat.</p>
                    </div>
                
                <div className="inputStyle">
                <input name="email" type="email" placeholder="Email"
                 onChange={handleChange("email")}
                 defaultValue={values.email}
                 required
                 ></input> 
                <label>Email</label>
                {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                )}
                 </div>

                <div className="inputStyle">
                <input name="userName" type="text" placeholder="Brugernavn"
                 onChange={handleChange("userName")}
                 defaultValue={values.userName}
                 required
                 ></input> 
                <label>Brugernavn</label> 
                {formErrors.userName.length > 0 && (
                    <span className="errorMessage">{formErrors.userName}</span>
                )}
                </div>

                <div className="inputStyle">
                <input name="password" type="password" placeholder="Adgangskode"
                 onChange={handleChange("password")}
                 defaultValue={values.password}
                 required
                 ></input> 
                 <label>Adgangskode</label> 
                 {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                )}
                 </div>

                <div className="inputStyle">
                <input name="confirmPassword" type="password" placeholder="Indtast adgangskode igen"
                 onChange={handleChange("confirmPassword")}
                 defaultValue={values.confirmPassword}
                 required
                 ></input> 
                 <label>Indtast adgangskode igen</label>
                 {formErrors.confirmPassword.length > 0 && (
                    <span className="errorMessage">{formErrors.confirmPassword}</span>
                )}
                 </div>      
                <button type="submit" onClick={this.continue}>Næste</button>

            </form>
        </div>
        )
    }
}


export default FormAccountDetails
