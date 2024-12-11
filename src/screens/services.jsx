import React, { useState } from 'react';
import '../assets/Services.css'; 

const Services = () => {
  // Usamos useState para almacenar la "base de datos" en estado
  const [balanceData, setBalanceData] = useState([
    { curp: 'ABC1234567890', predial: 1000, agua: 300 },
    { curp: 'XYZ9876543210', predial: 1500, agua: 500 },
    { curp: 'DEF5678901234', predial: 1200, agua: 400 },
    { curp: 'GHI2345678901', predial: 800, agua: 200 },
    { curp: 'JKL3456789012', predial: 2000, agua: 700 },
    { curp: 'MNO4567890123', predial: 950, agua: 250 },
    { curp: 'PQR5678901234', predial: 1800, agua: 600 },
    { curp: 'STU6789012345', predial: 1300, agua: 450 },
    { curp: 'VWX7890123456', predial: 1100, agua: 350 },
    { curp: 'YZA8901234567', predial: 1600, agua: 550 },
  ]);
  
  const [curp, setCurp] = useState('');
  const [predial, setPredial] = useState('');
  const [agua, setAgua] = useState('');
  const [predialMessage, setPredialMessage] = useState('');
  const [aguaMessage, setAguaMessage] = useState('');
  const [consultarMessage, setConsultarMessage] = useState('');

  const handlePredialPayment = (e) => {
    e.preventDefault();
    // Buscar y actualizar el balance de predial en el estado
    const balance = balanceData.find((data) => data.curp === curp);
    if (balance && balance.predial === parseFloat(predial)) {
      // Actualizar el balanceData si el pago es correcto
      const updatedBalanceData = balanceData.map(data =>
        data.curp === curp ? { ...data, predial: 0 } : data
      );
      setBalanceData(updatedBalanceData);
      setPredialMessage(`Pago de predial realizado correctamente. Clave catastral: ${predial}`);
      setPredial(''); // Limpiar el campo después del pago
    } else {
      setPredialMessage('El monto de predial no coincide con el saldo pendiente.');
    }
  };

  const handleAguaPayment = (e) => {
    e.preventDefault();
    // Buscar y actualizar el balance de agua en el estado
    const balance = balanceData.find((data) => data.curp === curp);
    if (balance && balance.agua === parseFloat(agua)) {
      // Actualizar el balanceData si el pago es correcto
      const updatedBalanceData = balanceData.map(data =>
        data.curp === curp ? { ...data, agua: 0 } : data
      );
      setBalanceData(updatedBalanceData);
      setAguaMessage(`Pago de agua realizado correctamente. Número de cuenta: ${agua}`);
      setAgua(''); // Limpiar el campo después del pago
    } else {
      setAguaMessage('El monto de agua no coincide con el saldo pendiente.');
    }
  };

  const handleConsulta = () => {
    // Buscar el saldo en la base de datos según el CURP
    const balance = balanceData.find((data) => data.curp === curp);
    
    if (balance) {
      // Si encuentra el CURP, asignar los saldos correspondientes y mostrar el mensaje
      setPredial(balance.predial);
      setAgua(balance.agua);
      setConsultarMessage(`Saldo pendiente de Predial: $${balance.predial}, Saldo pendiente de Agua: $${balance.agua}`);
    } else {
      // Si no se encuentra el CURP, mostrar el mensaje de error
      setConsultarMessage('CURP no encontrado, por favor verifica.');
      setPredial(''); // Limpiar el predial
      setAgua('');    // Limpiar el agua
    }
  };

  return (
    <div className="services-container">
      <h2 className="services-title">Nuestros Servicios</h2>
      
      {/* Consulta de Saldo */}
      <div className="service-section">
        <h3>Consulta de Saldo</h3>
        <label>
          Ingresa tu CURP:
          <input
            type="text"
            value={curp}
            onChange={(e) => setCurp(e.target.value)}
            required
          />
        </label>
        <button type="button" onClick={handleConsulta}>Consultar Saldo</button>
        {consultarMessage && <p className="success-message">{consultarMessage}</p>}
      </div>

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
