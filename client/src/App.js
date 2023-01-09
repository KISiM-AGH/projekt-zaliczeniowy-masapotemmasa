
// noinspection JSUnresolvedReactComponent

import './App.css';
import {Logowanie} from "./features/Components/Logowanie";

import { Route, Routes} from "react-router-dom";
import {Zalogowales_sie} from "./features/Components/Zalogowales_sie";
import React from "react";




function App() {
    document.body.style.backgroundColor="aqua";

  return (

      <div className="App">
          <header id={"tytul"}>Na siłownie</header>

          <Routes>
              <Route path="/" element={<Logowanie/>}/>
              <Route path="/Zalogowales_sie" element={<Zalogowales_sie/>}/>
          </Routes>
      </div>


  );
}

export default App;
