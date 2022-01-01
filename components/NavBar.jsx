import styles from "../styles/navbar.module.css";
import {Link, animateScroll as scroll} from "react-scroll";



function NavBar(props) {
    return <nav className={styles.navbar}>

            <Link to={"index-section"} smooth={true} duration={1000} offset={-50}>
                <a className={styles.logoLink}>SHAKIR ABDULLAYEV</a>
            </Link>
            <Link to={"index-section"} smooth={true} duration={2000} offset={-50} className="desktop"> Home</Link>
            <Link to={"about-section"} smooth={true} duration={2000} offset={-50} className="desktop"> About</Link>
            <Link to={"projects-section"} smooth={true} duration={2000} offset={-50} className="desktop"> Projects</Link>
            <Link to={"contacts-section"} smooth={true} duration={2000} offset={-50} className="desktop"> Contacts</Link>    
        </nav>
};

export default NavBar;


// const NavBar = () => {
//     return (
//         <nav className={styles.navbar}>
//             <Link href="/" passHref>
//                 <a className={styles.logoLink}>SHAKIR ABDULLAYEV</a>
//             </Link>
            
//             <Link to={"index-section"} smooth={true} duration={1000} offset={-50} className="desktop">Home</Link>
//             <Link to={"about-section"} smooth={true} duration={1000} offset={-50} className="desktop">About</Link>
//             <Link to={"projects-section"} smooth={true} duration={1000} offset={-50} className="desktop">Projects</Link>
//             <Link to={"contacts-section"} smooth={true} duration={1000} offset={-50} className="desktop">Contacts</Link>
//         </nav>
//         );
//     };
    