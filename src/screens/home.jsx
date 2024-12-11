import React from 'react';

const news = [
  {
    id: 1,
    title: 'Cuautepec: IEEH emite integrantes del Ayuntamiento',
    body: 'Estará conformado por el presidente electo, más 10 regidoras y siete regidores, quienes tomarán protesta el 15 de enero  ',
    imageUrl: 'https://www.elsoldehidalgo.com.mx/local/pv53uy-ieeh.jpg/alternates/LANDSCAPE_480/IEEH.jpg',
    link: 'https://www.elsoldetulancingo.com.mx/local/cuautepec-ieeh-emite-integrantes-del-ayuntamiento-12993095.html',
  },
  {
    id: 2,
    title: 'Con carambola en la México-Tuxpan, Tulancingo suma siete accidentes en 24 horas',
    body: 'Este  miércoles 20 de noviembre se presentaron dos nuevos siniestros sobre la vía federal que acumulan cinco heridos',
    imageUrl: 'https://www.elsoldehidalgo.com.mx/incoming/eg5o8l-accidentes-mexico-tuxpan.jpg/alternates/LANDSCAPE_768/Accidentes%20M%C3%A9xico-Tuxpan.jpg',
    link: 'https://www.elsoldetulancingo.com.mx/policiaca/con-carambola-en-la-mexico-tuxpan-tulancingo-suma-siete-accidentes-en-24-horas-12896955.html',
  },
  {
    id: 3,
    title: 'Hombre se avienta contra camión para ser atropellado en Tulancingo',
    body: 'En Tulancingo, Hidalgo, un hombre perdió la vida tras aventarse al paso de un camión pesado cuando este pasaba por el bulevar Emiliano Zapata, a la altura de una tienda departamental, un incidente similar a otro caso ocurrido en noviembre del año pasado en esta ciudad.',
    imageUrl: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1v4XTZ.img?w=768&h=434&m=6',
    link: 'https://www.msn.com/es-mx/noticias/mexico/hombre-se-avienta-contra-cami%C3%B3n-para-ser-atropellado-en-tulancingo/ar-AA1v4JZx',
  },
  {
    id: 4,
    title: 'Clima en Tulancingo: temperatura del martes 10 de diciembre',
    body: 'El Servicio Meteorológico Nacional (SMN), de la Comisión Nacional del Agua (Conagua), informó sobre el pronóstico del clima en Tulancingo para este lunes 10 de diciembre.',
    imageUrl: 'https://www.elsoldetulancingo.com.mx/local/ar6sq0-clima-en-tulancingo-10-de-diciembre/alternates/LANDSCAPE_768/Clima%20en%20Tulancingo%2010%20de%20diciembre',
    link: 'https://www.elsoldetulancingo.com.mx/local/clima-en-tulancingo-temperatura-del-martes-10-de-diciembre-12986428.html',
  },
  {
    id: 5,
    title: 'Estudiantes de la Utec Tulancingo desarrollan un sistema forense para la PGJEH ',
    body: 'Estudiantes de séptimo cuatrimestre de la carrera en Tecnologías de la Información, de la Universidad Tecnológica de Tulancingo (UTec), desarrollaron un Sistema de Planimetría Forense (SIPEFO) para peritos de la Procuraduría General de Justicia del Estado de Hidalgo (PGJEH). ',
    imageUrl: 'https://lajornadahidalgo.com/wp-content/uploads/2023/09/Estudiantes-sistema.jpg',
    link: 'https://lajornadahidalgo.com/estudiantes-de-la-utec-tulancingo-desarrollan-un-sistema-forense-para-la-pgjeh/',
  },
  {
    id: 6,
    title: 'Tulancingo: hallan a hombre sin vida en Lomas del Progreso',
    body: 'Un hombre fue hallado sin vida la noche del lunes 9 de diciembre, aproximadamente a las 21:40 horas, en la calle Grafito y Níquel, colonia Lomas del Progreso en Tulancingo.',
    imageUrl: 'https://www.elsoldetulancingo.com.mx/policiaca/wx03jp-cintas-policia-archivo-oem.jpeg/alternates/LANDSCAPE_768/Cintas%20polici%CC%81a%20Archivo%20OEM.jpeg',
    link: 'https://www.elsoldetulancingo.com.mx/policiaca/tulancingo-hallan-a-hombre-sin-vida-en-lomas-del-progreso-12991225.html',
  },
  {
    id: 7,
    title: 'Salud: Campaña de vacunación contra la gripe',
    body: 'El gobierno municipal ha lanzado una campaña gratuita de vacunación contra la gripe para proteger a los habitantes de Tulancingo durante la temporada invernal.',
    imageUrl: 'https://via.placeholder.com/300x200',
    link: '#',
  }
];

const Home = () => {
  return (
    <div style={styles.container}>
      <h2 style={{margin:'80px'}}>Noticias Tulancingo</h2>
      <p>Bienvenido a la página principal de Noticias Tulancingo, donde te traemos las últimas noticias de la ciudad.</p>
      
      <div style={styles.newsContainer}>
        {news.map((article) => (
          <div key={article.id} style={styles.newsCard}>
            <img src={article.imageUrl} alt={article.title} style={styles.newsImage} />
            <h3 style={styles.newsTitle}>{article.title}</h3>
            <p style={styles.newsBody}>{article.body}</p>
            <a href={article.link} style={styles.newsLink}>Leer más</a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  newsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '30px',
  },
  newsCard: {
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    padding: '15px',
    textAlign: 'left',
    transition: 'transform 0.3s ease-in-out',
  },
  newsImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  newsTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#333',
  },
  newsBody: {
    fontSize: '14px',
    color: '#666',
    marginTop: '10px',
    lineHeight: '1.5',
  },
  newsLink: {
    display: 'inline-block',
    marginTop: '15px',
    fontSize: '16px',
    color: '#4895cb',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
  newsLinkHover: {
    color: '#800000',
  },
};

// Agregar media queries para mejorar el diseño en pantallas más pequeñas
const responsiveStyles = {
  ...styles,
  newsContainer: {
    ...styles.newsContainer,
    gridTemplateColumns: 'repeat(auto-fill, minmax(100%, 1fr))', // Para pantallas muy pequeñas, las noticias ocupan toda la fila
  },
  newsTitle: {
    fontSize: '16px', // Hacer el tamaño de fuente más pequeño en pantallas pequeñas
  },
  newsBody: {
    fontSize: '12px', // Ajustar tamaño de texto en pantallas pequeñas
  },
};

export default Home;
