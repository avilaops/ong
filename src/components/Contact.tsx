import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', amount: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '(11) 9 8765-4321',
      link: 'https://wa.me/5511987654321',
      color: '#D4A017',
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'contato@conexaooncapintada.org.br',
      link: 'mailto:contato@conexaooncapintada.org.br',
      color: '#8B6914',
    },
    {
      icon: MapPin,
      title: 'Santuário',
      value: 'Pantanal, MS - Brasil',
      link: '#',
      color: '#D4A017',
    },
    {
      icon: Clock,
      title: 'PIX',
      value: 'doacao@conexaooncapintada.org.br',
      link: '#',
      color: '#8B6914',
    },
  ];

  return (
    <section
      id="contact"
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
            FAÇA SUA DOAÇÃO
          </motion.span>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#212121',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '1rem',
          }}>
            Como Doar 💰
          </h2>

          <p style={{
            fontSize: '1.2rem',
            color: '#757575',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            Sua doação transforma-se diretamente em alimento e cuidados para as onças
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
        }}>
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                textAlign: 'center',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                border: `2px solid ${info.color}15`,
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'inline-flex',
                  padding: '1.2rem',
                  borderRadius: '50%',
                  background: `${info.color}15`,
                  marginBottom: '1rem',
                }}
              >
                <info.icon size={32} color={info.color} />
              </motion.div>

              <h3 style={{
                fontSize: '1.3rem',
                color: '#212121',
                fontWeight: 700,
                marginBottom: '0.5rem',
              }}>
                {info.title}
              </h3>

              <p style={{
                fontSize: '1rem',
                color: '#757575',
              }}>
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            background: 'white',
            padding: '3rem',
            borderRadius: '30px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
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
              top: '-50%',
              right: '-10%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.05) 0%, rgba(102, 187, 106, 0.05) 100%)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
              justifyContent: 'center',
            }}>
              <MessageCircle size={40} color="#2E7D32" />
              <h3 style={{
                fontSize: '2rem',
                color: '#212121',
                fontFamily: "'Playfair Display', serif",
              }}>
                Informações de Contato
              </h3>
            </div>

            {submitted ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 10 }}
                style={{
                  textAlign: 'center',
                  padding: '3rem',
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 0.6 }}
                  style={{
                    fontSize: '5rem',
                    marginBottom: '1rem',
                  }}
                >
                  ✅
                </motion.div>
                <h4 style={{
                  fontSize: '1.8rem',
                  color: '#D4A017',
                  marginBottom: '0.5rem',
                }}>
                  Obrigado pela sua Doação!
                </h4>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#757575',
                }}>
                  Entraremos em contato com as instruções de pagamento!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '1.5rem',
                }}>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Seu Nome *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem 1.5rem',
                        fontSize: '1rem',
                        border: '2px solid #E0E0E0',
                        borderRadius: '15px',
                        outline: 'none',
                        transition: 'all 0.3s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#2E7D32'}
                      onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Seu E-mail *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem 1.5rem',
                        fontSize: '1rem',
                        border: '2px solid #E0E0E0',
                        borderRadius: '15px',
                        outline: 'none',
                        transition: 'all 0.3s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#2E7D32'}
                      onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Telefone *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem 1.5rem',
                        fontSize: '1rem',
                        border: '2px solid #E0E0E0',
                        borderRadius: '15px',
                        outline: 'none',
                        transition: 'all 0.3s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#2E7D32'}
                      onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input
                      type="number"
                      name="amount"
                      placeholder="Valor da Doação (R$)"
                      value={formData.amount}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '1rem 1.5rem',
                        fontSize: '1rem',
                        border: '2px solid #E0E0E0',
                        borderRadius: '15px',
                        outline: 'none',
                        transition: 'all 0.3s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#D4A017'}
                      onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }} style={{ marginBottom: '2rem' }}>
                  <textarea
                    name="message"
                    placeholder="Deixe uma mensagem (opcional)..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '1rem 1.5rem',
                      fontSize: '1rem',
                      border: '2px solid #E0E0E0',
                      borderRadius: '15px',
                      outline: 'none',
                      transition: 'all 0.3s',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#D4A017'}
                    onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(212, 160, 23, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '1.2rem',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: 'white',
                    background: isSubmitting
                      ? '#757575'
                      : 'linear-gradient(135deg, #D4A017 0%, #8B6914 100%)',
                    border: 'none',
                    borderRadius: '15px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s',
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        ⏳
                      </motion.div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      💰 Quero Doar
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
