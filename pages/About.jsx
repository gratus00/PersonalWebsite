import Button from "../components/Button";
import stylesAbout from '../styles/about.module.css';
import stylesButton from '../styles/button.module.css';
import Link from "react-scroll/modules/components/Link";
import Contacts from "./Contacts";

const About = () => {
    return (
        <div className={stylesAbout.about} id="about-section">
            <h1>About Me</h1>
            <p>
                My name is Shakir Abdullayev, and I'm a third-year computer science student at the University of Toronto.
                I am passionate about different areas of computer science, such as Software Engineering, Cyber-Security, and 
                Machine Learning to name a few. I am still in the exploration phase of my journey when it comes to Computer Science,
                alas, I am not confining myself to any specific field. I am planning on spending my time as an undergrad figuring out which
                areas of CS I am most interested in. 

                <br /> <br />

                Throughout the last few years I have created or been part of projects in and out of school. These range from system design 
                coursework projects with a team of 4, to small Android applications, to web apps such as this one!

                <br /><br />

                I am currently seeking internships for Summer 2022. You can check out my projects, resume, and contacts below!
            </p>
            <br/>
            <div style={{textAlign: "center"}}>
            <Link to={"contacts-section"} smooth={true} duration={1000} offset={-50}>
                <button className={stylesButton.customButton}>Contacts</button>
            </Link>
            </div>
            
        </div>
    );
};

export default About;