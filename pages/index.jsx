import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Background from "./Background";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contacts";
import homeStyle from "../styles/home.module.css";

const home = () => {
    return <div id="index-section">
                <NavBar/>
                <SideBar/>
                <Background/>
                <Intro/>
                <div  className={homeStyle.home}>
                    <About/>
                    <Projects/>
                    <Contacts/>  
                    {/*Footer*/}
                </div>
                                         
            </div>
    ;
};

export default home;