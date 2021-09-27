import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';
import Contenedor from './Contenedor';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('Header')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('Footer')
)

ReactDOM.render(
  <Contenedor />,
  document.getElementById('Contenedor')
)
reportWebVitals();


/*
ReactDOM.render(
  <React.StrictMode>
    <NuevoElemento tipodocumento="CC" ndocumento="10002785" />
  </React.StrictMode>,
  document.getElementById('root')
);*/


