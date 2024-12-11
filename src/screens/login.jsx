import React, { useState } from 'react';

const Login = () => {
  const [curp, setCurp] = useState('');
  const [userData, setUserData] = useState(null);

  const usersData = [
    {
      curp: 'ABC1234567890',
      nombre: 'Juan Pérez',
      edad: 70,
      predial: 1000,
      agua: 300,
      pension: 1500,
      pensionFecha: '2024-12-15', // Fecha de recepción de la pensión
    },
    {
      curp: 'IAIR991104HHGSSB01',
      nombre: 'Roberto Islas',
      edad: 25,
      predial: 0,
      agua: 300,
      pension: 0,
      pensionFecha: null,
    },
    {
      curp: 'XYZ9876543210',
      nombre: 'Ana López',
      edad: 60,
      predial: 1500,
      agua: 500,
      pension: 0,
      pensionFecha: null,
    },
    {
      curp: 'DEF5678901234',
      nombre: 'Carlos Gómez',
      edad: 68,
      predial: 1200,
      agua: 400,
      pension: 1600,
      pensionFecha: '2024-12-01', // Fecha de recepción de la pensión
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = usersData.find((user) => user.curp === curp);

    if (user) {
      setUserData(user); // Guardar los datos del usuario
    } else {
      alert('CURP no encontrado. Por favor, verifica.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="curp" style={styles.label}>
            CURP:
          </label>
          <input
            type="text"
            id="curp"
            value={curp}
            onChange={(e) => setCurp(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>

      {userData && (
        <div style={styles.userDetails}>
          <h3 style={styles.userDetailsTitle}>Detalles de Usuario:</h3>
          <p>
            <strong>Nombre:</strong> {userData.nombre}
          </p>
          <p>
            <strong>Saldo de Predial:</strong> ${userData.predial}
          </p>
          <p>
            <strong>Saldo de Agua:</strong> ${userData.agua}
          </p>

          {userData.edad > 65 && userData.pension > 0 && (
            <>
              <p>
                <strong>Pensión Recibida:</strong> ${userData.pension}
              </p>
              <p>
                <strong>Fecha de Recepción de la Pensión:</strong>{' '}
                {userData.pensionFecha}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '500px',
    margin: '0 auto',
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '16px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginTop: '5px',
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#8B0000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  userDetails: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  },
  userDetailsTitle: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#8B0000',
  },
};

export default Login;
