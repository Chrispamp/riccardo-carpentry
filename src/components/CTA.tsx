import { Link } from 'react-router-dom';
import styles from './CTA.module.css';

export function CTA() {
    return (
        <section className={styles.cta}>
            <div className={styles.ctaContent}>
                <h2>Ready to Start Your Project?</h2>
                <p>Contact us today for a free consultation and custom quotation.</p>
                <Link to="/contact" className={styles.button}>Request a Quote</Link>
            </div>
        </section>
    );
}
