
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import React, { useState } from 'react';
import "./App.css";



function App() {
  const [k, setk] = useState(false);
  const handdle = k1 => {
    setk(k1);


  }
  return (
    <div className="app">
      <Navbar change={handdle} />
      <Slider onchange={k} />
    </div>
  );
}


export default App;
