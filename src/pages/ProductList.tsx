import { useParams } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Link } from 'react-router-dom';
import { CTA } from '../components/CTA';
import styles from './ProductList.module.css';

import doorsImage from '../assets/images/Doors Hero Image.webp';
import windowsImage from '../assets/images/Windows Hero Image.webp';
import foldingImage from '../assets/images/Folding Sliding Doors Hero Image.webp';
import slidingImage from '../assets/images/Sliding Doors Hero Image.webp';
import framesImage from '../assets/images/Door Frames Hero Image.webp';
import barnImage from '../assets/images/Barn Doors and Exposed Sliders Hero Image.webp';
import cavityImage from '../assets/images/Cavity Units Hero Image.webp';
import architravesImage from '../assets/images/Architraves and skirtings Hero Image.webp';

interface CategoryData {
    title: string;
    image: string;
    description: string;
    features: string[];
}

const CATEGORY_DATA: Record<string, CategoryData> = {
    doors: {
        title: "Solid Wooden Doors",
        image: doorsImage,
        description: "Make a lasting impression with our bespoke entrance doors. Manufactured using premium Meranti and hardwood timber, our solid wood doors combine traditional craftsmanship with modern design.",
        features: [
            "Solid Wood Entrance Doors",
            "Large-format Pivot Doors",
            "Glass and Louvre Doors",
            "Custom sizes and designs",
            "High-grade Meranti and hardwood timber"
        ]
    },
    windows: {
        title: "Custom Wooden Windows",
        image: windowsImage,
        description: "Precision-manufactured wooden window units built to exact architectural specifications. Our custom windows bring natural warmth and timeless elegance to any building.",
        features: [
            "Custom-built to specification",
            "Premium timber construction",
            "Traditional and modern styles",
            "Energy-efficient designs",
            "Expert installation available"
        ]
    },
    'folding-sliding': {
        title: "Folding Sliding Doors",
        image: foldingImage,
        description: "Seamlessly connect indoor and outdoor spaces with our high-end folding sliding door systems. Perfect for creating open-plan living environments.",
        features: [
            "Stack neatly to maximize space",
            "Smooth operating systems",
            "Custom configurations available",
            "Premium hardware",
            "Weather-resistant finishes"
        ]
    },
    sliding: {
        title: "Sliding Doors",
        image: slidingImage,
        description: "Space-saving elegance meets functionality. Our wooden sliding door systems are perfect for modern homes and commercial applications.",
        features: [
            "Smooth glide mechanisms",
            "Custom sizes available",
            "Interior and exterior applications",
            "Contemporary and classic designs",
            "Durable construction"
        ]
    },
    frames: {
        title: "Door Frames",
        image: framesImage,
        description: "Precision-machined door frames manufactured to exact specifications. The foundation of every quality door installation.",
        features: [
            "Standard and custom sizes",
            "Precision-machined",
            "Matching architraves available",
            "Pre-treated timber options",
            "Easy installation"
        ]
    },
    barn: {
        title: "Barn Doors & Exposed Sliders",
        image: barnImage,
        description: "Rustic charm with modern functionality. Our barn doors and exposed sliding systems add character to any space.",
        features: [
            "Exposed track systems",
            "Customizable designs",
            "Robust hardware",
            "Interior feature doors",
            "Space-saving solutions"
        ]
    },
    cavity: {
        title: "Cavity Door Units",
        image: cavityImage,
        description: "Innovative space-saving solutions. Our internal cavity door units slide effortlessly into the wall cavity.",
        features: [
            "Complete cavity slider kits",
            "Space-saving design",
            "Easy to operate",
            "Quality sliding mechanisms",
            "Custom timber finishes"
        ]
    },
    architraves: {
        title: "Architraves & Skirtings",
        image: architravesImage,
        description: "The perfect finishing touch. Our precision-machined architraves and premium skirtings complete your interior.",
        features: [
            "Precision-machined profiles",
            "Matching sets available",
            "Various timber options",
            "Custom profiles on request",
            "Pre-primed or raw timber"
        ]
    },
};

export function ProductList() {
    const { category } = useParams<{ category: string }>();
    const data = category ? CATEGORY_DATA[category] : null;

    if (!data) {
        return (
            <div className={styles.container}>
                <div className={styles.notFound}>
                    <h1>Product Category Not Found</h1>
                    <p>The product category you're looking for doesn't exist.</p>
                    <Link to="/" className={styles.homeLink}>Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Hero
                image={data.image}
                title={data.title}
                subtitle="Handcrafted Excellence Since 1985"
            />
            <div className={styles.content}>
                <div className={styles.intro}>
                    <h2>About {data.title}</h2>
                    <p className={styles.description}>{data.description}</p>
                </div>

                <div className={styles.features}>
                    <h3>Key Features</h3>
                    <ul>
                        {data.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <CTA />
            </div>
        </div>
    );
}
