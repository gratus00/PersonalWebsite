import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import homeStyle from "../styles/home.module.css";
import About from "./About";
import Projects from "./Projects";
import Intro from "./Intro";
import Contacts from "./Contacts";


const home = () => {
    return <div id="index-section">
                <NavBar/>
                <SideBar/>
                <Intro/>
                <div  className={homeStyle.home}>
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