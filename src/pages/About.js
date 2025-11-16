import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '10K+', label: 'Meals Donated', icon: '🍽️' },
    { number: '50+', label: 'Partner Restaurants', icon: '🏪' },
    { number: '25+', label: 'NGO Partners', icon: '🤝' },
    { number: '5K+', label: 'Lives Impacted', icon: '❤️' }
  ];

  const values = [
    {
      title: 'Environmental Responsibility',
      description: 'Committed to reducing food waste and minimizing our carbon footprint',
      icon: '🌱',
      color: 'from-emerald-400 to-teal-400'
    },
    {
      title: 'Social Equity',
      description: 'Ensuring equal access to nutritious food for all community members',
      icon: '⚖️',
      color: 'from-cyan-400 to-blue-400'
    },
    {
      title: 'Community Collaboration',
      description: 'Building strong partnerships between businesses and organizations',
      icon: '🤲',
      color: 'from-blue-400 to-indigo-400'
    },
    {
      title: 'Transparency',
      description: 'Open communication and measurable impact tracking',
      icon: '📊',
      color: 'from-indigo-400 to-purple-400'
    }
  ];

  const timeline = [
    { year: '2023', event: 'Founded at Haldia Institute of Technology', icon: '🎓' },
    { year: '2023', event: 'First restaurant partnership established', icon: '🤝' },
    { year: '2024', event: 'Reached 5,000 meals donated milestone', icon: '🎯' },
    { year: '2024', event: 'Expanded to multiple cities', icon: '🌍' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #0a0a0a, #1a1a1a)', color: 'white' }}>
      {/* Animated Background Grid */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', opacity: 0.1 }}>
        <div style={{
          backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          width: '100%',
          height: '100%'
        }} />
      </div>

      {/* Floating Particles */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', opacity: 0.2 }}>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000) 
            }}
            animate={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            transition={{ 
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            style={{
              position: 'absolute',
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(16, 185, 129, ${Math.random() * 0.8 + 0.2}), transparent)`
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
    position: "relative",
    minHeight: "550px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 20px",
    marginBottom: "80px",
    borderRadius: "24px",
    overflow: "hidden",
  }}
>
  
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage:
        'url("https://as2.ftcdn.net/v2/jpg/05/66/58/01/1000_F_566580177_ALbzbUyyM72O9PUyJI7N6J2ZTKwaGqBl.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      filter: "brightness(0.35)",
      zIndex: 0,
    }}
  />

  {/* Green Glow Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.25), transparent 70%)",
      zIndex: 0,
    }}
  />

  {/* Hero Content */}
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    style={{
      position: "relative",
      textAlign: "center",
      zIndex: 1,
      maxWidth: "900px",
    }}
  >
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      style={{ fontSize: "4rem", marginBottom: "24px" }}
    >
      🌟
    </motion.div>

    <h1
      style={{
        fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
        fontWeight: "900",
        marginBottom: "24px",
        background: "linear-gradient(to right, #10b981, #06b6d4, #8b5cf6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        lineHeight: 1.2,
      }}
    >
      About FoodShare Connect
    </h1>

    <p
      style={{
        fontSize: "1.25rem",
        color: "rgba(255, 255, 255, 0.85)",
        marginBottom: "32px",
        lineHeight: "1.8",
      }}
    >
      Connecting restaurants with NGOs to reduce food waste and feed
      communities
    </p>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        padding: "16px 32px",
        background: "linear-gradient(135deg, #10b981, #059669)",
        color: "white",
        fontWeight: "700",
        fontSize: "1.1rem",
        borderRadius: "50px",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 10px 40px rgba(16, 185, 129, 0.4)",
      }}
    >
      Learn How It Works
    </motion.button>
  </motion.div>
</motion.div>


        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '100px' }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                style={{
                  position: 'relative',
                  padding: '32px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  textAlign: 'center',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(to right, #10b981, #06b6d4)'
                }} />
                <div style={{ fontSize: '3rem', marginBottom: '12px' }}>{stat.icon}</div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '8px'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            marginBottom: '100px',
            padding: '48px',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1), transparent 70%)',
            pointerEvents: 'none'
          }} />
          
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '900',
            marginBottom: '32px',
            background: 'linear-gradient(to right, #10b981, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Our Story
          </h2>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '24px'
          }}>
            FoodShare Connect was born from a simple idea: to bridge the gap between surplus food and those in need. 
            Founded by students at Haldia Institute of Technology, we recognized the significant food waste in our 
            community and the potential to make a difference.
          </p>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            Our journey began with a passion for sustainability and a commitment to creating a positive impact. 
            We've grown from a campus initiative to a platform serving restaurants and NGOs across the region, 
            driven by our belief that no food should go to waste while people go hungry.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '100px' }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '900',
            marginBottom: '48px',
            textAlign: 'center',
            background: 'linear-gradient(to right, #10b981, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Our Journey
          </h2>
          <div style={{ position: 'relative', paddingLeft: '40px' }}>
            <div style={{
              position: 'absolute',
              left: '20px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, #10b981, #06b6d4, #8b5cf6)'
            }} />
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                style={{
                  position: 'relative',
                  marginBottom: '40px',
                  paddingLeft: '40px'
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: index * 0.15 + 0.2 }}
                  viewport={{ once: true }}
                  style={{
                    position: 'absolute',
                    left: '-20px',
                    top: '5px',
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    border: '3px solid #0a0a0a',
                    boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)'
                  }}
                >
                  {item.icon}
                </motion.div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '24px'
                }}>
                  <div style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#10b981',
                    marginBottom: '8px'
                  }}>
                    {item.year}
                  </div>
                  <div style={{
                    fontSize: '1.125rem',
                    color: 'rgba(255, 255, 255, 0.8)'
                  }}>
                    {item.event}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '100px' }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '900',
            marginBottom: '48px',
            textAlign: 'center',
            background: 'linear-gradient(to right, #10b981, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Our Values
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                style={{
                  position: 'relative',
                  padding: '32px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(to right, ${value.color.replace('from-', '#').split(' to-').join(', #')})`
                }} />
                <div style={{
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '16px',
                  fontSize: '32px',
                  marginBottom: '20px'
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '12px'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team & Impact Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '32px',
          marginBottom: '80px'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              padding: '48px',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px'
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>👥</div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '900',
              marginBottom: '20px',
              color: 'white'
            }}>
              The Team
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              Our team consists of passionate students and professionals dedicated to making a difference. 
              We come from diverse backgrounds in technology, business, and social work, united by our 
              commitment to solving the food waste challenge.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              padding: '48px',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px'
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎯</div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '900',
              marginBottom: '20px',
              color: 'white'
            }}>
              Our Impact
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              Since our launch, we've facilitated the donation of thousands of meals, connecting hundreds 
              of restaurants with local NGOs. We're proud of our impact and committed to scaling our 
              solution to serve more communities.
            </p>
          </motion.div>
        </div>

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
            background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15), transparent 70%)',
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
              Join Our Mission
            </h2>
            <p style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '1.1rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}>
              Be part of the solution. Together we can make a difference.
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
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)'
                }}
              >
                Get Started
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
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
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;