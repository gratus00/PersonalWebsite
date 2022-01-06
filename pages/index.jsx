import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Background from "./Background";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contacts";
import homeStyle from "../styles/home.module.css";
import Head from "next/head";

const home = () => {
    return <div id="index-section">
            <div>
            <Head>
                <title>Shakir Abdullayev</title>
            </Head>
            </div>
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