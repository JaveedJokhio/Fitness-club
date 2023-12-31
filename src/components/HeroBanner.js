import React from 'react'
import { Box,Typography,Button } from '@mui/material'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'212px',xs:'70px'},
        ml:{sm:'50px'}
    }} position='relative' p='20px'>
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{fontSize:{lg:'44px',xs:'40px'}}}
        mb='23px' mt='30px'
        >
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' marginBottom={4}>
            Checkout the most effected exercises.
        </Typography>
        <Button variant='contained' href='#exercises' sx={{backgroundColor:'#FF2625',padding:'10px'}}>Explore Exercises</Button>
        <Typography 
        fontWeight={600}
        color='#ff2625'
        sx={{opacity:'0.2' ,display:{lg:'block',xs:'none'},fontSize:'70px',mt:'30px'}}
        >
            "Once you learn to quit, it becomes a habit" ― Vince Lombardi Jr
        </Typography>
        <img src="https://pngimg.com/uploads/fitness/fitness_PNG45.png"  alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner