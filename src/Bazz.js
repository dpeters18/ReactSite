import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
function Bazz() {
  return (
    <div>
      <Header title='Bazz'/>
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default Bazz;