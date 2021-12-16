import Button from "../components/Button";
import styles from '../styles/about.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <h1>Student.</h1>
            <p>if her booty fat, u know where i'm at.</p>

        <Button path="Projects">Projects</Button>    
        </div>
    );
};

export default About;