import { useState } from 'react';
import styles from './Gallery.module.css';

// Import all hero images as gallery items
// Import all hero images as gallery items
import doorsImage from '../assets/images/Doors Hero Image.webp';
import windowsImage from '../assets/images/Windows Hero Image.webp';
import foldingImage from '../assets/images/Folding Sliding Doors Hero Image.webp';
import slidingImage from '../assets/images/Sliding Doors Hero Image.webp';
import barnImage from '../assets/images/Barn Doors and Exposed Sliders Hero Image.webp';
import cavityImage from '../assets/images/Cavity Units Hero Image.webp';
import framesImage from '../assets/images/Door Frames Hero Image.webp';
import architravesImage from '../assets/images/Architraves and skirtings Hero Image.webp';

const GALLERY_IMAGES = [
    { src: doorsImage, title: 'Solid Wooden Doors', category: 'Doors' },
    { src: windowsImage, title: 'Custom Windows', category: 'Windows' },
    { src: foldingImage, title: 'Folding Sliding Doors', category: 'Doors' },
    { src: slidingImage, title: 'Sliding Doors', category: 'Doors' },
    { src: barnImage, title: 'Barn Doors & Exposed Sliders', category: 'Doors' },
    { src: cavityImage, title: 'Cavity Units', category: 'Systems' },
    { src: framesImage, title: 'Door Frames', category: 'Frames' },
    { src: architravesImage, title: 'Architraves & Skirtings', category: 'Finishes' },
];

export function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', ...new Set(GALLERY_IMAGES.map(img => img.category))];

    const filteredImages = selectedCategory === 'All'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Our Gallery</h1>
                <p>Explore our portfolio of custom wooden doors, windows, and architectural joinery.</p>
            </div>

            <div className={styles.filters}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ''}`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className={styles.grid}>
                {filteredImages.map((image, index) => (
                    <div key={index} className={styles.item}>
                        <img src={image.src} alt={image.title} />
                        <div className={styles.overlay}>
                            <h3>{image.title}</h3>
                            <p>{image.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
