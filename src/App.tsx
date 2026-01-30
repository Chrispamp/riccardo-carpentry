import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { ProductList } from './pages/ProductList';
import { Products } from './pages/Products';
import { Testimonials } from './pages/Testimonials';
import { Privacy, Terms, PAIA } from './pages/Legal';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navigation />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/paia" element={<PAIA />} />
            <Route path="*" element={
              <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--color-charcoal)' }}>
                <h1>404 - Page Not Found</h1>
                <a href="/" style={{ textDecoration: 'underline' }}>Return Home</a>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
