import React from 'react';
import { motion } from 'framer-motion';

const Works = () => {
  const stepsData = [
    {
      title: 'Restaurants List Surplus Food',
      description: 'Restaurants can easily list their surplus food items through our user-friendly interface. They specify the type of food, quantity, and pickup time.',
      icon: '🍽️',
      step: '1'
    },
    {
      title: 'NGOs Browse Available Donations',
      description: 'NGOs can browse through available food donations in their area, filter by food type, quantity, and pickup time.',
      icon: '🔍',
      step: '2'
    },
    {
      title: 'Coordinate Pickup',
      description: 'Once an NGO selects a donation, they coordinate with the restaurant for pickup time and location.',
      icon: '🚚',
      step: '3'
    },
    {
      title: 'Food Distribution',
      description: 'NGOs distribute the collected food to those in need, ensuring it reaches the community efficiently.',
      icon: '🤝',
      step: '4'
    },
    {
      title: 'Impact Tracking',
      description: 'Our platform tracks the amount of food saved and meals donated, providing transparency and demonstrating collective impact.',
      icon: '📊',
      step: '5'
    }
  ];

  const benefits = [
    {
      title: 'For Restaurants',
      items: ['Reduce food waste and costs', 'Contribute to community welfare', 'Enhance brand reputation', 'Easy-to-use platform'],
      icon: '🏪'
    },
    {
      title: 'For NGOs',
      items: ['Access to quality food donations', 'Efficient coordination system', 'Expand community reach', 'Track impact and donations'],
      icon: '🤲'
    },
    {
      title: 'For Communities',
      items: ['Access to nutritious meals', 'Reduced food insecurity', 'Environmental benefits', 'Stronger community bonds'],
      icon: '🌍'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #0a0a0a, #1a1a1a)', color: 'white' }}>
      {/* Animated Background Particles */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', opacity: 0.3 }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000) }}
            animate={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            transition={{ 
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            style={{
              position: 'absolute',
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              borderRadius: '50%',
              background: `rgba(16, 185, 129, ${Math.random() * 0.5 + 0.1})`
            }}
          />
        ))}
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ padding: '24px 0' }}
        >
          <button
            onClick={() => window.history.back()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontWeight: '600',
              fontSize: '14px',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateX(-4px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <span>←</span> Back to Home
          </button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'relative',
            minHeight: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 20px',
            marginBottom: '80px',
            borderRadius: '24px',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.2), transparent 70%)'
          }} />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ fontSize: '4rem', marginBottom: '24px' }}
            >
              ⚡
            </motion.div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              marginBottom: '24px',
              background: 'linear-gradient(to right, #10b981, #06b6d4, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              How FoodSaver Works
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '700px',
              lineHeight: '1.8'
            }}>
              A seamless 5-step process connecting surplus food with those who need it most
            </p>
          </motion.div>
        </motion.div>

        {/* Steps Section */}
        <div style={{ marginBottom: '120px' }}>
          {stepsData.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              style={{ marginBottom: '32px' }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  position: 'relative',
                  display: 'flex',
                  gap: '32px',
                  padding: '32px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}
              >
                
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, transparent 60%)',
                  pointerEvents: 'none'
                }} />

                
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    borderRadius: '20px',
                    fontSize: '32px',
                    flexShrink: 0,
                    boxShadow: '0 10px 40px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  {step.icon}
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    width: '32px',
                    height: '32px',
                    background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: '900',
                    color: 'white',
                    border: '2px solid #0a0a0a'
                  }}>
                    {step.step}
                  </div>
                </motion.div>

                <div style={{ flex: 1, position: 'relative' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '12px',
                    color: 'white'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    {step.description}
                  </p>
                </div>

                
                {index < stepsData.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-32px',
                    left: '72px',
                    width: '2px',
                    height: '32px',
                    background: 'linear-gradient(to bottom, rgba(16, 185, 129, 0.5), transparent)'
                  }} />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '120px' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '900',
                marginBottom: '16px',
                background: 'linear-gradient(to right, #10b981, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Benefits for Everyone
            </motion.h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.1rem' }}>
              Creating positive impact across all stakeholders
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                style={{
                  position: 'relative',
                  padding: '32px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(to right, #10b981, #06b6d4)`
                }} />
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '24px'
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(16, 185, 129, 0.1)',
                    borderRadius: '16px',
                    fontSize: '28px'
                  }}>
                    {benefit.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'white'
                  }}>
                    {benefit.title}
                  </h3>
                </div>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  {benefit.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + i * 0.05 }}
                      viewport={{ once: true }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '1rem'
                      }}
                    >
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #10b981, #059669)',
                        flexShrink: 0
                      }} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            padding: '80px 20px',
            marginBottom: '40px',
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1), transparent 70%)',
            pointerEvents: 'none'
          }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '900',
              marginBottom: '16px',
              background: 'linear-gradient(to right, #10b981, #06b6d4, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Ready to Make an Impact?
            </h2>
            <p style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '1.1rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}>
              Join our community and start making a difference today
            </p>

            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                🏪 For Restaurants
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  cursor: 'pointer'
                }}
              >
                🤲 For NGOs
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;