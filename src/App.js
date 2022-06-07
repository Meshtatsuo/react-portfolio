import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
// css files
import "./App.css";
import ContactComplete from "./components/Contact-Complete";

function App() {
  // Nav props
  const [pages] = useState([
    {
      name: "ABOUT",
      description: "About me, link to my resume",
    },
    {
      name: "PORTFOLIO",
      description: "A collection of my development work.",
    },
    {
      name: "CONTACT",
      description: "Get in touch!",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  // Showcase item or items
  const [showcase_items] = useState([
    {
      title: "Fixture",
      description: "A digital sales platform for creators",
      tech: "MERN | AWS",
      link: "https://peaceful-fjord-92696.herokuapp.com/",
      img: `${require("./assets/portfolio-items/fixture.png")}`,
      alt: "photo reviewer thumbnail",
    },
  ]);
  // Portfolio Pieces
  const [portfolio_items] = useState([
    {
      title: "National Park Catalog",
      description: "A web application for sharing photos with clients.",
      tech: "React | Express | Axios",
      link: "https://github.com/Meshtatsuo/national-park-catalog",
      img: `${require("./assets/portfolio-items/national-park.png")}`,
      alt: "national park catalog thumbnail",
    },
    {
      title: "Photo Reviewer",
      description: "A web application for sharing photos with clients.",
      tech: "NodeJS | ExpressJS | Sequelize | AWS",
      link: "https://github.com/Meshtatsuo/photo-reviewer",
      img: `${require("./assets/portfolio-items/PI_PhotoReviewer.png")}`,
      alt: "photo reviewer thumbnail",
    },
    {
      title: "Mental Health Check",
      description: "A website for personal mental health check ins!",
      tech: "HTML | CSS | JS",
      link: "https://nitrotap.github.io/mental-health-check/",
      img: `${require("./assets/portfolio-items/mental-health-check.png")}`,
      alt: "Mental Health Check Thumbnail",
    },
    {
      title: "Llama Player",
      description: "A cross platform music player!",
      tech: "NodeJS | Electron | HowlerJS",
      link: "https://github.com/Meshtatsuo/llamaPlayer",
      img: `${require("./assets/portfolio-items/llama-player.png")}`,
      alt: "Llama Player thumbnail",
    },
  ]);

  return (
    <div>
      <Router>
        <Header
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Header>
        <Hero />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Portfolio
                    portfolio_items={portfolio_items}
                    showcase_items={showcase_items}
                  ></Portfolio>
                  <About />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/portfolio"
              element={
                <Portfolio
                  portfolio_items={portfolio_items}
                  showcase_items={showcase_items}
                ></Portfolio>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-sent" element={<ContactComplete />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
