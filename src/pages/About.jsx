import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="page-container">
      <style jsx>{`
        .page-container {
          font-family: 'Arial', sans-serif;
          color: #333;
          line-height: 1.6;
        }
        
        .about-hero {
          background: linear-gradient(135deg, #6e8efb, #a777e3);
          color: white;
          padding: 5rem 2rem;
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .about-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .about-hero p {
          font-size: 1.2rem;
          opacity: 0.9;
        }
        
        .about-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem 4rem;
        }
        
        .about-content h2 {
          color: #4a4a4a;
          font-size: 2rem;
          margin: 3rem 0 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .about-content h2:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 4px;
          background: #6e8efb;
        }
        
        .about-content p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          color: #666;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .team-member {
          background: #f9f9f9;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .team-member:hover {
          transform: translateY(-5px);
        }
        
        .team-member h3 {
          color: #4a4a4a;
          margin-bottom: 0.5rem;
        }
        
        .team-member p {
          color: #777;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 2.2rem;
          }
          
          .about-content {
            padding: 0 1.5rem 3rem;
          }
        }
      `}</style>
      <main className="about-page">
        <section className="about-hero">
          <h1>About Our Company</h1>
          <p>Learn more about who we are and what we do</p>
        </section>

        <section className="about-content">
          <div className="container">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, our company began as a small startup with a big vision.
              Today, we serve customers worldwide with innovative solutions that make
              their lives easier and businesses more efficient.
            </p>

            <h2>Our Mission</h2>
            <p>
              To empower businesses and individuals through cutting-edge technology
              and exceptional customer service. We believe in creating products that
              are not only powerful but also intuitive and accessible to everyone.
            </p>

            <h2>Our Values</h2>
            <p>
              Integrity, innovation, and customer satisfaction are at the core of
              everything we do. We're committed to ethical business practices and
              continuous improvement.
            </p>

            <h2>Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <h3>John Doe</h3>
                <p>CEO & Founder</p>
                <p>15+ years of industry experience</p>
              </div>
              <div className="team-member">
                <h3>Jane Smith</h3>
                <p>CTO</p>
                <p>Technology visionary and leader</p>
              </div>
              <div className="team-member">
                <h3>Mike Johnson</h3>
                <p>Head of Product</p>
                <p>User experience expert</p>
              </div>
              <div className="team-member">
                <h3>Sarah Williams</h3>
                <p>Customer Success</p>
                <p>Dedicated to your satisfaction</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;