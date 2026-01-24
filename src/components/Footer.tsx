import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3>Riccardo Carpentry cc</h3>
                        <p>Specialists in custom timber doors, windows, and architectural joinery since 1985.</p>
                    </div>

                    <div className={styles.contact}>
                        <h4>Contact Us</h4>
                        <p>26 Third Avenue, Vorsterkroon,<br />Nigel, Gauteng, South Africa</p>
                        <p>
                            <a href="tel:0118146808">011 814 6808</a><br />
                            <a href="mailto:sales@riccardocarpentry.co.za">sales@riccardocarpentry.co.za</a>
                        </p>
                    </div>

                    <div className={styles.links}>
                        <h4>Quick Links</h4>
                        <a href="/products">Our Products</a>
                        <a href="/gallery">Gallery</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms & Conditions</a>
                        <a href="/paia">PAIA Manual</a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Riccardo Carpentry cc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
