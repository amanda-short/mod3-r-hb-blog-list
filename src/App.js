import React from 'react';
import './App.css';
import Header from './components/layout/Header/Header.js';
import Footer from './components/layout/Footer/Footer.js';
import Main from './components/Main/Main.js';

function App() {
  return (
    <section className="main">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
