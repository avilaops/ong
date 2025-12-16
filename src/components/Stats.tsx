import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Users, TreePine, Scale } from 'lucide-react';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const stats = [
    {
      icon: Users,
      number: '150',
      suffix: '+',
      label: 'Onças Resgatadas',
      color: '#D4A017',
    },
    {
      icon: TreePine,
      number: '50000',
      suffix: '+',
      label: 'Hectares Protegidos',
      color: '#8B6914',
    },
    {
      icon: Scale,
      number: '12000',
      suffix: 'kg',
      label: 'Carne Doada/Mês',
      color: '#D4A017',
    },
    {
      icon: TrendingUp,
      number: '5000',
      suffix: '+',
      label: 'Doadores Ativos',
      color: '#8B6914',
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #D4A017 0%, #8B6914 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
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
          gap: '2rem',
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -10 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '2.5rem',
                borderRadius: '20px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  display: 'inline-flex',
                  padding: '1rem',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  marginBottom: '1rem',
                }}
              >
                <stat.icon size={40} color="white" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
              >
                <h3 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  color: 'white',
                  fontWeight: 800,
                  marginBottom: '0.5rem',
                  fontFamily: "'Playfair Display', serif",
                }}>
                  {stat.number}
                  <span style={{ color: stat.color }}>{stat.suffix}</span>
                </h3>

                <p style={{
                  fontSize: '1.2rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 500,
                }}>
                  {stat.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
