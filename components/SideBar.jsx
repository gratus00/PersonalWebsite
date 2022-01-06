import styles from "../styles/sidebar.module.css";
import {Link, animateScroll as scroll} from "react-scroll";
import React, {useState} from "react";
import Image from "next/image";
// import {Link as Direct} from "react-router-dom";


function SideBar(props){
    const [xPosition, setX] = useState(100);
    const [scrollLock, setScrollLock] = useState("visible")

    function triggerSidebar(){
        setX(xPosition === 100 ? 0:100);
        setScrollLock(scrollLock === "visible"? "hidden":"visible")
    }

    return <div className={styles.sidebar}>
        <button className={styles["sidebar-button"]} onClick={triggerSidebar}> 
                <Image src={"/Menu.png"} alt="menu"  width={24} height={24}/>
        </button>
        <div className={styles.menu}
        style={{transform: `translatex(${xPosition}vw)`}}> 
            <Link to={"index-section"} smooth={true} duration={1500} offset={-50}  className={styles.desktop} onClick={triggerSidebar}> Home</Link>
            <Link to={"about-section"} smooth={true} duration={1500} offset={-50}  className={styles.desktop} onClick={triggerSidebar}> About</Link>
            <Link to={"projects-section"} smooth={true} duration={1500} offset={-50}  className={styles.desktop} onClick={triggerSidebar}> Projects</Link>
            <Link to={"contacts-section"} smooth={true} duration={1500} offset={-50}  className={styles.desktop} onClick={triggerSidebar}> Contacts</Link>    
        </div>
    </div>
}


export default SideBar;