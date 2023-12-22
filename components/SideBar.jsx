import React, { Component } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import NextLink from 'next/link';
import styles from "../styles/sidebar.module.css";
import Image from "next/image";

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xPosition: 100
        };
    }

    toggleSidebar = () => {
        this.setState(prevState => ({
            xPosition: prevState.xPosition === 100 ? 0 : 100
        }));
    }

    render() {
        const { xPosition } = this.state;
        const routerPath = this.props.routerPath; // Assume this prop is passed from the parent component

        return (
            <div className={styles.sidebar}>
                <button className={styles["sidebar-button"]} onClick={this.toggleSidebar}>
                    <img src={"/Menu.png"} alt="Menu" />
                </button>
                <div className={styles.menu} style={{ transform: `translatex(${xPosition}vw)` }}>
                    {routerPath === '/' ? (
                        // Use ScrollLink for in-page navigation on the index page
                        <>
                            <ScrollLink to="index-section" smooth={true} duration={1500} offset={-50} className={styles.desktop} onClick={this.toggleSidebar}>Home</ScrollLink>
                            <ScrollLink to="about-section" smooth={true} duration={1500} offset={-50} className={styles.desktop} onClick={this.toggleSidebar}>About</ScrollLink>
                            <ScrollLink to="projects-section" smooth={true} duration={1500} offset={-50} className={styles.desktop} onClick={this.toggleSidebar}>Projects</ScrollLink>
                            <ScrollLink to="contacts-section" smooth={true} duration={1500} offset={-50} className={styles.desktop} onClick={this.toggleSidebar}>Contacts</ScrollLink>
                        </>
                    ) : (
                        // Use NextLink for page transitions on other pages
                        <>
                            <NextLink href="/" className={styles.desktop} onClick={this.toggleSidebar}>Home</NextLink>
                            <NextLink href="/#about-section" className={styles.desktop} onClick={this.toggleSidebar}>About</NextLink>
                            <NextLink href="/#projects-section" className={styles.desktop} onClick={this.toggleSidebar}>Projects</NextLink>
                            <NextLink href="/#contacts-section" className={styles.desktop} onClick={this.toggleSidebar}>Contacts</NextLink>
                        </>
                    )}
                    <NextLink href="/Gallery" className={styles.desktop} onClick={this.toggleSidebar}>Gallery</NextLink>
                </div>
            </div>
        );
    }
}

export default SideBar;
