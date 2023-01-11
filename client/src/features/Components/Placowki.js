import React from "react";
import './Placowki.css'
export class Placowki extends React.Component {
read_souna(miasto, numer){
    if(miasto==="krakow"){
        if(this.props.DataStorage.souna_krakow.at(numer)===1){
            return(
            <>
                &#129397;
            </>
            );
        }
    }
    else if(miasto==="warszawa"){
        if(this.props.DataStorage.souna_warszawa.at(numer)===1){
            return(
                <>
                    &#129397;
                </>
            );
        }
    }
}

    render() {
        return(
            <>
                <div className="navigation_bar">
                    <a className="active" href="/zalogowales_sie/uzytkownik" >Uzytkownik</a>
                    <a href="/zalogowales_sie/pakiety">Pakiety</a>
                    <a href="/zalogowales_sie/placowki">Placówki</a>
                </div>
                <br/>
                <div className="placowki_kontyner">
                    &#129397; - souna
                    <div className="Krakow">
                        Krakow
                        <div className="placowka white">
                            {this.props.DataStorage.placowki_krakow_nazwa.at(0)}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            adres: {this.props.DataStorage.placowki_krakow_ulica.at(0)}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {this.read_souna('krakow',0)}
                        </div>
                        <div className="placowka blue">
                            {this.props.DataStorage.placowki_krakow_nazwa.at(1)}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            adres: {this.props.DataStorage.placowki_krakow_ulica.at(1)}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {this.read_souna('krakow',1)}
                        </div>
                    </div>
                    <div className="Warszawa">
                        Warszawa
                        <div className="placowka green">
                            {this.props.DataStorage.placowki_warszawa_nazwa.at(0)}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            adres: {this.props.DataStorage.placowki_warszawa_ulica.at(0)}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {this.read_souna('warszawa',0)}
                        </div>
                        <div className="placowka yellow">
                            {this.props.DataStorage.placowki_warszawa_nazwa.at(1)}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            adres: {this.props.DataStorage.placowki_warszawa_ulica.at(1)}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {this.read_souna('warszawa',1)}
                        </div>
                    </div>
                </div>
            </>



        );
    }
}