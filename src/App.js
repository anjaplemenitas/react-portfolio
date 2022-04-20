import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Projects from ".//components/projects/Projects.js";
import "./app.css";

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App;
