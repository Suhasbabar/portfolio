// components/Certificates.jsx
import React from 'react';
import CertificateCard from './CertificateCard';

function Certificates() {
  const certificates = [
    {
      title: 'React Basics',
      description: 'Learned the fundamentals of React including components and hooks.',
      image: 'https://via.placeholder.com/300x180?text=React+Certificate',
    },
    {
      title: 'Full Stack Bootcamp',
      description: 'Completed MERN stack training: MongoDB, Express, React, and Node.',
      image: 'https://via.placeholder.com/300x180?text=Full+Stack+Bootcamp',
    },
    {
      title: 'JavaScript Mastery',
      description: 'Mastered ES6+, async programming, and advanced JavaScript concepts.',
      image: 'https://via.placeholder.com/300x180?text=JavaScript+Mastery',
    },
  ];

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
      {certificates.map((cert, index) => (
        <CertificateCard key={index} {...cert} />
      ))}
    </div>
  );
}

export default Certificates;
