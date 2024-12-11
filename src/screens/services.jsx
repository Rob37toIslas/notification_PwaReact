import React, { useState } from 'react';
import '../assets/Services.css'; 

const Services = () => {
  const [predial, setPredial] = useState('');
  const [agua, setAgua] = useState('');
  const [predialMessage, setPredialMessage] = useState('');
  const [aguaMessage, setAguaMessage] = useState('');

  const handlePredialPayment = (e) => {
    e.preventDefault();
    setPredialMessage(`Pago de predial realizado correctamente. Clave catastral: ${predial}`);
    setPredial(''); 
  };

  const handleAguaPayment = (e) => {
    e.preventDefault();
    setAguaMessage(`Pago de agua realizado correctamente. Número de cuenta: ${agua}`);
    setAgua(''); 
  };

  return (
    <div className="services-container">
      <h2 className="services-title">Nuestros Servicios</h2>
      
      {/* Pago de Predial */}
      <div className="service-section">
        <h3>Pago de Predial</h3>
        <form onSubmit={handlePredialPayment}>
          <label>
            Clave Catastral:
            <input
              type="text"
              value={predial}
              onChange={(e) => setPredial(e.target.value)}
              required
            />
          </label>
          <button type="submit">Realizar Pago</button>
        </form>
        {predialMessage && <p className="success-message">{predialMessage}</p>}
      </div>

      {/* Pago de Agua */}
      <div className="service-section">
        <h3>Pago de Agua</h3>
        <form onSubmit={handleAguaPayment}>
          <label>
            Número de Cuenta:
            <input
              type="text"
              value={agua}
              onChange={(e) => setAgua(e.target.value)}
              required
            />
          </label>
          <button type="submit">Realizar Pago</button>
        </form>
        {aguaMessage && <p className="success-message">{aguaMessage}</p>}
      </div>
    </div>
  );
};

export default Services;
