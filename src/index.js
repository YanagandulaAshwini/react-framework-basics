import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Header from './jsxcomponents/header';
import Footer from './jsxcomponents/footer';
import ProductList from './jsxcomponents/productlist';
import ClassComponent from './jsxcomponents/clscomponent';
import Users from './jsxcomponents/users';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    {/* <ProductList/> */}
   
    <Users/>
     
    
    {/* <ClassComponent name="legato"/> */}
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
