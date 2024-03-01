import React, { useEffect, useRef } from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Fade } from 'react-awesome-reveal'; // Import Fade for animations
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Intro = () => {
    const introRef = useRef(null); // Reference to the intro section

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                    }
                });
            },
            {
                root: null, // indicates the viewport
                rootMargin: "0px",
                threshold: 0.1, // trigger the callback when the target is visible
            }
        );

        // Observe the intro section
        observer.observe(introRef.current);

        return () => observer.disconnect(); // Cleanup observer
    }, [introRef]);

    return (
        <section id="intro" ref={introRef}>
            {/* Wrap the content you want to animate with Fade component */}
            <Fade cascade damping={0.5} triggerOnce={false}> {/* Updated triggerOnce to false */}
                <div className="introContent fade-in-section">
                    <span className="hello">Hello, </span>
                    <span className="introText">
                        I'm <span className="introName">Joshua Lopez</span><br />
                        A Computer Science student at <br />
                        California State University, Fullerton
                    </span>
                    <p className="introPara">
                        I am actively seeking internships to apply my knowledge and skills in <br />
                        real-world scenarios while gaining valuable industry experience.
                    </p>
                    {/* Link to the contact section in the about.js file */}
                    <Link to="contact" smooth={true} duration={1000}>
                        <button className="contactBtn">Contact Me</button>
                    </Link>
                </div>
            </Fade>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
};

export default Intro;
