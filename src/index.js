import ReactDom from 'react-dom'
import React from 'react'
import './index.css'
import Calculadora from './main/Calculator'


ReactDom.render(
  
  <div>
    <h1>Calculadora</h1>
    <Calculadora />
  </div>
  ,
    document.getElementById('root')
  );

  