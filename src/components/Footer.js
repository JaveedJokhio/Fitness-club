import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => (
  <Box
    mt="80px"
    sx={{
      position: 'relative',
      backgroundColor: '#FA2825',
      padding: '80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Typography variant="h5" sx={{ color: 'white', fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="20px">
      Made by Javeed
    </Typography>

    <Stack direction="row" spacing={2} sx={{ mb: '20px' }}>
      <FacebookIcon className='social-icons' sx={{ color: 'white', fontSize: '30px' }} />
      <TwitterIcon className='social-icons' sx={{ color: 'white', fontSize: '30px' }} />
      <InstagramIcon className='social-icons' sx={{ color: 'white', fontSize: '30px' }} />
    </Stack>

    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Link to="/" sx={{ color: 'white', mx: 2,textDecoration:'none' }}>Home</Link>
      <Link to="https://github.com/yourusername" sx={{ color: 'white', mx: 2,textDecoration:'none' }} target="_blank">GitHub</Link>
      <Link to="https://www.linkedin.com/in/yourusername" sx={{ color: 'white', mx: 2,textDecoration:'none' }} target="_blank">LinkedIn</Link>
     
    </Box>
  </Box>
);

export default Footer;
