import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./dashboard";
import About from "./about";
import Services from "./services";
import MovieList from "./movieList";
import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";

function Routing() {

  return (
   <>
    <Header/>
   <BrowserRouter>
   <div style={{display: "flex"}}>
   <Navbar/>
      <Routes>
        <Route exact path="/" element={<Dashboard />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/services" element={<Services />}/>
        <Route exact path="/movielist" element={<MovieList />}/>
      </Routes>
      </div>
    </BrowserRouter>
    <Footer/>
   </>
  )
}

export default Routing