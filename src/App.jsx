import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import { useState } from "react";
import ProjectsList from "./Components/ProjectsList";
import Contact from "./Components/Contact";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const Projects_array = [
    {
      id: "1",
      title: "ToDo List",
      description:
        "ToDo List is created Using HTML, CSS and JS. A user can add, edit,mark or unmark and delete task in To Do list",
      link: "https://ahmedbilal019.github.io/To-Do-List/",
    },

    {
      id: "2",
      title: "Shoes Store",
      description:
        "This website is created using HTML, CSS and JS. Responsive UI make it eaay to use in Mobile as well as on large screens",
      link: "https://ahmedbilal019.github.io/Shoes-store-website/ ",
    },
    {
      id: "3",
      title: "Digital Clock",
      description:
        "created by using HTML, CSS and JS to show the exact time in digital format.",
      link: "https://ahmedbilal019.github.io/Digital-Clock/",
    },
    {
      id: "4",
      title: "Counter App",
      description:
        "App created using React. User can increment, decrement and reset counter value",
      link: "https://my-counter-app1.netlify.app",
    },
    {
      id: "5",
      title: "Calculator App",
      description:
        "This react app can perform basic math operations like addtion,subtraction, multiplication and division. ",
      link: "https://get-fast-calculations.netlify.app/ ",
    },
    {
      id: "6",
      title: "Social Post App",
      description:
        "React app styled with bootstrap, where user can add a post and view different posts.",
      link: "https://socialmediapostsapp.netlify.app/  ",
    },
  ];

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
      {selectedTab === "Projects" && (
        <ProjectsList Projects_array={Projects_array}></ProjectsList>
      )}
      {selectedTab === "Contact" && <Contact></Contact>}
    </>
  );
}

export default App;
