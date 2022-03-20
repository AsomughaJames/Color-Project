import React from 'react';
import { Routes, Route, useParams } from "react-router-dom"
import './App.css';
import PalleteList from './components/palleteList/PalleteList';
import DisplayPalette from './components/palleteList/DisplayPalette';





function App() {


  const Bout = () => {
    let { id } = useParams();
    return id

  }





  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<PalleteList />} />
        <Route path={"/pallete/:id"} element={<DisplayPalette params={Bout} />} />

      </Routes>

    </div>
  );
}

export default App;
