import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
function Fizz() {
  return (
    <div>
      <Header title='Fizz'/>
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default Fizz;