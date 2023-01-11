import React from "react";
import './Zalogowales_sie.css'


export class Zalogowales_sie extends React.Component {
constructor(props) {
    super(props);


    this.state = {value1: this.mapData()};

}
mapData(){

   return this.props.DataStorage.email.values();

}

    render() {

        return (
            <>
                <div className="navigation_bar">

                    <a className="active" href="/zalogowales_sie/uzytkownik">Uzytkownik</a>
                    <a href="/zalogowales_sie/pakiety">Pakiety</a>
                    <a href="/zalogowales_sie/placowki">Placówki</a>


                </div>
                <div>
                <label id={"imie"}> Imie: jan </label><br/>

                <label id={"nazwisko"}>Nazwisko: </label><br/>
                <label id={"data_urodzenia"}>Data urodzenia:</label><br/>
                </div>

            </>
        );

    }
}
