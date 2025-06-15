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
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <Header
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Header>
      {selectedTab === "Home" && <Hero></Hero>}
      {selectedTab === "Education" && <Education></Education>}
      {selectedTab === "Skills" && <Skills></Skills>}
      {selectedTab === "Experience" && <Experience></Experience>}
      {selectedTab === "Projects" && <Projects></Projects>}
    </>
  );
}

export default App;
