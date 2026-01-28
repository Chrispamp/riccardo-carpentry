import { Hero } from '../components/Hero';
import styles from './About.module.css';
import { MapPin, Award, Users } from 'lucide-react';
import heroImage from '../assets/images/Home Hero Image.webp';

export function About() {
    return (
        <div className={styles.container}>
            <Hero
                image={heroImage}
                title="Our Story"
                subtitle="Four Decades of Family Craftsmanship"
            />

            <section className={styles.content}>
                <div className={styles.wrapper}>
                    <div className={styles.intro}>
                        <h2>Family-Owned Excellence Since 1985</h2>
                        <p className={styles.lead}>
                            Riccardo Carpentry is a family-owned business built on the foundation of hands-on leadership
                            and meticulous craftsmanship. For over 40 years, we have specialized in manufacturing premium
                            custom timber doors and architectural joinery, serving discerning clients across South Africa
                            and beyond.
                        </p>
                    </div>

                    <div className={styles.values}>
                        <div className={styles.value}>
                            <Award className={styles.icon} />
                            <h3>Hands-On Leadership</h3>
                            <p>
                                Our family leadership is involved from quotation to final factory production, ensuring
                                direct accountability and consistent quality at every stage.
                            </p>
                        </div>
                        <div className={styles.value}>
                            <Users className={styles.icon} />
                            <h3>Expert Craftsmanship</h3>
                            <p>
                                We use only high-grade Meranti and hardwood timber, manufacturing both standard and
                                bespoke solutions to exact architectural specifications.
                            </p>
                        </div>
                        <div className={styles.value}>
                            <MapPin className={styles.icon} />
                            <h3>Regional Reach</h3>
                            <p>
                                Based in Nigel, Gauteng, we serve clients across Johannesburg, Pretoria, Mpumalanga,
                                KZN, and Limpopo, with exports to Mozambique, Zimbabwe, Lesotho, and the DRC.
                            </p>
                        </div>
                    </div>

                    <div className={styles.clients}>
                        <h2>Who We Serve</h2>
                        <div className={styles.clientGrid}>
                            <div className={styles.clientCard}>
                                <h4>Architects & Designers</h4>
                                <p>Bespoke solutions crafted to your precise specifications.</p>
                            </div>
                            <div className={styles.clientCard}>
                                <h4>Builders & Developers</h4>
                                <p>Reliable inventory supply and consistent quality.</p>
                            </div>
                            <div className={styles.clientCard}>
                                <h4>Hardware Retailers</h4>
                                <p>Trusted partner for premium timber products.</p>
                            </div>
                            <div className={styles.clientCard}>
                                <h4>Homeowners</h4>
                                <p>Personalized service for high-quality craftsmanship.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
