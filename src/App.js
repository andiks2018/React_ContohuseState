import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Axios from './pages/Axios';
import Datasiswa from './pages/Datasiswa';
import HurufBesar from './pages/HurufBesar';
import Parsinta from './pages/Parsinta';

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Hello</h1>} />
      <Route path='/app' element={<Parsinta />} />
      <Route path='/axios' element={<Axios />} />
      <Route path='/data' element={<Datasiswa />} />
      <Route path='/huruf' element={<HurufBesar />} />
    </Routes>
  );
}

export default App;
