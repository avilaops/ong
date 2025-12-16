import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, link: 'https://facebook.com/conexaooncapintada', color: '#1877F2' },
    { icon: Instagram, link: 'https://instagram.com/conexaooncapintada', color: '#E4405F' },
    { icon: Youtube, link: 'https://youtube.com/@conexaooncapintada', color: '#FF0000' },
  ];

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Nossa Missão', href: '#about' },
    { name: 'As Onças', href: '#services' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Doadores', href: '#testimonials' },
    { name: 'Doe Agora', href: '#donation' },
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #8B6914 0%, #2C1810 100%)',
      color: 'white',
      padding: '4rem 2rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
        }}
      />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{
              fontSize: '2rem',
              fontFamily: "'Playfair Display', serif",
              marginBottom: '1rem',
              fontWeight: 800,
            }}>
              🐆 Conexão Onça Pintada
            </h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '1.5rem',
            }}>
              Preservando os grandes felinos da América através da conservação,
              educação e resgate. Juntos somos mais fortes na proteção da biodiversidade.
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
            }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  <social.icon size={22} color="white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
            }}>
              Links Rápidos
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
            }}>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10 }}
                  style={{ marginBottom: '0.8rem' }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
            }}>
              Contato
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <motion.div
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                }}
              >
                <Phone size={20} color="#D4A017" />
                <span style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1rem',
                }}>
                  (11) 9 8765-4321
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                }}
              >
                <Mail size={20} color="#D4A017" />
                <span style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1rem',
                }}>
                  contato@conexaooncapintada.org.br
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.8rem',
                }}
              >
                <MapPin size={20} color="#D4A017" style={{ marginTop: '0.2rem' }} />
                <span style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                }}>
                  Pantanal, MS<br />
                  Santuário dos Grandes Felinos
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
            }}>
              Newsletter
            </h4>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1rem',
              lineHeight: 1.6,
              marginBottom: '1rem',
            }}>
              Receba relatórios mensais e notícias sobre conservação!
            </p>
            <div style={{
              display: 'flex',
              gap: '0.5rem',
            }}>
              <input
                type="email"
                placeholder="Seu e-mail"
                style={{
                  flex: 1,
                  padding: '0.8rem 1rem',
                  fontSize: '1rem',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  outline: 'none',
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.8rem 1.5rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#2C1810',
                  background: 'linear-gradient(135deg, #D4A017 0%, #8B6914 100%)',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              >
                Assinar
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}>
            © {currentYear} Conexão Onça Pintada - ONG de Conservação | CNPJ: 00.000.000/0001-00
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <Heart size={18} fill="#D4A017" color="#D4A017" />
            </motion.span>
            Feito com amor pelos grandes felinos 🐆
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
