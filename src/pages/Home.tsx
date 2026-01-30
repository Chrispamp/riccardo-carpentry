import { Hero } from '../components/Hero';
import { CTA } from '../components/CTA';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { ArrowRight, Users, Globe, Hammer, Sparkles } from 'lucide-react';
import heroImage from '../assets/images/Home Hero Image.webp';

export function Home() {
    return (
        <div className={styles.container}>
            <Hero
                image={heroImage}
                title="Premium Doors Since 1980"
                subtitle="Exceptional Craftsmanship for Discerning Clients"
            />

            <section className={styles.partner}>
                <div className={styles.partnerContent}>
                    <h2>Your Trusted Joinery Partner</h2>
                    <p className={styles.lead}>
                        At Riccardo Carpentry, excellence comes from combining personal dedication with innovative solutions.
                        As a family business, we're directly involved from initial vision to final delivery, ensuring exceptional
                        results that reflect our values.
                    </p>
                    <p>
                        Our strength lies in adaptability and precision. Whether selecting from our extensive range or requiring
                        unique designs, we approach each project with equal care. Our flexible manufacturing capabilities bring
                        specific design ideas to life efficiently, without compromising quality or extending timelines.
                    </p>
                    <Link to="/products" className={styles.linkButton}>View Products <ArrowRight size={20} /></Link>
                </div>
            </section>

            <section className={styles.products}>
                <h2>What We Create</h2>
                <p className={styles.productsIntro}>
                    We take pride in crafting a comprehensive range of premium wooden products designed to enhance any space:
                </p>
                <div className={styles.grid}>
                    <div className={styles.productCard}>
                        <h3><Sparkles size={20} /> Doors for Every Need</h3>
                        <p>
                            Solid wooden doors, elegant pivot doors, modern glass doors, practical louvre doors,
                            space-saving sliding doors, versatile folding sliding doors, or innovative cavity door units—we've got you covered.
                        </p>
                        <Link to="/products/doors" className={styles.cardLink}>Explore Doors <ArrowRight size={16} /></Link>
                    </div>

                    <div className={styles.productCard}>
                        <h3><Sparkles size={20} /> Bespoke Joinery</h3>
                        <p>
                            Can't find exactly what you're looking for? We love creating custom-made doors that
                            perfectly match your vision.
                        </p>
                        <Link to="/contact" className={styles.cardLink}>Request Custom <ArrowRight size={16} /></Link>
                    </div>

                    <div className={styles.productCard}>
                        <h3><Sparkles size={20} /> Architectural Finishing Touches</h3>
                        <p>
                            Our expertly crafted architraves, skirtings, and door frames add that perfect finishing
                            touch to any project.
                        </p>
                        <Link to="/products/architraves" className={styles.cardLink}>View Finishes <ArrowRight size={16} /></Link>
                    </div>

                </div>
            </section>

            <section className={styles.serve}>
                <div className={styles.serveContent}>
                    <h2>Who We Serve</h2>
                    <p className={styles.lead}>
                        We're proud to work with clients across South Africa's major regions, including Johannesburg,
                        Pretoria, Mpumalanga, KwaZulu-Natal, Limpopo, and the Western Cape.
                    </p>
                    <p>
                        Our reputation for quality has also taken us beyond our borders, with successful projects
                        delivered to Mozambique, Zimbabwe, Lesotho, and the Democratic Republic of Congo.
                    </p>
                    <div className={styles.serveIcons}>
                        <div className={styles.iconItem}>
                            <Users className={styles.icon} />
                            <span>Architects & Designers</span>
                        </div>
                        <div className={styles.iconItem}>
                            <Hammer className={styles.icon} />
                            <span>Builders & Developers</span>
                        </div>
                        <div className={styles.iconItem}>
                            <Globe className={styles.icon} />
                            <span>International Clients</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.testimonials}>
                <div className={styles.testimonialsContent}>
                    <h2>What Our Clients Say</h2>
                    <div className={styles.testimonialsGrid}>
                        <div className={styles.testimonial}>
                            <p className={styles.quote}>
                                "Quality products and great service. Very knowledgeable about their products."
                            </p>
                            <p className={styles.author}>— Robert Rose</p>
                        </div>
                        <div className={styles.testimonial}>
                            <p className={styles.quote}>
                                "I have been buying doors from Riccardo Carpentry for over 20 Years, very happy with their products."
                            </p>
                            <p className={styles.author}>— Reese Whitman</p>
                        </div>
                        <div className={styles.testimonial}>
                            <p className={styles.quote}>
                                "Riccardo Carpentry has been supplying us doors for over 25 years."
                            </p>
                            <p className={styles.author}>— Max Johnson</p>
                        </div>
                        <div className={styles.testimonial}>
                            <p className={styles.quote}>
                                "It's a pleasure to work with the team at Riccardo Carpentry. They always know how to bring our designs to life."
                            </p>
                            <p className={styles.author}>— Jessica Davis</p>
                        </div>
                    </div>
                    <div className={styles.viewMoreContainer}>
                        <Link to="/testimonials" className={styles.linkButton}>View More Testimonials <ArrowRight size={20} /></Link>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
