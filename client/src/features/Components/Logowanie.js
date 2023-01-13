import React from "react";
import './Logowanie.css';
import {Zalogowales_sie} from "./Zalogowales_sie";


export class Logowanie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value1: '', value2: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.DataStorage = this.props.DataStorage;
    }

    handleChange(event) {
        this.setState({value1: event.target.value});
    }
    handleChange1(event) {
        this.setState({value2: event.target.value});
    }
    setData(){
        let value = this.state.value1;

        console.log(value);
        this.props.DataStorage.email.push(value);
        Zalogowales_sie.DataStorage = this.props.DataStorage;
        console.log(this.props.DataStorage.email.indexOf("jakub"));

    }
    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);

        this.setData();
        if(this.state.value1 === "jakub" && this.state.value2 === "jakub"){

            console.log('A name was submitted: ' + this.state.value1 + ' '+
                this.state.value2)
            console.log("tuuuuu");

            window.open("http://localhost:3000/zalogowales_sie/uzytkownik");

            window.close("http://localhost:3000/");
            console.log("my");
        }
        event.preventDefault();
    }

    render() {
        return (

            <form id = "logowanie" onSubmit={this.handleSubmit}>

                <label>
                    <font id={"email_label"} size={"20"}>Email &nbsp;</font>
                    <input id={"email"} size={"20"} height={"20"} type="text" value={this.state.value1} onChange={this.handleChange} />
                    <br/>
                    <font id={"haslo_label"} size={"20"}>Haslo &nbsp;</font>
                    <input id={"haslo"} type="text" value={this.state.value2} onChange={this.handleChange1} />
                    <br/>
                </label>
                <input id={"button"} type="submit" value="Zaloguj sie" />

            </form>

        );
    }
}
