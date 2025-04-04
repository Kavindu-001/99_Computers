// src/components/TeamMemberCard.jsx
import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const TeamMemberCard = ({ member, index }) => {
  return (
    <motion.div
      className="team-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="team-card-image">
        <img src={member.image} alt={member.name} />
        <div className="team-card-social">
          {member.social.linkedin && (
            <a href={member.social.linkedin} aria-label={`${member.name} LinkedIn`}>
              <FaLinkedin />
            </a>
          )}
          {member.social.twitter && (
            <a href={member.social.twitter} aria-label={`${member.name} Twitter`}>
              <FaTwitter />
            </a>
          )}
        </div>
      </div>
      <div className="team-card-info">
        <h3>{member.name}</h3>
        <p className="team-role">{member.role}</p>
        <p className="team-bio">{member.bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;