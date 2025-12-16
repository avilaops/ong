import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Heart, Award, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const achievements = [
    {
      icon: Shield,
      title: '8+ Anos',
      description: 'Protegendo os grandes felinos da América',
    },
    {
      icon: Heart,
      title: '150+',
      description: 'Onças resgatadas e reabilitadas',
    },
    {
      icon: Award,
      title: 'Certificada',
      description: 'Por órgãos ambientais nacionais e internacionais',
    },
    {
      icon: Users,
      title: '5.000+',
      description: 'Doadores mensais apoiando a causa',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%)',
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
            NOSSA MISSÃO
          </motion.span>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#212121',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '1rem',
          }}>
            Conexão Onça Pintada 🐆
          </h2>

          <p style={{
            fontSize: '1.2rem',
            color: '#757575',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            Preservando os grandes felinos da América através da educação, resgate e conservação de habitat
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
              style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-20%',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(212, 160, 23, 0.1) 0%, rgba(139, 105, 20, 0.1) 100%)',
                }}
              />

              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'inline-flex',
                  padding: '1.5rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #D4A017 0%, #8B6914 100%)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                }}
              >
                <item.icon size={40} color="white" />
              </motion.div>

              <h3 style={{
                fontSize: '2rem',
                color: '#D4A017',
                fontWeight: 700,
                marginBottom: '0.5rem',
              }}>
                {item.title}
              </h3>

              <p style={{
                fontSize: '1.1rem',
                color: '#757575',
                lineHeight: 1.6,
              }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Biography Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            background: 'white',
            padding: '3rem',
            borderRadius: '30px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              height: '400px',
              background: 'linear-gradient(135deg, #D4A017 0%, #8B6914 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                fontSize: '8rem',
              }}
            >
              🐆
            </motion.div>
          </motion.div>

          <div>
            <h3 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              color: '#212121',
              fontFamily: "'Playfair Display', serif",
              marginBottom: '1.5rem',
            }}>
              Nossa História de Conservação
            </h3>

            <p style={{
              fontSize: '1.1rem',
              color: '#757575',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}>
              Fundada em 2016, a ONG Conexão Onça Pintada nasceu do sonho de preservar
              os grandes felinos da América. Com uma equipe de biólogos, veterinários e
              ambientalistas apaixonados, trabalhamos diariamente no resgate, reabilitação
              e reintrodução de onças em seus habitats naturais.
            </p>

            <p style={{
              fontSize: '1.1rem',
              color: '#757575',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}>
              Nosso trabalho vai além do resgate: protegemos mais de 50.000 hectares de
              floresta, educamos comunidades locais sobre a importância da conservação e
              combatemos o tráfico de animais. Cada doação transforma-se diretamente em
              alimento, medicamentos e habitat protegido para nossos felinos.
            </p>

            <motion.div
              whileHover={{ x: 10 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#D4A017',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
              onClick={() => document.querySelector('#donation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Faça sua Doação
              <span style={{ fontSize: '1.5rem' }}>→</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
