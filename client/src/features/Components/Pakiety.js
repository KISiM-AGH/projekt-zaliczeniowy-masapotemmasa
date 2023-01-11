import React from "react";
import './Pakiety.css'
export class Pakiety extends React.Component {


    render() {
        return (
            <>
            <div className="navigation_bar">
                <a className="active" href="/zalogowales_sie/uzytkownik" >Uzytkownik</a>
                <a href="/zalogowales_sie/pakiety">Pakiety</a>
                <a href="/zalogowales_sie/placowki">Placówki</a>

            </div>
                <br/>
                <div className="flex-container">

                    <div className="flex-child magenta">
                        {this.props.DataStorage.pakiet_nazwa.at(0)}
                        <br/><br/>
                        {this.props.DataStorage.opis.at(0)}
                    </div>

                    <div className="flex-child green">
                        {this.props.DataStorage.pakiet_nazwa.at(1)}
                        <br/><br/>
                        {this.props.DataStorage.opis.at(1)}
                    </div>

                    <div className="flex-child blue">
                        {this.props.DataStorage.pakiet_nazwa.at(2)}
                        <br/><br/>
                        {this.props.DataStorage.opis.at(2)}
                    </div>

                    <div className="flex-child pink">
                        {this.props.DataStorage.pakiet_nazwa.at(3)}
                        <br/><br/>
                        {this.props.DataStorage.opis.at(3)}
                    </div>

                    <div className="flex-child yellow">
                        {this.props.DataStorage.pakiet_nazwa.at(4)}
                        <br/><br/>
                        {this.props.DataStorage.opis.at(4)}
                    </div>
                    <div className="flex-child white">
                        {this.props.DataStorage.pakiet_nazwa.at(5)}
                        <br/><br/>
                        {this.props.DataStorage.opis.at(5)}

                    </div>
                </div>
            </>
        );
    }
}