import React, { Component } from 'react';
import Nav  from "./nav";
import "../css/List.scss";

export class List extends Component {

// PREPARE STATE    
constructor(props) {
    super(props);
    this.state = {
        items: [],
        isLoaded: false,
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
            console.log(data);
            this.setState({
                isLoaded: true,
                items: data,
            })
        
            });
}

  render() {

// SET VARIABLES TO BE EQUAL TO STATE    
    let {isLoaded, items} = this.state;

// CHECK IF DATA IS LOADED IF NOT RETURN LOADING DATA ELSE RETURN LIST OF EMAILS    
    if(!isLoaded) {
        return <div className="LoadingData">Loading data...</div>
    }else {
        return (
            <div className="list_wrapper">
            <Nav />
                <div className="list_container">
                    <div className="list">
                    <h1>List of Information</h1>
                    <p>Click on a email for more details.</p>
                        <ul>
                            {items.map(item => (
                    
                                <li><b>Email:</b> {item.email}</li>
                    
                            ))};
                    
                        </ul>
                    </div>
                </div>
            </div>            
            )
    }

  }
}

export default List
