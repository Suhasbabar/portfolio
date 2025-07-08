// components/CertificateCard.jsx
import React from 'react';

function CertificateCard({ title, description, image }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '16px',
    margin: '10px',
    width: '300px',
    backgroundColor: '#f9f9f9',
    boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '6px',
    marginBottom: '10px',
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imgStyle} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CertificateCard;
