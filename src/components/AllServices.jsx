// make sure that will be add react icons   and in this that which are description its on hover cards will be show like popup or any smooth effect will be 

import React from 'react';
import { Box, Typography } from '@mui/material';
import ServiceCardComponent from './servicecard';
import { FaTooth, FaStethoscope, FaShieldAlt } from 'react-icons/fa';

const AllServices = () => {
  const services = [
    {
        title: 'Dental Services',
        icon: <FaTooth />,
        description: 'Comprehensive dental care including cleanings, fillings, and cosmetic procedures.',
    },
    {
        title: 'Medical Services',
        icon: <FaStethoscope />,
        description: 'General health check-ups, chronic disease management, and preventive care.',
    },
    {
        title: 'Insurance Services',
        icon: <FaShieldAlt />,
        description: 'Health insurance plans, claims assistance, and policy management.',
    },
  ];

    return (
        <Box sx={{ padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Our Services
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {services.map((service, index) => (
                    <ServiceCardComponent
                        key={index}
                        title={service.title}
                        icon={service.icon}
                        description={service.description}
                    />
                ))}
            </Box>
        </Box>
    );
}
export default AllServices;