import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <main className="background">
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App;
