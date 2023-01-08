
// noinspection JSUnresolvedReactComponent

import './App.css';
import {Logowanie} from "./features/Components/Logowanie";




function App() {
    document.body.style.backgroundColor="aqua";

  return (

    <div className="App">

        <header id={"tytul"}>Na siłownie</header>
        <Logowanie/>
    </div>
  );
}

export default App;
