import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Header from './Pages/Shard/Header'
// import Footer from './Pages/Shard/Footer'
import TabItem from './Pages/Portfolio/TabItem'

function App() {
  return (
    <div className="App bg-slate-50">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Portfolio />} />
        <Route path="about" element={<TabItem />} />
      </Routes>
      
      </BrowserRouter>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
