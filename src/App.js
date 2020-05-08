import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";

import ResponsiveMenu from './Menu/ResponsiveMenu';
import Footer from './Footer/Footer';
import Home from './Pages/Home'
import Contact from './Pages/Contact/Contact'
import Music from './Pages/Music/Music'
import Shop from './Pages/Shop/Shop';

function App() {


  return (
    <div className="page-container">
      <div className="content-wrap">
      <ResponsiveMenu />
      

        <Route exact path="/" component={Home} />  
        <Route exact path="/contact" component={Contact} />  
        <Route exact path="/music" component={Music} />  
        
        <Route exact path="/shop" component={Shop} />  



       </div>
        <Footer />
     
    </div>
  );
}

export default App;
