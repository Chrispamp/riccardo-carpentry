import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import logo from '../assets/images/logo_edited.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Riccardo Carpentry" className={styles.logoImage} />
          <span className={styles.companyName}>Riccardo Carpentry</span>
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setIsOpen(false)}>Home</NavLink>

          <div className={styles.dropdown}>
            <span className={styles.dropdownTrigger}>Products <ChevronDown size={14} /></span>
            <div className={styles.dropdownContent}>
              <Link to="/products/doors" onClick={() => setIsOpen(false)}>Doors</Link>
              <Link to="/products/windows" onClick={() => setIsOpen(false)}>Windows</Link>
              <Link to="/products/folding-sliding" onClick={() => setIsOpen(false)}>Folding Sliding Doors</Link>
              <Link to="/products/sliding" onClick={() => setIsOpen(false)}>Sliding Doors</Link>
              <Link to="/products/architraves" onClick={() => setIsOpen(false)}>Architraves & Skirtings</Link>
              <Link to="/products/frames" onClick={() => setIsOpen(false)}>Door Frames</Link>
              <Link to="/products/cavity" onClick={() => setIsOpen(false)}>Cavity Units</Link>
              <Link to="/products/barn" onClick={() => setIsOpen(false)}>Barn Doors</Link>
            </div>
          </div>

          <NavLink to="/gallery" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setIsOpen(false)}>Gallery</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setIsOpen(false)}>Contact Us</NavLink>

          <a href="tel:0118146808" className={styles.ctaMobile}><Phone size={16} /> Call Now</a>
        </nav>

        <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
