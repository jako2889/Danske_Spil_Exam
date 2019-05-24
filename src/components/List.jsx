import React, { Component } from 'react';
import Nav  from "./nav";
import "../css/List.scss";
import "../css/ListModal.scss";

export class List extends Component {

// PREPARE STATE    
constructor(props) {
    super(props);
    this.state = {
        items: [],
        isLoaded: false,
        step: 1
    }
}

componentDidMount() {
             // FETCH DATABASE AND POST DATA STRING TO DATABASE
             fetch("https://volt3sem-11e6.restdb.io/rest/information", {
                method: "get",
                headers: {
                 "Content-Type": "application/json; charset=utf-8",
                 "x-apikey": "5ca21c32df5d634f46ecb11b",
                 "cache-control": "no-cache"
                }
            })
            .then(res => res.json())
            .then(data => {

        // SET STATE TO BE EQUAL TO DATA
            this.setState({
                isLoaded: true,
                items: data,
            })
        
            });
}


// PROCEED TO NEXT STEP
nextStep = (e) => {
    const { step } =  this.state;
    this.setState({
        step: step + 1
    });

    console.log(e.target);
}

// BACK TO PREVIOUS STEP
prevStep = () => {
    const { step } =  this.state;
    this.setState({
        step: step - 1
    });
}

  render() {

// SET VARIABLES TO BE EQUAL TO STATE    
    let {isLoaded, items, step} = this.state;
    console.log(items);

    switch(step) {
        
    case 1:
    // CHECK IF DATA IS LOADED IF NOT RETURN LOADING DATA ELSE RETURN LIST OF EMAILS    
    if(!isLoaded) {
        return <div className="LoadingData">Loading data...</div>
    }else {
        return (
            <div className="list_wrapper">
            <Nav />
                <div className="list_container">
                    <div className="list">
                    <h1>Liste af Information</h1>
                    <p>Vælg et felt og se indtastet data fra brugere.</p>
                        <ul>
                            {/* {items.map(item => (
                    
                                <li key={this.state.id} onClick={this.nextStep}><b>Email:</b> {item.email}</li>
                                
                            ))}; */}
                            <li className="userName" onClick={this.nextStep}>Brugernavn</li>
                            <li onClick={this.nextStep}>Password</li>
                            <li onClick={this.nextStep}>Cpr</li>
                            <li onClick={this.nextStep}>Fornavn</li>
                            <li onClick={this.nextStep}>Efternavn</li>
                            <li onClick={this.nextStep}>Vejnavn</li>
                            <li onClick={this.nextStep}>Husnummer</li>
                            <li onClick={this.nextStep}>Postnummer</li>
                            <li onClick={this.nextStep}>Bynavn</li>
                            <li onClick={this.nextStep}>Land</li>
                            <li onClick={this.nextStep}>Telefon</li>
                            <li onClick={this.nextStep}>Sikkerhedsspørgsmål</li>
                            <li onClick={this.nextStep}>Svar på Sikkerhedsspørgsmål</li>
                            <li onClick={this.nextStep}>Max betting</li>
                    
                        </ul>
                    </div>
                </div>
            </div>            
            )
    }
        case 2:
            return <ListModal
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            items={this.state.items}
            step={this.state.step}
            />
    }

  }
}

export default List

export class ListModal extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
        
    }  

  render() {

    // SET VARIABLES TO BE EQUAL TO PROPS    
    let {items, step} = this.props;


    return (
     <div className="site_content">
        <Nav />
            <div className="modal_wrapper">
                <div className="modal_container">
                <h1>Details</h1>
                <button onClick={this.back}>Back</button>
                <ul>
                    {items.map(item => (
                        
                        <li key={this.props.id}><b>Brugernavn:</b> {item.userName}</li>
                        
                    ))}
                </ul>
                
                </div>
                
            </div>
      </div>   
    )
  }
}
