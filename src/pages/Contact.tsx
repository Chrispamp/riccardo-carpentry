import { useState } from 'react';
import styles from './Contact.module.css';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! We will contact you shortly.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Get in Touch</h1>
                <p>Ready to discuss your custom wooden doors and windows project? Contact us today.</p>
            </div>

            <div className={styles.content}>
                <div className={styles.contactInfo}>
                    <h2>Riccardo Carpentry cc</h2>
                    <p className={styles.tagline}>Premium Custom Timber Solutions Since 1985</p>

                    <div className={styles.infoItem}>
                        <MapPin className={styles.icon} />
                        <div>
                            <h3>Visit Us</h3>
                            <p>26 Third Avenue, Vorsterkroon<br />Nigel, Gauteng, South Africa</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <Phone className={styles.icon} />
                        <div>
                            <h3>Call Us</h3>
                            <p><a href="tel:0118146808">011 814 6808</a></p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <Mail className={styles.icon} />
                        <div>
                            <h3>Email Us</h3>
                            <p><a href="mailto:sales@riccardocarpentry.co.za">sales@riccardocarpentry.co.za</a></p>
                        </div>
                    </div>

                    <a href="tel:0118146808" className={styles.callButton}>
                        <Phone size={20} /> Call Now
                    </a>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2>Request a Quote</h2>

                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Project Details *</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Tell us about your project requirements..."
                        />
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        <Send size={18} /> Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
