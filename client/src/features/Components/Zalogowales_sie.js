import React from "react";
import './Zalogowales_sie.css'
import {data} from "./Logowanie";


export class Zalogowales_sie extends React.Component {
    componentDidMount() {
    this.setState({value1: data.email.at(0)});

    }
constructor() {
    super();
    this.state = {value1: ''};
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
               <div id={"opis"}>
                   <h1>Na siłownie</h1>
                   "Na siłownie" to sieć siłownie posiadające swoje placówki w dwóch najwięksych polskich miastach,
                   zapewniająca profesjonalizm usług, odpowiedni sprzęt dla wszytskich fanów sportów siłowych
                   (omijając crossfitowców bo oni nie są sportowcami). Poza sprzętem zapewniamy infrastrukturę
                   gwarantująca przyjemny odpoczynek i regeneracja, a w naszych barach znajdzie się wszytsko dla osób
                   na masie i dla osób na masie. &#128170; &#128170; &#128170;
               </div>

            </>
        );

    }
}
