import React from "react"
import './App.css';
import NavBar from "./NavBar"
import About from "./About"
import Awards from "./Awards"
import Education from "./Education"
import Projects from "./Projects"
import Interests from "./Interests"
import Skills from "./Skills"
const App = () => (
    <div>
        <NavBar/>
        <About/> {/* <Projects/> */}
        <Education/>
        <Skills/>
        <Interests/>
        <Awards/>


    </div>

);

export default App;
