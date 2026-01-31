import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

interface HeroProps {
    image: string;
    title: string;
    subtitle?: string;
}

export function Hero({ image, title, subtitle }: HeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div ref={containerRef} className={styles.hero}>
            <motion.div
                className={styles.background}
                style={{ y, opacity, backgroundImage: `url(${image})` }}
            />
            <div className={styles.overlay} />

            <div className={styles.content}>
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className={styles.title}
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className={styles.subtitle}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>


        </div>
    );
}
