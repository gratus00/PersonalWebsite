import NavBar from "../components/NavBar";
import Button from "../components/Button";
import styles from "../styles/home.module.css";
import Section from "../components/Section";


const home = () => {
    return (
        <div className={styles.home}>
            <Section
                title="I'm a Boss."
                subtitle="And a compsci student"
                id = "Home"
            />
            <Button path="About">About</Button>
        </div>
    );
};

export default home;