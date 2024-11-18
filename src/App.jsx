import React, { useEffect, useState } from "react";

// Función para obtener datos de IndexedDB
const getFromIndexedDB = (key) => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("firebase-notifications", 1);

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction("notifications", "readonly");
      const store = transaction.objectStore("notifications");
      const getRequest = store.get(key);

      getRequest.onsuccess = () => {
        resolve(getRequest.result?.value || "Sin notificaciones");
      };
      getRequest.onerror = (error) => {
        reject(error);
      };
    };

    request.onerror = (error) => {
      reject(error);
    };
  });
};

const App = () => {
  const [notificationTitle, setNotificationTitle] = useState("No hay notificaciones");

  useEffect(() => {
    // Obtener el título de la última notificación al cargar el componente
    getFromIndexedDB("notificacion")
      .then((title) => setNotificationTitle(title))
      .catch((error) => console.error("Error al obtener notificación:", error));
  }, []);

  // Estilos en línea
  const styles = {
    appContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      padding: "20px",
    },
    header: {
      background: "linear-gradient(45deg, #4895cb, #e91e63)",
      width: "100%",
      padding: "20px 0",
      textAlign: "center",
      color: "#fff",
      borderRadius: "10px",
    },
    mainContent: {
      background: "#fff",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      padding: "30px",
      borderRadius: "10px",
      maxWidth: "500px",
      width: "100%",
      marginTop: "20px",
    },
    notificationText: {
      fontSize: "1.2em",
      color: "#4895cb",
      padding: "10px",
      background: "#e0f7fa",
      borderRadius: "5px",
      boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.1)",
    }
  };

  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <h1>🚀 Bienvenido a mi PWA</h1>
      </header>
      <main style={styles.mainContent}>
        <h2>📩 Notificaciones recibidas:</h2>
        <p style={styles.notificationText}>{notificationTitle}</p>
      </main>
    </div>
  );
};

export default App;
