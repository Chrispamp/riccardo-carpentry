import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import styles from './ProductCategory.module.css';

interface ProductCategoryProps {
    title: string;
    image: string;
    link: string;
}

export function ProductCategory({ title, image, link }: ProductCategoryProps) {
    // Mouse tilt effect logic removed for simplicity


    return (
        <NavLink to={link} className={styles.card}>
            <motion.div
                className={styles.imageContainer}
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.5 }}
            >
                <img src={image} alt={title} className={styles.image} />
                <div className={styles.overlay} />

                <div className={styles.icon}>
                    <ArrowUpRight size={48} />
                </div>
            </motion.div>

            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
            </div>
        </NavLink>
    );
}
