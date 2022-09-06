import './App.css';
import React from 'react';
import MainPage from './MainPage';
import Fizz from './Fizz';
import Bazz from './Bazz';
import Buzz from './Buzz';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
      <Route path='/Fizz.js' element={<Fizz />}></Route>
      <Route path='/Buzz.js' element={<Buzz />}></Route>
      <Route path='/Bazz.js' element={<Bazz />}></Route>
    </Routes>
  );
}

export default App;
