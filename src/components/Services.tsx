import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: '🐆',
      title: 'Onça-Pintada',
      subtitle: 'Panthera onca',
      description: 'O maior felino das Américas. Pode pesar até 158kg e é conhecido por sua mordida poderosa capaz de perfurar carapaças de tartarugas.',
      status: 'Vulnerável',
      color: '#D4A017',
      gradient: 'linear-gradient(135deg, #D4A017 0%, #8B6914 100%)',
    },
    {
      icon: '🦁',
      title: 'Onça-Parda',
      subtitle: 'Puma concolor',
      description: 'Também chamada de suçuarana ou puma. É o segundo maior felino das Américas, muito ágil e adaptável a diversos habitats.',
      status: 'Vulnerável',
      color: '#CD853F',
      gradient: 'linear-gradient(135deg, #CD853F 0%, #8B6914 100%)',
    },
    {
      icon: '🐱',
      title: 'Jaguatirica',
      subtitle: 'Leopardus pardalis',
      description: 'Felino de médio porte com pelagem marcante. Excelente nadadora e caçadora noturna, habita desde o México até a Argentina.',
      status: 'Pouco Preocupante',
      color: '#B8860B',
      gradient: 'linear-gradient(135deg, #B8860B 0%, #6B5D1F 100%)',
    },
    {
      icon: '🐈',
      title: 'Gato-Maracajá',
      subtitle: 'Leopardus wiedii',
      description: 'Pequeno felino arborícola com habilidade única de descer árvores de cabeça para baixo. Possui cauda longa para equilíbrio.',
      status: 'Vulnerável',
      color: '#DAA520',
      gradient: 'linear-gradient(135deg, #DAA520 0%, #8B6914 100%)',
    },
    {
      icon: '🐯',
      title: 'Gato-do-Mato-Grande',
      subtitle: 'Leopardus geoffroyi',
      description: 'Pequeno felino manchado com comportamento territorial. Habita florestas, campos e áreas montanhosas da América do Sul.',
      status: 'Pouco Preocupante',
      color: '#B8860B',
      gradient: 'linear-gradient(135deg, #B8860B 0%, #8B7355 100%)',
    },
    {
      icon: '🐾',
      title: 'Gato-Mourisco',
      subtitle: 'Herpailurus yagouaroundi',
      description: 'Felino esguio e alongado, sem manchas. Diurno e terrestre, habita desde o sul dos EUA até a Argentina.',
      status: 'Pouco Preocupante',
      color: '#8B7355',
      gradient: 'linear-gradient(135deg, #8B7355 0%, #5C4B37 100%)',
    },
    {
      icon: '🌿',
      title: 'Gato-do-Mato-Pequeno',
      subtitle: 'Leopardus tigrinus',
      description: 'O menor felino brasileiro, pesando cerca de 2kg. Arborícola e noturno, está criticamente ameaçado pela perda de habitat.',
      status: 'Vulnerável',
      color: '#8B6914',
      gradient: 'linear-gradient(135deg, #8B6914 0%, #5C4B1F 100%)',
    },
    {
      icon: '🦴',
      title: 'Gato-Palheiro',
      subtitle: 'Leopardus colocola',
      description: 'Felino de pequeno porte que habita campos e áreas abertas. Nome vem de sua preferência por áreas de palhada.',
      status: 'Vulnerável',
      color: '#A0826D',
      gradient: 'linear-gradient(135deg, #A0826D 0%, #6B5D4F 100%)',
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: '6rem 2rem',
        background: '#FFFFFF',
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
            AS ONÇAS
          </motion.span>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#212121',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '1rem',
          }}>
            Conheça os Felinos que Protegemos 🐆
          </h2>

          <p style={{
            fontSize: '1.2rem',
            color: '#757575',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            Do majestoso jaguar aos pequenos gatos-do-mato, cada espécie
            desempenha papel vital no equilíbrio da natureza
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -15,
                scale: 1.05,
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              }}
              style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                border: `2px solid ${service.color}15`,
              }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: service.gradient,
                  opacity: 0.1,
                }}
              />

              <motion.div
                whileHover={{ rotate: 12, scale: 1.2 }}
                transition={{ duration: 0.4 }}
                style={{
                  display: 'inline-flex',
                  fontSize: '4rem',
                  marginBottom: '1.5rem',
                  position: 'relative',
                }}
              >
                {service.icon}
              </motion.div>

              <h3 style={{
                fontSize: '1.5rem',
                color: '#212121',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '0.5rem',
                fontWeight: 700,
              }}>
                {service.title}
              </h3>

              <p style={{
                fontSize: '0.9rem',
                color: '#8B6914',
                fontStyle: 'italic',
                marginBottom: '1rem',
              }}>
                {service.subtitle}
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#757575',
                lineHeight: 1.7,
                marginBottom: '1rem',
              }}>
                {service.description}
              </p>

              <motion.div
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  background: service.status === 'Vulnerável'
                    ? 'linear-gradient(135deg, #FF6B6B 0%, #EE5A6F 100%)'
                    : service.status === 'Pouco Preocupante'
                    ? 'linear-gradient(135deg, #51CF66 0%, #37B24D 100%)'
                    : 'linear-gradient(135deg, #FFA94D 0%, #FF922B 100%)',
                  color: 'white',
                  borderRadius: '15px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginTop: '1rem',
                }}
              >
                {service.status}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            marginTop: '4rem',
            textAlign: 'center',
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(212, 160, 23, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#donation')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '1.2rem 3rem',
              fontSize: '1.2rem',
              fontWeight: 600,
              color: 'white',
              background: 'linear-gradient(135deg, #D4A017 0%, #8B6914 100%)',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(212, 160, 23, 0.3)',
            }}
          >
            💰 Doe Agora e Salve uma Onça
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
