import NavBar from "../components/NavBar";
import Button from "../components/Button";
import styles from "../styles/home.module.css";
import Section from "../components/Section";
import About from "./About";
import Projects from "./Projects";
import Intro from "./Intro";
import Contacts from "./Contacts";


const home = () => {
    return <div className={styles.home}>
                <NavBar/>
                {/* sidebar */}
                <Intro/>
                <div>
                    <div className="spacer"/>
                    <About/>
                    <div className="spacer"/>
                    <Projects/>
                    <Contacts/>
                    {/*Footer*/}
                    
                </div>
            </div>
    ;
};

export default home;