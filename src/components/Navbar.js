import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Navbar = () => {
  return (
    <Stack 
    direction='row'
    
    sx={{gap:{sm:'122px',xs:'40px'},mt:{sm:'32px',xs:'20px'}}}
    justifyContent="none"
    px='20px'
    >
        <Link to='/'>
          <Typography className='title' variant='h4' sx={{ textDecoration: 'none',color:'#FF2625',p:'20px',fontWeight:'bold' }}>
            FiTNesS CLuB
            <FitnessCenterIcon sx={{fontSize:'40px'}}/>
          </Typography>
        {/* <img src={Logo} alt='logo' style={{width:'48px',height:'48px',margin:'0 20px'}}/> */}
        </Link>
        <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
            <Link to='/' style={{textDecoration:'none',color:'#3A1212',borderBottom:'5px solid #FF2625',}}>Home</Link>
            <a href='#exercises' style={{textDecoration:'none',color:'#3A1212',borderTop:'5px solid #FF2625'}}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar