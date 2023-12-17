// pages/Gallery.jsx
import fs from 'fs';
import path from 'path';
import styles from "../styles/gallery.module.css";
import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const Modal = ({ imgSrc, alt, onClose }) => {
    if (!imgSrc) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <img className={styles.modalImage} src={imgSrc} alt={alt} />
            </div>
        </div>
    );
};

const Gallery = ({ imagePaths }) => {
    const [focusedImg, setFocusedImg] = useState(null);

    return (
        <>
            <NavBar />
            <SideBar />
            <header className={styles.galleryHeader}>
                <h1 className={styles.galleryTitle}>Gallery</h1>
                <p className={styles.galleryDescription}>Check out my collection of film photos. Almost all photos that I take, unfiltered and unedited, are posted here.</p>
            </header>
            
            <div className={styles.masonry}>
                {imagePaths.map((imgPath, index) => (
                    <div key={`image-${index}-${imgPath}`} className={styles.gridItem}>
                        <img
                            className={styles.image}
                            src={`/images/${imgPath}`}
                            alt={`Image ${index}`}
                            onClick={() => setFocusedImg(`/images/${imgPath}`)}
                        />
                    </div>
                ))}
            </div>
            <Modal
                imgSrc={focusedImg}
                alt="Focused Image"
                onClose={() => setFocusedImg(null)}
            />
        </>
    );
};

export async function getStaticProps() {
    const imagesDirectory = path.join(process.cwd(), 'public/images');
    const imageFiles = fs.readdirSync(imagesDirectory);

    return {
        props: {
            imagePaths: imageFiles,
        },
    };
}

export default Gallery;
