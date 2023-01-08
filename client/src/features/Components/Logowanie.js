import React from "react";
import './Logowanie.css';
import {Zalogowales_sie} from "./Zalogowales_sie.js";
import { browserHistory, Router, Route } from 'react-router';

export class Logowanie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value1: '', value2: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value1: event.target.value});
    }
    handleChange1(event) {
        this.setState({value2: event.target.value});
    }
    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        console.log('A name was submitted: ' + this.state.value1 + ' '+
        this.state.value2)
        if(this.state.value1.equals("jakub") && this.state.value2.equals("jakub")){
           // window.open("http://localhost:3000/zalogowales_sie")
        }
        event.preventDefault();
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>

                <label>
                    <font size={"20"}>Email:</font>
                    <input id={"email"} size={"20"} height={"20"} type="text" value={this.state.value1} onChange={this.handleChange} />
                    <br/>
                    <font size={"20"}>Haslo:</font>
                    <input id={"haslo"} type="text" value={this.state.value2} onChange={this.handleChange1} />
                    <br/>
                </label>
                <input id={"button"} type="submit" value="Zaloguj sie" />
            </form>
        );
    }
}
