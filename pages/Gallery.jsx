// pages/Gallery.jsx
import fs from 'fs';
import path from 'path';
import React, { useState, useEffect, useCallback } from 'react';
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Image from 'next/image';
import imageSize from 'image-size';
import styles from '../styles/gallery.module.css';

const Modal = ({ imgSrc, alt, onClose, width, height, thumbnailSrc }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    if (!imgSrc || !thumbnailSrc) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {!isLoaded && (
                    <Image 
                        className={styles.modalImage} 
                        src={thumbnailSrc} 
                        alt={alt} 
                        width={width} 
                        height={height} 
                        layout="responsive"
                    />
                )}
                <Image 
                    className={styles.modalImage} 
                    src={imgSrc} 
                    alt={alt} 
                    width={width} 
                    height={height} 
                    layout="responsive" 
                    onLoad={() => setIsLoaded(true)}
                    style={{ display: isLoaded ? 'block' : 'none' }}
                />
            </div>
        </div>
    );
};

const Gallery = ({ imagePaths }) => {
    const [focusedImg, setFocusedImg] = useState(null);
    const [focusedThumbnail, setFocusedThumbnail] = useState(null);
    const [modalImgDimensions, setModalImgDimensions] = useState({ width: 0, height: 0 });
    const [visibleImages, setVisibleImages] = useState([]);
    const [lastImageIndex, setLastImageIndex] = useState(0);

    const imagesPerLoad = 10; // Number of images to load per "batch"

    const loadMoreImages = useCallback(() => {
        const newLastIndex = Math.min(lastImageIndex + imagesPerLoad, imagePaths.length);
        const newImages = imagePaths.slice(lastImageIndex, newLastIndex);
        setVisibleImages((prevImages) => [...prevImages, ...newImages]);
        setLastImageIndex(newLastIndex);
    }, [lastImageIndex, imagePaths]);

    useEffect(() => {
        loadMoreImages();

        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
                loadMoreImages();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMoreImages]);

    const handleImageClick = (imgPath, thumbnailPath, width, height) => {
        setFocusedImg(imgPath);
        setFocusedThumbnail(thumbnailPath);
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
                {visibleImages.map((image, index) => (
                    <div key={`image-${index}-${image.fileName}`} className={styles.gridItem}>
                        <Image
                            className={styles.image}
                            src={`/thumbnails/${image.fileName}`}
                            alt={`Image ${index}`}
                            width={image.width / 2}
                            height={image.height / 2}
                            onClick={() => handleImageClick(`/images/${image.fileName}`, `/thumbnails/${image.fileName}`, image.width, image.height)}
                        />
                    </div>
                ))}
            </div>

            {focusedImg && (
                <Modal
                    imgSrc={focusedImg}
                    thumbnailSrc={focusedThumbnail}
                    alt="Focused Image"
                    onClose={() => setFocusedImg(null)}
                    width={modalImgDimensions.width}
                    height={modalImgDimensions.height}
                />
            )}
        </>
    );
};

export async function getStaticProps() {
    const imagesDirectory = path.join(process.cwd(), 'public/images');
    const imageFiles = fs.readdirSync(imagesDirectory);

    const imagesWithDimensions = imageFiles.reduce((acc, fileName) => {
        try {
            const dimensions = imageSize(path.join(imagesDirectory, fileName));
            acc.push({
                fileName,
                ...dimensions,
            });
        } catch (error) {
            console.error(`Error processing ${fileName}: ${error.message}`);
        }
        return acc;
    }, []);

    return {
        props: {
            imagePaths: imagesWithDimensions,
        },
    };
}

export default Gallery;
