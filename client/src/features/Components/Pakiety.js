import React from "react";
import './Pakiety.css'
import DataStorage from "./DataStorage";
import axios from 'axios'


export class Pakiety extends React.Component {
    buy() {
        console.log("muuuuuu");
    }

    state = {
        Pakiety: []
    }

    componentDidMount() {
        fetch(
            "http://localhost:5000/Pakiet")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    Pakiety: json
                });
            })
    }

    render() {
        const {Pakiety} = this.state
        return (
            <>
                <div className="navigation_bar">
                    <a className="active" href="/zalogowales_sie/glowna">Strona główna</a>
                    <a href="/zalogowales_sie/pakiety">Pakiety</a>
                    <a id="last" href="/zalogowales_sie/placowki">Placówki</a>
                    <a href="/">Wyloguj sie</a>

                </div>
                <br/>
                <div className="flex-container">
                    {Pakiety.map(Pakiet => (
                        <div className="flex-child " key={Pakiet.idPakiet}>
                            <strong>Nazwa:</strong> {Pakiet.NamePakiet}
                            <br/><br/>
                            {Pakiet.SummaryPakiet}

                            <br/><br/>
                            Cena: {Pakiet.PricePakiet}
                        </div>
                    ))}
                </div>
            </>
        );
    }
}