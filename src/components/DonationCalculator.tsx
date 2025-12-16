import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Scale, DollarSign, Heart, TrendingUp } from 'lucide-react';

const DonationCalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [amount, setAmount] = useState(100);
  const [unit, setUnit] = useState<'BRL' | 'USD'>('BRL');

  // Preço médio por kg de carne (valores aproximados)
  const pricePerKg = unit === 'BRL' ? 25 : 5; // R$ 25/kg ou $5/kg
  const kgPerDonation = amount / pricePerKg;
  const lbsPerDonation = kgPerDonation * 2.20462; // Conversão para libras

  // Uma onça adulta consome aproximadamente 3-5kg de carne por dia
  const daysFeeding = kgPerDonation / 4;

  const presetAmounts = unit === 'BRL'
    ? [50, 100, 250, 500, 1000]
    : [10, 20, 50, 100, 200];

  return (
    <section
      id="donation"
      ref={ref}
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Elements */}
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
          top: '-10%',
          right: '-5%',
          fontSize: '15rem',
          opacity: 0.05,
        }}
      >
        🐆
      </motion.div>

      <div style={{
        maxWidth: '1200px',
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
              background: 'linear-gradient(135deg, #8B6914 0%, #D4A017 100%)',
              color: 'white',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            CALCULADORA DE IMPACTO
          </motion.span>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#212121',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '1rem',
          }}>
            Calcule sua Doação
          </h2>

          <p style={{
            fontSize: '1.2rem',
            color: '#757575',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            Veja quantos quilos de carne você estará doando e por quantos dias
            poderá alimentar uma onça
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}>
          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              background: 'white',
              padding: '3rem',
              borderRadius: '30px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              border: '3px solid #D4A017',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}>
              <Scale size={40} color="#D4A017" />
              <h3 style={{
                fontSize: '1.8rem',
                color: '#212121',
                fontFamily: "'Playfair Display', serif",
              }}>
                Sua Doação
              </h3>
            </div>

            {/* Currency Toggle */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '2rem',
            }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setUnit('BRL')}
                style={{
                  flex: 1,
                  padding: '0.8rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: unit === 'BRL' ? 'white' : '#8B6914',
                  background: unit === 'BRL' ? 'linear-gradient(135deg, #8B6914 0%, #D4A017 100%)' : 'white',
                  border: `2px solid ${unit === 'BRL' ? '#D4A017' : '#E0E0E0'}`,
                  borderRadius: '15px',
                  cursor: 'pointer',
                }}
              >
                R$ Real (BRL)
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setUnit('USD')}
                style={{
                  flex: 1,
                  padding: '0.8rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: unit === 'USD' ? 'white' : '#8B6914',
                  background: unit === 'USD' ? 'linear-gradient(135deg, #8B6914 0%, #D4A017 100%)' : 'white',
                  border: `2px solid ${unit === 'USD' ? '#D4A017' : '#E0E0E0'}`,
                  borderRadius: '15px',
                  cursor: 'pointer',
                }}
              >
                $ Dólar (USD)
              </motion.button>
            </div>

            {/* Amount Input */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#212121',
                marginBottom: '1rem',
              }}>
                Valor da Doação:
              </label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: '#F5F5F5',
                padding: '1rem 1.5rem',
                borderRadius: '15px',
                border: '2px solid #D4A017',
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  {unit === 'BRL' ? 'R$' : '$'}
                </span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Math.max(1, parseInt(e.target.value) || 0))}
                  style={{
                    flex: 1,
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#8B6914',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Preset Amounts */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '0.5rem',
              marginBottom: '2rem',
            }}>
              {presetAmounts.map((preset) => (
                <motion.button
                  key={preset}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setAmount(preset)}
                  style={{
                    padding: '0.6rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: amount === preset ? 'white' : '#8B6914',
                    background: amount === preset ? 'linear-gradient(135deg, #8B6914 0%, #D4A017 100%)' : 'white',
                    border: `2px solid ${amount === preset ? '#D4A017' : '#E0E0E0'}`,
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                >
                  {preset}
                </motion.button>
              ))}
            </div>

            {/* Slider */}
            <input
              type="range"
              min={unit === 'BRL' ? 10 : 5}
              max={unit === 'BRL' ? 1000 : 200}
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '5px',
                outline: 'none',
                background: 'linear-gradient(135deg, #8B6914 0%, #D4A017 100%)',
                cursor: 'pointer',
              }}
            />
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                border: '2px solid #FFD70015',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
              }}>
                <div style={{
                  padding: '1rem',
                  borderRadius: '15px',
                  background: 'linear-gradient(135deg, #8B6914 0%, #D4A017 100%)',
                }}>
                  <Scale size={32} color="white" />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#D4A017',
                    lineHeight: 1,
                    fontFamily: "'Playfair Display', serif",
                  }}>
                    {kgPerDonation.toFixed(1)} kg
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#757575',
                    marginTop: '0.3rem',
                  }}>
                    {lbsPerDonation.toFixed(1)} lbs de carne
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                border: '2px solid #FF8C0015',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
              }}>
                <div style={{
                  padding: '1rem',
                  borderRadius: '15px',
                  background: 'linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)',
                }}>
                  <Heart size={32} color="white" />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#FF8C00',
                    lineHeight: 1,
                    fontFamily: "'Playfair Display', serif",
                  }}>
                    {daysFeeding.toFixed(1)} dias
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#757575',
                    marginTop: '0.3rem',
                  }}>
                    Alimentando uma onça
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                background: 'linear-gradient(135deg, #2C1810 0%, #8B6914 100%)',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                color: 'white',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
              }}>
                <TrendingUp size={40} />
                <h4 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                }}>
                  Impacto Real
                </h4>
              </div>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                opacity: 0.95,
              }}>
                Sua doação de <strong>{unit === 'BRL' ? 'R$' : '$'}{amount}</strong> fornece{' '}
                <strong>{kgPerDonation.toFixed(1)}kg</strong> de carne fresca,
                alimentando uma onça por aproximadamente{' '}
                <strong>{daysFeeding.toFixed(1)} dias</strong>! 🐆
              </p>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(212, 160, 23, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '1.5rem',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'white',
                background: 'linear-gradient(135deg, #8B6914 0%, #D4A017 100%)',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.8rem',
                boxShadow: '0 10px 30px rgba(212, 160, 23, 0.3)',
              }}
            >
              <DollarSign size={32} />
              Fazer Doação de {unit === 'BRL' ? 'R$' : '$'}{amount}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonationCalculator;
