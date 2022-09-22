// you need to install react-router-dom to start this program
import React from "react";
import "./App.css";
import {
 BrowserRouter as Router,
 Routes,
   Route }
  from 'react-router-dom';
  // Import All files
import Home from "./components/home/Home"
import About from "./components/About/About";
import List from "./components/List";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
   <>
    <Router>
      {/* Add navbar */}
      <Navbar/>
    <Routes>
      Add Home Page
      <Route exact path="/" element={<Home/>}/>
      {/* Add About page */}
      <Route exact path="/About" element={<About/>}/>
      {/* Add libarary page */}
      <Route exact path="/List" element={<List/>}/>

    </Routes>
    {/* Footer Page */}
    <Footer />
  </Router>

        </>
  );
}

export default App;
