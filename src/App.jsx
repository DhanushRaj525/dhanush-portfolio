
import './App.css'
import { useEffect, useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  const elements = document.querySelectorAll(".section");

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);
  return (
    <div className="portfolio">

      {/* Navigation Bar */}

<nav className="navbar">
  <div className="logo">Portfolio</div>

  <button
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation menu"
    aria-expanded={menuOpen}
  >
    {menuOpen ? "✕" : "☰"}
  </button>

  <div className={`nav-links ${menuOpen ? "active" : ""}`}>
    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
    <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </div>
</nav>


      {/* Hero Section */}
      <section id="home" className="hero section">

        <p className="intro">HELLO, I'M</p>

        <h1>
          Dhanush <span>Raj</span>
        </h1>

        <h2 className="subtle">
          CSE (AI & ML) Student
        </h2>

        <p className="description">
          Aspiring Software Developer passionate about
          technology, programming and building innovative solutions.
        </p>

        <div className="buttons">
  <a href="#projects" className="hero-btn">
    View Projects
  </a>

  <a href="#contact" className="hero-btn contact-btn">
    Contact Me
  </a>
</div>

      </section>

{/* About Section */}

<section className="about section" id="about">

  <p className="section-tag">GET TO KNOW ME</p>

  <h2>About <span>Me</span></h2>

  <p className="about-text">
    Hello! I'm Dhanush Raj, a first-year Computer Science
    Engineering student specializing in Artificial
    Intelligence and Machine Learning at Vel Tech High Tech.

    I'm passionate about programming, problem-solving
    and exploring modern technologies. Currently,
    I'm developing my skills in Python, HTML, CSS,
    JavaScript and React.

    My goal is to become a skilled software developer
    and build innovative solutions that make a difference.
  </p>

  <div className="about-stats">

    <div className="stat">
      <h3>01</h3>
      <p>First Year Student</p>
    </div>

    <div className="stat">
      <h3>CSE</h3>
      <p>AI & ML</p>
    </div>

    <div className="stat">
      <h3>2026</h3>
      <p>Started My Journey</p>
    </div>

  </div>

</section>

{/* Skills Section */}

<section className="skills section" id="skills">

  <p className="section-tag">MY TECHNICAL EXPERTISE</p>

  <h2>My <span>Skills</span></h2>

    <p className="skills-description">
    Technologies I'm learning and using to build
    my development journey.
  </p>

  <div className="skills-container">

    <div className="skill-card">
      <h3>01</h3>
      <h4>HTML5</h4>
      <p>Web Structure</p>
    </div>

    <div className="skill-card">
      <h3>02</h3>
      <h4>CSS3</h4>
      <p>Web Styling</p>
    </div>

    <div className="skill-card">
      <h3>03</h3>
      <h4>JavaScript</h4>
      <p>Programming</p>
    </div>

    <div className="skill-card">
      <h3>04</h3>
      <h4>React</h4>
      <p>Frontend Development</p>
    </div>

    <div className="skill-card">
      <h3>05</h3>
      <h4>Python</h4>
      <p>Programming Basics</p>
    </div>

    <div className="skill-card">
      <h3>06</h3>
      <h4>Git & GitHub</h4>
      <p>Version Control</p>
    </div>

  </div>

</section>

{/* Projects Section */}

<section className="projects section" id="projects">

  <p className="section-tag">MY WORK</p>

  <h2>Featured <span>Projects</span></h2>

  <p className="projects-description">
    Here are some projects that showcase my
    learning and development journey.
  </p>

  <div className="projects-container">

    <div className="project-card">

      <div className="project-number">PROJECT 01</div>

      <h3>LIFE LINK</h3>

      <h4>Smart Blood Bank Management Platform</h4>

      <p>
        LIFE LINK is a blood bank management platform
        designed to connect blood donors with people
        in need during medical emergencies.
        It aims to make blood availability and
        donor coordination easier.
      </p>

      <div className="tech-stack">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Python</span>
      </div>

      <button className="project-btn">
        Project Preview ↗
      </button>

    </div>

    <div className="project-card coming-soon">

      <div className="project-number">PROJECT 02</div>

      <h3>Coming Soon</h3>

      <p>
        More innovative projects are currently
        in development. Stay tuned!
      </p>

      <span className="coming-label">
        IN DEVELOPMENT
      </span>

    </div>

  </div>

</section>

{/* Education Section */}

<section className="education section" id="education">

  <p className="section-tag">MY ACADEMIC JOURNEY</p>

  <h2>My <span>Education</span></h2>

  <div className="education-container">

    <div className="education-card">

      <div className="education-year">
        2026 – 2030
      </div>

      <h3>Bachelor of Engineering</h3>

      <h4>Computer Science Engineering</h4>

      <p className="education-specialization">
        Artificial Intelligence & Machine Learning
      </p>

      <p className="college-name">
        Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala
        Engineering College
      </p>

      <span className="education-status">
        CURRENTLY PURSUING
      </span>

    </div>

    <div className="education-card">

      <div className="education-year">
        2024 – 2026
      </div>

      <h3>Higher Secondary Education</h3>

      <h4>Class XII</h4>

      <p className="education-specialization">
        Bio-Maths Stream
      </p>

      <p className="college-name">
        St.Joseph Matric And Higher Secondary School
      </p>

      <span className="education-status">
        COMPLETED
      </span>

    </div>

  </div>

</section>
{/* Contact Section */}

<section className="contact section" id="contact">

  <p className="section-tag">LET'S CONNECT</p>

  <h2 className="section-title">
    Get In <span>Touch</span>
  </h2>

  <p className="contact-text">
    I'm always interested in learning, building projects,
    and connecting with people in technology.
    Feel free to reach out!
  </p>

  <div className="contact-container">

  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=dhanushraj1203@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="contact-card"
>
  <h3>Email</h3>
  <p>Let's connect through email</p>
  <span>Send Email ↗</span>
</a>

    <a
      href="https://github.com/your-username"
      target="_blank"
      rel="noreferrer"
      className="contact-card"
    >
      <h3>GitHub</h3>
      <p>Explore my coding projects</p>
      <span>Visit GitHub ↗</span>
    </a>

    <a
      href="https://linkedin.com/in/your-username"
      target="_blank"
      rel="noreferrer"
      className="contact-card"
    >
      <h3>LinkedIn</h3>
      <p>Connect with me professionally</p>
      <span>Visit LinkedIn ↗</span>
    </a>

  </div>

</section>


{/* Footer */}
<footer className="footer">
  <h3>Portfolio<span></span></h3>
  <p>Building my journey in technology, one project at a time.</p>
  <p className="copyright">
    © 2026 Dhanush Raj. All rights reserved.
  </p>
  <a href="#home" className="back-to-top">
    ↑ Back to Top
  </a>
</footer>

    </div>
  )
}

export default App
