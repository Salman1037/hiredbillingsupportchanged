// three service card dental medical insurance and on hover these effect that on which hover the card will scale up and show more details about the service. The card should have a title, an icon, and a brief description. The background color of the card should change on hover to indicate that it is interactive. The card should also have a shadow effect to give it a sense of depth.

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const ServiceCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  borderRadius: '10px',
    padding: '20px 20px 14px 20px',
    minWidth: 180,
    maxWidth: 210,
    minHeight: 180, // Increased height for all cards
    height: 210,    // Make all cards a little higher
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s, background-color 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
      backgroundColor: '#e0e0e0',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
}));

const ServiceCardComponent = ({ title, icon, description }) => {
  return (
    <ServiceCard style={{ position: 'relative', overflow: 'visible' }}>
      <CardContent style={{ textAlign: 'center', zIndex: 1 }}>
        <div style={{ fontSize: '40px', marginBottom: '10px' }}>{icon}</div>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      </CardContent>
      {/* Popup description */}
      <div className="service-desc-popup">
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </div>
      <style>{`
        .service-desc-popup {
          pointer-events: none;
          opacity: 0;
          position: absolute;
          left: 50%;
          bottom: -10px;
          transform: translate(-50%, 20px) scale(0.98);
          min-width: 220px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 8px 32px 0 rgba(139,92,246,0.13), 0 2px 8px 0 rgba(0,0,0,0.10);
          padding: 16px 18px;
          transition: opacity 0.32s cubic-bezier(.4,1,.4,1), transform 0.32s cubic-bezier(.4,1,.4,1);
          z-index: 10;
          font-size: 15px;
          color: #444;
          box-sizing: border-box;
          border: 1.5px solid #F3F0FF;
        }
        .MuiPaper-root:hover .service-desc-popup,
        .MuiPaper-root:focus-within .service-desc-popup {
          opacity: 1;
          pointer-events: auto;
          transform: translate(-50%, 0) scale(1);
        }
      `}</style>
    </ServiceCard>
  );
}
// tittle and description are passed as props to the component and the icon is also passed as a prop. The card will scale up and show more details about the service on hover, and the background color will change to indicate that it is interactive. The card also has a shadow effect to give it a sense of depth.
export default ServiceCardComponent;


