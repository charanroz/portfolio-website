import React from 'react';

function About() {
    return (
        <section id="about">
            <h2>About Me</h2>

            <div className="about-container">

                <div className="about-left">

                    <h3>Technical Skills</h3>
                    <ul className="skills">
                        <li>Java</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Spring Boot</li>
                    </ul>

                    <h3>Creative Skills</h3>
                    <ul className="skills">
                        <li>Houdini FX</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Primere pro</li>
                    </ul>

                </div>

                <div className="about-right">
                    <p>
                        I am a Java Developer with a strong interest in software
                        development and problem solving.
                        <br /><br />
                        I have experience with Java and web technologies such as
                        HTML, CSS, and JavaScript, and I am currently learning
                        React and Spring Boot to expand my skills toward
                        full-stack development.
                        <br /><br />
                        Along with programming, I am passionate about visual
                        effects, photography, and video editing, where I combine
                        creativity and technology to create engaging digital
                        experiences.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default About;