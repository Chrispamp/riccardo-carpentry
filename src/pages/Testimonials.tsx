import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "Quality products and great service. Very knowledgeable about their products.",
        author: "Robert Rose"
    },
    {
        quote: "I have been buying doors from Riccardo Carpentry for over 20 Years, very happy with their products.",
        author: "Reese Whitman"
    },
    {
        quote: "Riccardo Carpentry has been supplying us doors for over 25 years.",
        author: "Max Johnson"
    },
    {
        quote: "It's a pleasure to work with the team at Riccardo Carpentry. They always know how to bring our designs to life.",
        author: "Jessica Davis"
    },
    {
        quote: "Exceptional quality and attention to detail. The pivot door they created for our main entrance is a masterpiece.",
        author: "Michael van der Merwe"
    },
    {
        quote: "The best joinery in the region. Their sliding doors are smooth, durable, and beautifully finished.",
        author: "Sarah Jenkins"
    },
    {
        quote: "Reliable, professional, and excellent craftsmanship. Highly recommended for any high-end residential project.",
        author: "David Thompson"
    }
];

export function Testimonials() {
    return (
        <div className={styles.container}>
            <header className={styles.hero}>
                <h1>What Our Clients Say</h1>
                <p>Real stories from clients who chose quality and craftsmanship.</p>
            </header>

            <main className={styles.content}>
                <div className={styles.grid}>
                    {testimonials.map((t, index) => (
                        <div key={index} className={styles.testimonialCard}>
                            <p className={styles.quote}>{t.quote}</p>
                            <p className={styles.author}>{t.author}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
