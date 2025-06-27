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
        "A simple task manager built with HTML, CSS, and JavaScript. Users can add, edit, mark/unmark, and delete tasks with ease.",
      link: "https://ahmedbilal019.github.io/To-Do-List/",
      image: "/ToDoList.PNG",
    },
    {
      id: "2",
      title: "Shoes Store",
      description:
        "Responsive e-commerce site built with HTML, CSS, and JS. Optimized for seamless use on both mobile and desktop.",
      link: "https://ahmedbilal019.github.io/Shoes-store-website/",
      image: "/ShoesStore.PNG",
    },
    {
      id: "3",
      title: "Digital Clock",
      description:
        "A digital clock built with HTML, CSS, and JavaScript. Displays the current time in a clean, easy-to-read format.",
      link: "https://ahmedbilal019.github.io/Digital-Clock/",
      image: "/Digital-clock.PNG",
    },
    {
      id: "4",
      title: "Counter App",
      description:
        "A React-based app that allows users to increment, decrement, and reset the counter value with a clean interface.",
      link: "https://my-counter-app1.netlify.app",
      image: "/CounterApp.PNG",
    },
    {
      id: "5",
      title: "Calculator App",
      description:
        "A calculator built with React. Supports basic math operations like addition, subtraction, multiplication, and division.",
      link: "https://get-fast-calculations.netlify.app/",
      image: "/calculator.PNG",
    },
    {
      id: "6",
      title: "Social Post App",
      description:
        "A mini social feed built with React and Bootstrap. Users can create and view posts in a simple, card-based layout.",
      link: "https://socialmediapostsapp.netlify.app/",
      image: "/socialPost.PNG",
    },
    {
      id: "7",
      title: "Weather App",
      description:
        "A React application that shows real-time weather updates based on the user’s searched location using API data.",
      link: "https://weatherchecking123.netlify.app/",
      image: "/WeatherApp.PNG",
    },
  ];

  return (
    <>
      <Header
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Header>

      {selectedTab === "Home" && (
        <Hero selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Hero>
      )}
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
