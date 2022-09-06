import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
function MainPage() {
  return (
    <div>
      <Header title='Main Page'/>
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default MainPage;