import stylesAbout from "../styles/about.module.css";
import stylesButton from "../styles/button.module.css";
import Link from "react-scroll/modules/components/Link";


const About = () => {
    return (
        <div className={stylesAbout.about} id="about-section">
            <h1>About Me</h1>
        
            <p>
                My name is Shakir Abdullayev, and I&apos;m a computer science student at the University of Toronto.
                I am passionate about different areas of computer science, such as Software Engineering, Cyber-Security, and Distributed Systems.
                
                <br /> <br />
                I interned as a PEY Software Engineer at <a href="https://www.veeva.com/" target="_blank" rel="noreferrer">Veeva Systems</a> 
                
                <span/> from 2023 May to 2024 May where I worked on the Renditions Infrastructure Team which includes the support of all the underlying working and 
                deployment needs to provide scalable and highly performant Rendition services to Veeva&apos;s customers.

                <br /> <br />
                Previously I interned as a Devops Software Engineer at <a href="https://www.td.com/ca/en/personal-banking" target="_blank" rel="noreferrer">TD Bank</a>  on the Platforms and Technology Division. 

                {/* Throughout the last few years I have created or been part of projects in and out of school. These range from system design 
                coursework projects with a team of 4, to small Android applications, to web apps such as this one! */}

                <br /><br />

                My other hobbies include the gym, boxing, playing the electric guitar, film photography, hiking, and windsurfing. In fact if you want to see 
                more of my photography, you can check out this page right <a href="/Gallery" target="_blank" rel="noreferrer">here</a> 
                <br /><br />
                
            </p>
            <br/>
            <div style={{textAlign: "center"}}>
            <Link to={"contacts-section"} smooth={true} duration={1200} offset={-50}>
                <button className={stylesButton.customButton}>Contacts</button>
            </Link>
            </div>
        </div>
    );
};

export default About;