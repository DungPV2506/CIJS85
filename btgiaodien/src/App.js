import logo from './logo.svg';
import React from 'react';
import {BrowserRouter, Router, Link} from 'react-router-dom';
import './App.css';
import Nav from './Navaigation/Navigation';
import Head from './Header/Head';
import Footer from './Footer/Footer';
// import About from './Page/About';
import Post from './Page/Post';
import Contact from './Page/Contact';


const App = () => {
  return (
    <BrowserRouter>
         <div>
          {/* <Nav />
          <Head />
          <Footer/> */}
          <Router>
            <Route path='/' element = {<About />} />
          </Router>
        </div> 
    </BrowserRouter>
 
  )
};

export default App;
