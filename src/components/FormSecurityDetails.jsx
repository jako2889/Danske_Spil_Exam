import React, { Component } from 'react';
import FormHeader from "./FormHeader";
import "../css/FormStyle.scss";

export class FormSecurityDetails extends Component {
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
                        <h1>Sikkerhedsspørgsmål</h1>
                        <p>Du skal vælge et sikkerhedsspørgsmål og svar, som vi skal bruge, hvis du kontakter os omkring din konto.</p>
                    </div>

                    <select className="securityQuestion" onChange={handleChange("securityQuestion")}
                    defaultValue={values.securityQuestion}>
                            <option value="">Vælg sikkerhedsspørgsmål</option>
                            <option value="Mors fødselsnavn">Mors fødselsnavn</option>
                            <option value="Første bil">Første bil</option>
                            <option value="Favorit bog">Favorit bog</option>
                            <option value="Første kæledyr">Første kæledyr</option>
                            <option value="Kælenavn">Kælenavn</option>
                            <option value="Bedste vens navn">Bedste vens navn</option>
                            <option value="Helten fra din barndom">Helten fra din barndom</option>
                            <option value="Favorit hold">Favorit hold</option>
                            <option value="I hvilken by er du født">I hvilken by er du født</option>
                            <option value="Hvor gik du i skole">Hvor gik du i skole</option>
                    </select>

                    <div className="inputStyle">
                            <input type="text" placeholder="Svar på sikkerhedsspørgsmål"
                            onChange={handleChange("securityAnswer")}
                            defaultValue={values.securityAnswer}
                            required
                            ></input> 
                            <label>Svar på sikkerhedsspørgsmål</label>
                     </div>

                     <div className="maxBettingText">
                     <h1>Forventet spillebeløb</h1>
                     <p>Du bedes oplyse, hvor meget du forventer at vil spille om måneden på din Blå Konto. Vær opmærksom på at det beløb du angiver ikke er en grænse for, hvor meget du kan spille for.</p>
                     </div>

                     <select className="maxBetting" onChange={handleChange("maxBetting")}
                    defaultValue={values.maxBetting}>
                            <option value="">Vælg spillebeløb pr. måned</option>
                            <option value="0 - 5.000 kr.">0 - 5.000 kr.</option>
                            <option value="5.001 - 10.000 kr.">5.001 - 10.000 kr.</option>
                            <option value="10.001 - 15.000 kr.">10.001 - 15.000 kr.</option>
                            <option value="15.001 - 20.000 kr.">15.001 - 20.000 kr.</option>
                            <option value="20.001 -">20.001 -</option>
                    </select>
        
                     <div className="FormDoubleButtons">
                        <button onClick={this.continue}>Næste</button>
                        <button onClick={this.back}>Back</button>
                    </div> 
    
                </form>
            </div>

        )
    }
}

export default FormSecurityDetails
