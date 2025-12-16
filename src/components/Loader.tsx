import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #2C1810 0%, #8B6914 50%, #D4A017 100%)',
        zIndex: 9999,
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          fontSize: '8rem',
        }}
      >
        🐆
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          color: 'white',
          marginTop: '2rem',
          fontSize: '2rem',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        Conexão Onça Pintada
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          color: 'rgba(255, 255, 255, 0.9)',
          marginTop: '0.5rem',
          fontSize: '1.1rem',
        }}
      >
        Preservando a vida selvagem
      </motion.p>
    </motion.div>
  );
};

export default Loader;
