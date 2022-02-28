import React from 'react';
import './App.css';
import Pallete from "./components/pallete/pallete"
import seedColor from "./seedColors"



function App() {
  return (
    <div className="App">

      <Pallete colors={seedColor} />

    </div>
  );
}

export default App;
