import React from 'react'
import './index.css';
import Header from './components/Header.js'
import About from './components/About.js'
import Home from './components/Home.js'
import NewList from './components/NewList.js'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/newlist" element={<NewList/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
