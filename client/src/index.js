import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Practiser from './pages/practiser'; 
import Navbar from './components/navbar';
import Payment from './pages/payment';
import Successful from './pages/successful';
import Failed from './pages/failed';
import ParticipantProvider from './context/participantProvider';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <ParticipantProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/practiser" element={<Practiser />} /> 
        <Route path="/payment" element={<Payment />} />
        <Route path="/successful" element={<Successful />} />
        <Route path="/failed" element={<Failed />} />
        
      </Routes>
      </ParticipantProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
