import Button from "../components/Button";
import styles from '../styles/about.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <h1>About Me</h1>
            <p>
                My name is Shakir Abdullayev, and I'm a third-year computer science student at the University of Toronto.
                I am passionate about different areas of computer science, such as Software Engineering, Cyber-Security, and 
                Machine Learning to name a few. I am still in the exploration phase of my journey when it comes to Computer Science,
                alas, I am not confining myself to any specific field. I am planning on spending my time as an undergrad figuring out which
                areas of CS I am most interested in. 

                <br /> <br />

                Throughout the last few years I have created or been part of projects in and out of school. These range from a system design 
                coursework project with a team of 4, to small Android applications such as a GeoLocation saver app, to web apps such as this one!

                <br /><br />

                I am currently seeking internships for Summer 2022. You can check out my projects, resume, and contacts below!

            </p> 
        </div>
    );
};

export default About;