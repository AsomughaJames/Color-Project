import React from 'react';
import './App.css';
import Pallete from "./components/pallete/pallete"
import seedColor from "./seedColors"
import { GeneratePalette } from "./components/colorHelper"




function App() {
  return (
    <div className="App">

      <Pallete pallete={GeneratePalette(seedColor[3])} />

    </div>
  );
}

export default App;
