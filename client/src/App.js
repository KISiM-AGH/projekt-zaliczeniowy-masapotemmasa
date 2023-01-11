
// noinspection JSUnresolvedReactComponent

import './App.css';
import {Logowanie} from "./features/Components/Logowanie";
import {observer} from "mobx-react";
import { Route, Routes} from "react-router-dom";
import {Zalogowales_sie} from "./features/Components/Zalogowales_sie";
import {Pakiety} from "./features/Components/Pakiety";
import React from "react";
import DataStorage from "./features/Components/DataStorage";
import {Placowki} from "./features/Components/Placowki";



function App() {
    document.body.style.backgroundColor="grey";

   let data = new DataStorage();
   data.email.push("jakub")
  return (

      <div className="App">
          <header id={"tytul"}>Na siłownie</header>

          <Routes>
              <Route path="/" element={<Logowanie  DataStorage = {data}/>  }/>
              <Route path="/zalogowales_sie/uzytkownik" element={<Zalogowales_sie DataStorage = {data} />}/>
              <Route path="/zalogowales_sie/pakiety" element={<Pakiety DataStorage = {data}/>}/>
              <Route path="/zalogowales_sie/placowki" element={<Placowki DataStorage = {data}/>}/>
          </Routes>
      </div>


  );
}

export default observer(App);
