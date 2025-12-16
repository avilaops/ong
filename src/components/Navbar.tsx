import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'As Onças', href: '#services' },
    { name: 'Doe Agora', href: '#donation' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Impacto', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  const handleClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled
            ? 'rgba(255, 255, 255, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick('#home')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ fontSize: '2rem' }}>🐆</span>
              <h1 style={{
                fontSize: '1.6rem',
                fontFamily: "'Playfair Display', serif",
                background: 'linear-gradient(135deg, #8B6914 0%, #D4A017 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800,
              }}>
                Conexão Onça
              </h1>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}>
            <div style={{
              display: 'flex',
              gap: '2rem',
            }} className="desktop-menu">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: '#2E7D32' }}
                  style={{
                    textDecoration: 'none',
                    color: scrolled ? '#212121' : '#FFFFFF',
                    fontWeight: 500,
                    fontSize: '1rem',
                    transition: 'color 0.3s',
                    textShadow: scrolled ? 'none' : '2px 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Contact Info Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
              }}
              className="desktop-contact"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => handleClick('#donation')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.7rem 1.5rem',
                  borderRadius: '25px',
                  background: 'linear-gradient(135deg, #8B6914 0%, #D4A017 100%)',
                  color: 'white',
                  cursor: 'pointer',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  boxShadow: '0 4px 15px rgba(212, 160, 23, 0.3)',
                }}
              >
                💰 Doe Agora
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: scrolled ? '#212121' : '#FFFFFF',
              }}
              className="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 20 }}
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '100%',
            height: '100vh',
            background: 'linear-gradient(135deg, #2E7D32 0%, #66BB6A 100%)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu, .desktop-contact {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
