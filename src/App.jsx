import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import { useState } from "react";
function App() {
  
  return (
    <>
      <Header
       
      ></Header>
      <Hero></Hero>
      <Education></Education>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
    </>
  );
}

export default App;
