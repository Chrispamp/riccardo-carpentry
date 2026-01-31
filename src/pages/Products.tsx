import styles from './Products.module.css';
import { Hero } from '../components/Hero';
import heroImage from '../assets/images/Home Hero Image.webp';

export function Products() {
    return (
        <div className={styles.container}>
            <Hero
                image={heroImage}
                title="Our Products"
                subtitle="Exquisite Joinery Solutions for Every Space"
            />
        </div>
    );
}
