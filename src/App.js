import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';
import SmartContract from './components/SmartContract';
import Buycrps from './components/Buycrps';
import Whitepaper from './components/Whitepaper';





const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<About/>}/>
         <Route path='/howtobuy' element={<HowToBuy/>}/>
          <Route path='/tokenomics' element={<Tokenomics/>}/>
           <Route path='/contract' element={<SmartContract/>}/>
            <Route path='/buycrps' element={<Buycrps/>}/>
             <Route path='/whitepaper' element={<Whitepaper/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
