import { Layout } from '../components/Layout';

export function Privacy() {
    return (
        <Layout>
            <div style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '2rem' }}>Privacy Policy</h1>
                <p>Your privacy is important to us. [Content to be populated from documentation]</p>
            </div>
        </Layout>
    );
}

export function Terms() {
    return (
        <Layout>
            <div style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '2rem' }}>Terms & Conditions</h1>
                <p>[Terms content to be populated]</p>
            </div>
        </Layout>
    );
}

export function PAIA() {
    return (
        <Layout>
            <div style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '2rem' }}>PAIA Manual</h1>
                <p>[PAIA Manual content]</p>
            </div>
        </Layout>
    );
}
