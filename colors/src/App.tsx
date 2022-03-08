import React from 'react';
import './App.css';
import Pallete from "./components/pallete/pallete"
import seedColor from "./seedColors"
import { generatePalette } from "./components/colorHelper"



function App() {
  console.log(generatePalette(seedColor))
  return (
    <div className="App">

      <Pallete colors={seedColor} />

    </div>
  );
}

export default App;
