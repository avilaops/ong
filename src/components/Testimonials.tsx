import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Maria Silva',
      donation: 'Doadora Mensal - R$ 150',
      text: 'Saber que minha doação mensal alimenta as onças por 6 dias me enche de orgulho! Acompanho os relatórios e vejo o impacto real. Conexão Onça Pintada é transparente e séria!',
      rating: 5,
      location: 'São Paulo, SP',
    },
    {
      name: 'João Martins',
      donation: 'Doador Recorrente - R$ 300',
      text: 'Visitei o santuário e vi de perto o trabalho incrível que fazem. Cada centavo é investido nas onças. Agora doe mensalmente e incentivo todos a conhecerem!',
      rating: 5,
      location: 'Rio de Janeiro, RJ',
    },
    {
      name: 'Ana Paula Costa',
      donation: 'Doadora Única - R$ 500',
      text: 'Fiz uma doação única e recebi fotos das onças que ajudei a alimentar. Emocionante saber que fiz diferença na vida desses animais magníficos!',
      rating: 5,
      location: 'Belo Horizonte, MG',
    },
    {
      name: 'Roberto Santos',
      donation: 'Doador Corporativo - R$ 2.000/mês',
      text: 'Nossa empresa adotou a causa e patrocina 80kg de carne mensalmente. Ver o impacto corporativo na preservação das onças é inspirador. Recomendo a todas as empresas!',
      rating: 5,
      location: 'Curitiba, PR',
    },
    {
      name: 'Fernanda Lima',
      donation: 'Doadora Mensal - R$ 100',
      text: 'Comecei doando pouco, mas o retorno emocional é gigante! Recebo relatórios mensais, sei exatamente quantos kg de carne doei. Sensação de realmente fazer parte da conservação!',
      rating: 5,
      location: 'Porto Alegre, RS',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #D4A017 0%, #8B6914 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        }}
      />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
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
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            DEPOIMENTOS
          </motion.span>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: 'white',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '1rem',
          }}>
            Vozes dos Nossos Doadores 💛
          </h2>

          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            Histórias reais de quem faz a diferença na vida das onças
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            padding: '3rem',
            borderRadius: '30px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            position: 'relative',
          }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: '-20px',
              left: '3rem',
              background: 'linear-gradient(135deg, #FF6F00 0%, #FFA726 100%)',
              padding: '1rem',
              borderRadius: '50%',
              boxShadow: '0 10px 30px rgba(255, 111, 0, 0.4)',
            }}
          >
            <Quote size={32} color="white" />
          </motion.div>

          <div style={{ marginTop: '2rem' }}>
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              marginBottom: '1.5rem',
              justifyContent: 'center',
            }}>
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: i * 0.1, type: 'spring' }}
                >
                  <Star size={28} fill="#FFD700" color="#FFD700" />
                </motion.div>
              ))}
            </div>

            <p style={{
              fontSize: '1.3rem',
              color: 'white',
              lineHeight: 1.8,
              marginBottom: '2rem',
              textAlign: 'center',
            }}>
              "{testimonials[currentIndex].text}"
            </p>

            <div style={{
              textAlign: 'center',
            }}>
              <h4 style={{
                fontSize: '1.5rem',
                color: 'white',
                fontWeight: 700,
                marginBottom: '0.3rem',
              }}>
                {testimonials[currentIndex].name}
              </h4>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '0.3rem',
              }}>
                {testimonials[currentIndex].donation}
              </p>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.6)',
              }}>
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          marginTop: '3rem',
        }}>
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ChevronLeft size={32} color="white" />
          </motion.button>

          <div style={{
            display: 'flex',
            gap: '0.8rem',
          }}>
            {testimonials.map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: index === currentIndex ? '40px' : '12px',
                  height: '12px',
                  borderRadius: '10px',
                  background: index === currentIndex
                    ? 'white'
                    : 'rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ChevronRight size={32} color="white" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
