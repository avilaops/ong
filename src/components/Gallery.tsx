import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ZoomIn } from 'lucide-react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { emoji: '🐆', title: 'Onça-Pintada', subtitle: 'Panthera onca', color: '#D4A017' },
    { emoji: '🦁', title: 'Onça-Parda', subtitle: 'Puma concolor', color: '#CD853F' },
    { emoji: '🐱', title: 'Jaguatirica', subtitle: 'Leopardus pardalis', color: '#B8860B' },
    { emoji: '🐈', title: 'Gato-Maracajá', subtitle: 'Leopardus wiedii', color: '#DAA520' },
    { emoji: '🐯', title: 'Gato-do-Mato-Grande', subtitle: 'Leopardus geoffroyi', color: '#B8860B' },
    { emoji: '🐾', title: 'Gato-Mourisco', subtitle: 'Herpailurus yagouaroundi', color: '#8B7355' },
    { emoji: '🌿', title: 'Gato-do-Mato-Pequeno', subtitle: 'Leopardus tigrinus', color: '#8B6914' },
    { emoji: '🦴', title: 'Gato-Palheiro', subtitle: 'Leopardus colocola', color: '#A0826D' },
  ];

  return (
    <section
      id="gallery"
      ref={ref}
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%)',
        position: 'relative',
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.span
            style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'linear-gradient(135deg, #D4A017 0%, #8B6914 100%)',
              color: 'white',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            GALERIA DOS FELINOS
          </motion.span>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#212121',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '1rem',
          }}>
            Beleza e Força dos Grandes Felinos 🐆
          </h2>

          <p style={{
            fontSize: '1.2rem',
            color: '#757575',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            Conheça cada espécie que trabalhamos para preservar
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
        }}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              onClick={() => setSelectedImage(index)}
              style={{
                position: 'relative',
                height: '300px',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                background: `linear-gradient(135deg, ${image.color}CC 0%, ${image.color}FF 100%)`,
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '8rem',
                }}
              >
                {image.emoji}
              </motion.div>

              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                color: 'white',
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '0.3rem',
                }}>
                  {image.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  opacity: 0.9,
                  fontStyle: 'italic',
                }}>
                  {image.subtitle}
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.2 }}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ZoomIn size={20} color={image.color} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
            }}
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, rotate: 180 }}
              transition={{ type: 'spring', damping: 15 }}
              style={{
                fontSize: '15rem',
              }}
            >
              {images[selectedImage].emoji}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
