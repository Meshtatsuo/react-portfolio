import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

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
      title: "Photo Reviewer",
      description: "A web application for sharing photos with clients.",
      tech: "NodeJS | ExpressJS | Sequelize | AWS",
      link: "https://fomo-photo-reviewer.herokuapp.com/",
      img: `${require("./assets/portfolio-items/PI_PhotoReviewer.jpg")}`,
      alt: "photo reviewer thumbnail",
    },
  ]);
  // Portfolio Pieces
  const [portfolio_items] = useState([
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
    {
      title: "The Medician Blog",
      description:
        "A fictional blog site built around a post noir audio drama world.",
      tech: "NodeJS | MySQL | ExpressJS",
      link: "https://medician-blog.herokuapp.com/",
      img: `${require("./assets/portfolio-items/medician-blog.png")}`,
      alt: "Medician Blog Thumbnail",
    },
    {
      title: "THX Deep Note",
      description:
        "Recreation of the THX deep note generated in real time using Unreal Engine 5.",
      tech: "Unreal Engine 5",
      link: "https://vimeo.com/662102223",
      img: `${require("./assets/portfolio-items/thx-ue5.png")}`,
      alt: "THX Deep Note Thumbnail",
    },
  ]);

  return (
    <div>
      <Header
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Header>
      <main>
        {currentPage === pages[0] && (
          <>
            <Hero></Hero>
            <Portfolio
              portfolio_items={portfolio_items}
              showcase_items={showcase_items}
            ></Portfolio>
            <About />
          </>
        )}
        {currentPage === "HOME" && (
          <>
            <Hero></Hero>
            <Portfolio
              portfolio_items={portfolio_items}
              showcase_items={showcase_items}
            ></Portfolio>
            <About />
          </>
        )}
        {currentPage === "ABOUT" && <About />}
        {currentPage === "PORTFOLIO" && (
          <Portfolio
            portfolio_items={portfolio_items}
            showcase_items={showcase_items}
          ></Portfolio>
        )}
        {currentPage === "CONTACT" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
