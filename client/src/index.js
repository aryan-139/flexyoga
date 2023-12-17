import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Practiser from './pages/practiser'; 
import Navbar from './components/navbar';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/practiser" element={<Practiser />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
