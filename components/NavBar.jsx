import styles from "../styles/navbar.module.css";
import {Link, animateScroll as scroll} from "react-scroll";



function NavBar(props) {
    return <nav className={styles.navbar}>

            <Link to={"index-section"} smooth={true} duration={1000} offset={-50}>
                SHAKIR ABDULLAYEV
            </Link>
            <div className={styles.mobile}></div>
            <Link to={"about-section"} smooth={true} duration={1500} offset={-50} className={styles.desktop}> About</Link>
            <Link to={"projects-section"} smooth={true} duration={1500} offset={-50} className={styles.desktop}> Projects</Link>
            <Link to={"contacts-section"} smooth={true} duration={1500} offset={-50}  className={styles.desktop}> Contacts</Link>    
        </nav>
};

export default NavBar;
    