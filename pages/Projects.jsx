import styles from "../styles/projects.module.css";
import {newLink, animateScroll as scroll } from "react-scroll";
import Section from "../components/Section";
import dummyText from "../components/DummyText";


const Projects = () => {
    return (
        <div className="styles.projects">
            <Section
                title="Section 1"
                subtitle={dummyText}
                id="section1"
            />
            <Section
                title="Section 2"
                subtitle={dummyText}
                
                id="section2"
            />
            <Section
                title="Section 3"
                subtitle={dummyText}
                
                id="section3"
            />
            <Section
                title="Section 4"
                subtitle={dummyText}
                
                id="section4"
            />
            <Section
                title="Section 5"
                subtitle={dummyText}
                
                id="section5"
            />
        </div>
    );
};

export default Projects;