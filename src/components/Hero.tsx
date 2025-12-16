import { motion } from 'framer-motion';
import { ChevronDown, Heart, Shield, Target } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const features = [
    { icon: Heart, text: 'Preservação' },
    { icon: Shield, text: 'Proteção' },
    { icon: Target, text: 'Impacto Real' },
  ];

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #2C1810 0%, #8B6914 50%, #D4A017 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Animated Jaguar Silhouettes */}
      <motion.div
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '20%',
          fontSize: '3rem',
          opacity: 0.2,
        }}
      >
        🐆
      </motion.div>

      <motion.div
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          bottom: '30%',
          fontSize: '2.5rem',
          opacity: 0.15,
        }}
      >
        🐆
      </motion.div>

      {/* Animated Circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '1200px',
        }}
      >
        <motion.div variants={itemVariants}>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              fontSize: 'clamp(5rem, 12vw, 10rem)',
              marginBottom: '1rem',
            }}
          >
            🐆
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h1
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              color: 'white',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}
          >
            Conexão Onça Pintada
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 300,
              marginBottom: '1.5rem',
            }}
          >
            Preservando os Grandes Felinos da América
          </motion.h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            lineHeight: 1.8,
          }}>
            Sua doação alimenta onças-pintadas, onças-pardas e jaguatiricas em cativeiro,
            garantindo sua sobrevivência e bem-estar. Cada quilo de carne faz a diferença!
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem',
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#donation')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '1.2rem 2.5rem',
              fontSize: '1.2rem',
              fontWeight: 600,
              color: '#2C1810',
              background: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
            }}
          >
            💰 Fazer Doação
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'white',
              background: 'transparent',
              border: '2px solid white',
              borderRadius: '50px',
              cursor: 'pointer',
            }}
          >
            Conhecer Mais
          </motion.button>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: '3rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                style={{
                  padding: '1rem',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <feature.icon size={32} color="white" />
              </motion.div>
              <span style={{
                color: 'white',
                fontSize: '1rem',
                fontWeight: 500,
              }}>
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
        }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={40} color="white" />
      </motion.div>
    </section>
  );
};

export default Hero;
