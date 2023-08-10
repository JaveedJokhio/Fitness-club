import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';

function App() {
  return (
    <Box width='400px' sx={{width:{xl:'1488px'}}} m='auto'>
      <Router> {/* Wrap your routes in a Router component */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
          
        </Routes>
      </Router>
      <Footer/>
    </Box>
  );
}

export default App;
