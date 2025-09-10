import { useState } from 'react'
import './App.css'
import Home from './component/Home'
import Welcome from './component/Welcome'
import Payment from './component/Payment'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Payment' element={<Payment/>}/>
      </Routes>
    </Router>
  );
}

export default App
