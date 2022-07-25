import React from 'react'
import ReactDOM from 'react-dom/client'

import "normalize.css"
import './index.css'
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <>
    <Header />
    <Main />
    <Footer />
  </>

);
