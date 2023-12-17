import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import NextLink from 'next/link';
import styles from "../styles/navbar.module.css";

class NavBar extends Component {
    render() {
        const { routerPath } = this.props; // Assume this prop is passed from the parent component

        return (
            <nav className={styles.navbar}>
                {routerPath === '/' ? (
                    <ScrollLink to="index-section" smooth={true} duration={1000} offset={-50} className={styles.navbarBrand}>
                        SHAKIR ABDULLAYEV
                    </ScrollLink>
                ) : (
                    <NextLink href="/" className={styles.navbarBrand}>SHAKIR ABDULLAYEV</NextLink>
                )}
                <div className={styles.mobile}></div>
                {routerPath === '/' ? (
                    <>
                        <ScrollLink to="about-section" smooth={true} duration={1500} offset={-50} className={styles.desktop}>About</ScrollLink>
                        <ScrollLink to="projects-section" smooth={true} duration={1500} offset={-50} className={styles.desktop}>Projects</ScrollLink>
                        <ScrollLink to="contacts-section" smooth={true} duration={1500} offset={-50} className={styles.desktop}>Contacts</ScrollLink>
                    </>
                ) : (
                    <>
                        <NextLink href="/#about-section"className={styles.desktop}>About</NextLink>
                        <NextLink href="/#projects-section" className={styles.desktop}>Projects</NextLink>
                        <NextLink href="/#contacts-section" className={styles.desktop}>Contacts</NextLink>
                    </>
                )}
                <NextLink href="/Gallery" className={styles.desktop}>Gallery</NextLink>
            </nav>
        );
    }
}

export default NavBar;
