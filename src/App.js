import React from 'react';
import './style.css';
import Header from './modules/Header';
import Main from './modules/Main';
import Features from './modules/Features';
import Contact from './modules/Contact';
import Footer from './modules/Footer';


const img1 = {
  backgroundImage: `url(./images/1.svg)`
}

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Features style={img1}/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
