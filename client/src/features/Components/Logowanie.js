import React from "react";
import './Logowanie.css';

import DataStorage from "./DataStorage";
export let data = new DataStorage();


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
        let numer = "111 111 111";
        //dane kontakowe
        this.props.DataStorage.email.push(value);
        this.props.DataStorage.numer.push(numer);
        this.props.DataStorage.adres.push("ul. nowa");

        //dane osobowe
        this.props.DataStorage.imie.push("jan");
        this.props.DataStorage.nazwisko.push("pawel");
        this.props.DataStorage.plec.push("M");
        //this.props.DataStorage.data_urodzenia("01.01.2001")
        console.log(this.props.DataStorage.numer.indexOf("111 111 111"));
        data.email.push("jan");
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);

        this.setData();
        if(this.state.value1 === "jakub" && this.state.value2 === "jakub"){

            console.log('A name was submitted: ' + this.state.value1 + ' '+
                this.state.value2)
            console.log("tuuuuu");

            window.open("http://localhost:3000/zalogowales_sie/glowna");

           // window.close("http://localhost:3000/");
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
