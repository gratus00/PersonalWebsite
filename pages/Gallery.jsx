// pages/Gallery.jsx
import fs from 'fs';
import path from 'path';
import styles from "../styles/gallery.module.css";
import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Image from 'next/image';
import imageSize from 'image-size';

const Modal = ({ imgSrc, alt, onClose, width, height }) => {
    if (!imgSrc) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <Image 
                    className={styles.modalImage} 
                    src={imgSrc} 
                    alt={alt} 
                    width={width} 
                    height={height}
                    layout="responsive"
                />
            </div>
        </div>
    );
};

const Gallery = ({ imagePaths }) => {
    const [focusedImg, setFocusedImg] = useState(null);
    const [modalImgDimensions, setModalImgDimensions] = useState({ width: 0, height: 0 });
    const [visibleImages, setVisibleImages] = useState([]);
    const [lastImageIndex, setLastImageIndex] = useState(0);
    const imagesPerLoad = 10; // Number of images to load per "batch"

    useEffect(() => {
        // Function to load more images
        function loadMoreImages() {
            const newLastIndex = Math.min(lastImageIndex + imagesPerLoad, imagePaths.length);
            const newImages = imagePaths.slice(lastImageIndex, newLastIndex);
            setVisibleImages(visibleImages.concat(newImages));
            setLastImageIndex(newLastIndex);
        }

        // Initial load
        loadMoreImages();

        // Event listener for scroll event
        function handleScroll() {
            // Check if the user has scrolled to the bottom
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
                loadMoreImages();
            }
        }

        // Register scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastImageIndex, imagePaths]); // Dependencies array


    const handleImageClick = (imgPath, width, height) => {
        setFocusedImg(imgPath);
        setModalImgDimensions({ width, height });
    };

    return (
        <>
            <NavBar />
            <SideBar />
            <header className={styles.galleryHeader}>
                <h1 className={styles.galleryTitle}>Gallery</h1>
                <p className={styles.galleryDescription}>Check out my collection of film photos. Almost all photos that I take, unfiltered and unedited, are posted here.</p>
            </header>
            
            <div className={styles.masonry}>
                {imagePaths.map((image, index) => (
                    <div key={`image-${index}-${image}`} className={styles.gridItem}>
                        <Image
                            className={styles.image}
                            src={`/images/${image.fileName}`}
                            alt={`Image ${index}`}
                            width={image.width} 
                            height={image.height}  
                            onClick={() => handleImageClick(`/images/${image.fileName}`, image.width, image.height)}
                        />
                    </div>
                ))}
            </div>
            <Modal
                imgSrc={focusedImg}
                alt="Focused Image"
                onClose={() => setFocusedImg(null)}
                width={modalImgDimensions.width}
                height={modalImgDimensions.height}
            />
        </>
    );
};

export async function getStaticProps() {
    const imagesDirectory = path.join(process.cwd(), 'public/images');
    const imageFiles = fs.readdirSync(imagesDirectory);

    const imagesWithDimensions = imageFiles.map((fileName) => {
        const dimensions = imageSize(path.join(imagesDirectory, fileName));
        return {
          fileName,
          ...dimensions,
        };
      });

    return {
        props: {
            imagePaths: imagesWithDimensions,
        },
    };
}

export default Gallery;
