import React from "react";
import './Placowki.css'

export class Placowki extends React.Component {

    state = {
        PlacowkiKrakow: [],
        PlacowkiWarsaw: [],
        Trenerzy: []
    }

    componentDidMount() {
        fetch(
            "http://localhost:5000/Krakow")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    PlacowkiKrakow: json
                });
            })
        fetch(
            "http://localhost:5000/Warsaw")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    PlacowkiWarsaw: json
                });
            })
    }

    read_trenerzy(id) {
        console.log(id)
        switch (id) {
            case 1:
                fetch(
                    "http://localhost:5000/TrenerzySilownia1")
                    .then((res) => res.json())
                    .then((json) => {
                        this.setState({
                            Trenerzy: json
                        });
                    })
                break;
            case 2:
                fetch(
                    "http://localhost:5000/TrenerzySilownia2")
                    .then((res) => res.json())
                    .then((json) => {
                        this.setState({
                            Trenerzy: json
                        });
                    })
                break;
            case 3:
                fetch(
                    "http://localhost:5000/TrenerzySilownia3")
                    .then((res) => res.json())
                    .then((json) => {
                        this.setState({
                            Trenerzy: json
                        });
                    })
                break;
        }
    }

    read_souna(miasto, numer) {
        console.log("Numer: " + numer)
        if (miasto === "krakow") {
            if (numer === 1) {
                return (
                    <>
                        &#129397;
                    </>
                );
            }
        } else if (miasto === "warszawa") {
            if (numer === 1) {
                return (
                    <>
                        &#129397;
                    </>
                );
            }
        }
    }

    render() {
        return (
            <>
                <div className="navigation_bar">
                    <a className="active" href="/zalogowales_sie/glowna">Strona główna</a>
                    <a href="/zalogowales_sie/pakiety">Pakiety</a>
                    <a id="last" href="/zalogowales_sie/placowki">Placówki</a>
                    <a href="/">Wyloguj sie</a>
                </div>
                <br/>
                <div className="placowki_kontyner">
                    &#129397; - souna

                    <div className="Krakow">
                        Krakow
                        {this.state.PlacowkiKrakow.map(Placowka =>
                            <div className="placowka white">
                                {Placowka.SilowniaName}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                adres: {Placowka.SilowniaAdres}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {this.read_souna('krakow', Placowka.SilowniaSauna)}
                                <input className="guzik" type="button" value="Trenerzy"
                                       onClick={() => this.read_trenerzy(Placowka.idSilownia)}/>
                            </div>
                        )}

                    </div>
                    <div className="Warszawa">
                        Warszawa
                        {this.state.PlacowkiWarsaw.map(Placowka =>
                            <div className="placowka green">
                                {Placowka.SilowniaName}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                adres: {Placowka.SilowniaAdres}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {this.read_souna('warszawa', Placowka.SilowniaSauna)}
                                <input className="guzik" type="button" value="Trenerzy"
                                       onClick={() => this.read_trenerzy(Placowka.idSilownia)}/>
                            </div>
                        )}
                    </div>
                </div>
                {this.state.Trenerzy.map(Trenerzy =>
                    <label>{Trenerzy.NameTrenerzy} <br></br></label>
                )}
            </>


        );
    }
}