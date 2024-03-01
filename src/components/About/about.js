import React, { useState } from "react";
import "./about.css";
import UIDesign from "../../assets/ui-design.png";
import FrameworkDesign from "../../assets/framework.png";
import Project1Thumbnail from "../../assets/project1-thumbnail.png";
import Project2Thumbnail from "../../assets/project2-thumbnail.png";
import GithubIcon from "../../assets/github.png";
import WorkIcon from "../../assets/work-icon.png";
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-scroll'; // Import Link from react-scroll

const About = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      thumbnail: Project1Thumbnail,
      title: "Divine Messenger",
      description:
        "Led the development and design of a transformative digital solution for a funeral home transportation service, focusing on streamlining their operational workflow and database management. Utilized FlutterFlow to create a user-friendly interface and firebase database architecture, meeting industry standards. Managed project timelines, app quality, and client satisfaction, while fostering a collaborative environment for ongoing innovation and enhancements.",
    },
    {
      thumbnail: Project2Thumbnail,
      title: "My Portfolio",
      description:
        "Created a professional portfolio website using React, JS, CSS, HTML, and JSX to showcase my technical skills and professional journey. The site features a responsive navigation bar that seamlessly directs visitors to different parts of my website. Each meticulously designed to provide an intuitive user experience and highlight my accomplishments and expertise.",
    },
  ];

  const workExperiences = [
    {
      title: "Project Lead at Wings of Angels Transportation Service",
      date: "August 2023 - Present",
      description: [
        "Contracted by a funeral home transportation service to develop a digital solution for revolutionizing their operational workflow and database management.",
        "Created the design and implementation of a user-centric interface, database architecture, and advanced functionalities, aligning with the industry's practices using FlutterFlow.",
        "Exemplified leadership in project management, overseeing the project deployment, ensuring adherence to timelines, quality standards, and client expectations.",
        "Facilitated team collaboration, leading meetings and strategic discussions for innovation and continuous improvements for the app's development.",
      ],
    },
    {
      title: "Freelance Developer",
      date: "Date Started - Present",
      description: [
        "Worked with clients to create custom websites tailored to their specific needs, including a customizable Valentine's Day digital card platform.",
        "Utilized HTML, CSS, and JavaScript to focus on personalized, interactive, and responsive design for enhanced user engagement.",
        "Developed and refined platforms based on client feedback, delivering digital greetings that exceeded expectations and highlighted the significance of personalized digital connections.",
      ],
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, message });
  };

  const changeProject = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentProjectIndex(newIndex);
      setIsAnimating(false);
    }, 500);
  };

  const nextProject = () => {
    const newIndex = (currentProjectIndex + 1) % projects.length;
    changeProject(newIndex);
  };

  const prevProject = () => {
    const newIndex =
      currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1;
    changeProject(newIndex);
  };
  const changeWork = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentWorkIndex(newIndex);
      setIsAnimating(false);
    }, 500);
  };

  const nextWork = () => {
    const newIndex = (currentWorkIndex + 1) % workExperiences.length;
    changeWork(newIndex);
  };

  const prevWork = () => {
    const newIndex = currentWorkIndex === 0 ? workExperiences.length - 1 : currentWorkIndex - 1;
    changeWork(newIndex);
  };

  return (
    <section
      id="about"
      onIntersection={([entry]) => setIsVisible(entry.isIntersecting)}
    >
      <Fade
        cascade
        triggerOnce={false}
        damping={0.5}
        visible={isVisible}
        onVisibilityChange={({ isVisible }) => setIsAnimating(isVisible)}
      >
        <div className="aboutSection">
          <span className="aboutTitle">About Me:</span>
          <span className="aboutDesc">
            Hello! I'm Joshua Lopez, a sophomore pursuing a Computer Science
            degree at California State University, Fullerton. My fascination
            with technology was sparked at a young age when I first held a
            Gameboy. The intricate workings behind its screen captivated me,
            and this curiosity blossomed into a lifelong passion for computers
            and technology. <br />
            <br /> My journey in the tech industry is now driven by a profound
            passion for employing technology to address real-world problems. I
            am now committed to honing my skills in programming, analytical
            problem-solving, and collaborative development. <br />
            <br /> Throughout my academic and professional journey, I have
            gained substantial experience in utilizing programming languages
            such as C++, Python, JavaScript, and HTML. Eager to expand my
            skillset further, I am excited about learning C# and Rust next,
            diving deeper into the realms of software development and system
            programming. This diverse technical skill set has allowed me to
            create and innovate relentlessly. <br />
            <br /> My entrepreneurial spirit led me to establish my startup,
            Divine Messenger. This venture stemmed from a contract with a
            funeral home transportation service, where I was tasked with
            devising a digital solution to revolutionize their operational
            workflow and database management. <br />
            <br /> My mission is to continue making impactful contributions to
            innovative projects and to forge meaningful connections with
            like-minded individuals in the tech industry! Thank you for taking
            the time to learn about my journey and my aspirations.
          </span>
          <div className="aboutBar">
            <img src={UIDesign} alt="UI Design" className="aboutBarImg" />
            <div className="aboutBarText">
              <h2>Programming Languages</h2>
              <p>
                I am proficient in C++, Python, JavaScript, and HTML and now aim
                to expand my skills into learning C# and Rust.
              </p>
            </div>
          </div>
          <div className="aboutBar">
            <img
              src={FrameworkDesign}
              alt="Framework Design"
              className="aboutBarImg"
            />
            <div className="aboutBarText">
              <h2>Frameworks and More</h2>
              <p>
                I am proficient in React, CSS, Tailwind CSS, Node.js, and JSX,
                coupled with substantial experience in Linux, Ubuntu, and VS
                Code. I'm eager to further broaden my technical toolkit by
                learning Django, Unity, and Unreal Engine.
              </p>
            </div>
          </div>
        </div>
      </Fade>

      <Fade
        cascade
        triggerOnce={false}
        damping={0.5}
        visible={isVisible}
        onVisibilityChange={({ isVisible }) => setIsAnimating(isVisible)}
      >
        <div className="projectsSection" id="projects">
          <span className="projectsTitle">My Projects:</span>
          <div className="sliderContainer">
            <button
              className="slideButton prev"
              onClick={prevProject}
              disabled={isAnimating}
            >
              &lt;
            </button>
            <div
              className="projectsWrapper"
              style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="project" key={index}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="projectImg"
                  />
                  <div className="projectText">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="slideButton next"
              onClick={nextProject}
              disabled={isAnimating}
            >
              &gt;
            </button>
          </div>
        </div>
      </Fade>

      <Fade
        cascade
        triggerOnce={false}
        damping={0.5}
        visible={isVisible}
        onVisibilityChange={({ isVisible }) => setIsAnimating(isVisible)}
      >
        <div className="githubSection">
          <a
            href="https://github.com/Joshua11l"
            target="_blank"
            rel="noopener noreferrer"
            className="githubLink"
          >
            <img src={GithubIcon} alt="GitHub" className="githubIcon" />
            <span>Check out my GitHub</span>
          </a>
        </div>
      </Fade>

      <Fade cascade triggerOnce={false} damping={0.5} onVisibilityChange={({ isVisible }) => setIsAnimating(isVisible)}>
        <div className="workExperienceSection" id="experience">
          <span className="workExperienceTitle">Work Experience:</span>
          <div className="sliderContainer">
            <button className="slideButton prev" onClick={prevWork} disabled={isAnimating}>&lt;</button>
            <div className="workExperienceWrapper" style={{ transform: `translateX(-${currentWorkIndex * 100}%)` }}>
              {workExperiences.map((experience, index) => (
                <div className="workExperienceContent" key={index}>
                  <div className="workDescription">
                    <h3>{experience.title}</h3>
                    <p>{experience.date}</p>
                    <ul>
                      {experience.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <button className="slideButton next" onClick={nextWork} disabled={isAnimating}>&gt;</button>
          </div>
        </div>
      </Fade>

      <Fade
        cascade
        triggerOnce={false}
        damping={0.5}
        visible={isVisible}
        onVisibilityChange={({ isVisible }) => setIsAnimating(isVisible)}
      >
        <div className="contactSection" id="contact">
          <div className="contactContent">
            <div className="contactText">
              <h2 className="contactSectionTitle">Contact Me</h2>
              <p className="contactDescription">Get in touch -&gt;</p>
            </div>
            <form className="contactForm" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="contactInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="contactInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Message"
                className="contactTextarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <div className="submitContainer">
                {/* Link to the intro section */}
                <Link to="intro" smooth={true} duration={1000}>
                  <button type="submit" className="contactButton">
                    Send
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
