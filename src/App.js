import React,{ Component } from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Showtable from "./components/Showtable";
import Edit from "./components/Edit";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Notfound from "./components/Notfound";
import { Route, Routes } from "react-router-dom";
export default class App extends Component{
    render = ()=>{
        return(
            <>
            <Header/>
            
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/showtable" element={<Showtable/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/edit" element={<Edit/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="*" element={<Notfound/>}/>
           </Routes>
            </>
        )
    }
}