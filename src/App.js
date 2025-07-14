import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './Hero.css';
import './About.css';
import './Experience.css';
import './Projects.css';
import './Contact.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <img
          src="/assets/profile.JPG"
          alt="Khushboo Agrawal"
          className="profile-img"
        />
      </div>
      <div className="hero-right">
        <h1>Hello, I'm <span className="highlight">Khushboo Agrawal</span></h1>
        <div className="cta-buttons">
          <a href="https://github.com/KhushbooAgrawal190803/SDE2026.pdf" target="_blank" rel="noreferrer" className="btn">Resume</a>
          <a href="#contact" className="btn outline">Contact Info</a>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/khushboo-agrawal-7b3b10265/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/KhushbooAgrawal190803" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-left">
          <img src="/assets/profile.png" alt="Profile" className="about-img" />
        </div>
        <div className="about-right">
          <div className="education-card">
            <h3>New York University – Stern School of Business</h3>
            <p>B.Sc. in Computer Science & Business, Technology and Entrepreneurship</p>
            <p className="duration">Aug 2022 – May 2026</p>
          </div>
          <p className="about-text">
            I’ve built dashboards, automated financial reports, and developed real-time apps — but what truly excites me is the journey of turning scrappy ideas into something real.
            <br /><br />
            Outside of code and coursework, I’m a certified chocolate connoisseur, a soon-to-be skydiver, and currently learning how to build my dream PC piece by piece. Someday, I hope to launch a startup that blends technology with purpose.
            <br /><br />
            I believe in building things that matter — and having fun while doing it.
          </p>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        <div className="experience-left">
          <div className="card">
            <h3>Programming Languages</h3>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>C</li>
              <li>SQL</li>
            </ul>
            <h3>Frameworks & Tools</h3>
            <ul>
              <li>Flutter</li>
              <li>Firebase</li>
              <li>Git</li>
              <li>Streamlit</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
        <div className="experience-right">
          <div className="card">
            <h3>Industry Experience</h3>
            <ul>
              <li><strong>EssilorLuxottica</strong> – Commercial Sales Data Intern (May–Jul 2025)</li>
              <li><strong>Deloitte</strong> – Audit Automation Intern (May–Aug 2024)</li>
              <li><strong>RadiusVC</strong> – Venture Capital Intern (Oct 2023–Apr 2024)</li>
              <li><strong>Settlin.in</strong> – Software Engineering Intern (Aug–Oct 2023)</li>
              <li><strong>NYU</strong> – Teaching Assistant, Projects in Programming (Fall 2025)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src="/assets/nyc-spot.png" alt="Find the Perfect NYC Spot" className="project-img" />
          <h3>Find the Perfect NYC Spot</h3>
          <a href="https://github.com/KhushbooAgrawal190803/Find-the-Perfect-NYC-Spot-" target="_blank" rel="noreferrer" className="btn">GitHub</a>
        </div>
        <div className="project-card">
          <img src="/assets/stock-sentiment.png" alt="Stock Sentiment Analyzer" className="project-img" />
          <h3>Stock Sentiment Analyzer</h3>
          <a href="https://github.com/KhushbooAgrawal190803/MoodMarkets" target="_blank" rel="noreferrer" className="btn">GitHub</a>
        </div>
        <div className="project-card">
          <img src="/assets/banking-system.png" alt="Banking Management System" className="project-img" />
          <h3>Banking Management System</h3>
          <a href="https://github.com/KhushbooAgrawal190803/Banking-Management-System" target="_blank" rel="noreferrer" className="btn">GitHub</a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-card">
        <a href="mailto:ka2859@stern.nyu.edu" className="contact-link">
          <i className="fas fa-envelope"></i> ka2859@stern.nyu.edu
        </a>
        <a href="https://www.linkedin.com/in/khushboo-agrawal-7b3b10265/" target="_blank" rel="noreferrer" className="contact-link">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
