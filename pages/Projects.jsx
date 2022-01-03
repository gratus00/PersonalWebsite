import styles from "../styles/projects.module.css";
import {newLink, animateScroll as scroll } from "react-scroll";


const Projects = () => {
    return (
        <div className={styles.project} id="projects-section">
            <h1>Projects</h1>
            <div>
                <h2>Section 1</h2>
                <p>bLABfgsljkdhgldkjhgsdklghsdkljghsdklhgsdkghsdksdfghsdghsdjsjagjjfgjfjfj
                    sdflkgjsdhklsjhglksdghsdfkjgsdlgjhsdlkgsdhlgksh
                    dsfgksdhglsdkjghdslkghsdlkjghsdlkgjhsasklghsdfklghsdflkjghsdkjghsdlkfjhgsdfkjgdlkhgsfdkljhgfadlkjghdlk
                    sklfdjghsfdkjhgakldjghdlkghsdkgh;aLA</p>
            </div>
            <div>
                <h2>Section 2</h2>
                <p>blabla</p>
            </div>
            <div>
                <h2>Section 3</h2>
                <p>blabla</p>
            </div>
            <div>
                <h2>Section 4</h2>
                <p>blabla</p>
            </div>
        </div>
    );
};

export default Projects;