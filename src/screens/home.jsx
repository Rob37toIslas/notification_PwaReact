import React from 'react';

// Simulando un conjunto de noticias
const news = [
  {
    id: 1,
    title: 'Breaking News: New Technology Released',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, nulla euismod vehicula laoreet, risus felis aliquet metus, et malesuada erat odio ut sapien.',
    imageUrl: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    id: 2,
    title: 'Local News: New Park Opened in Town',
    body: 'Sed euismod, odio sit amet consequat dignissim, velit dui auctor odio, at sollicitudin nunc arcu sed ipsum. Nulla facilisi. Aenean euismod nisl vitae nisi dictum, at interdum odio convallis.',
    imageUrl: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    id: 3,
    title: 'Sports: Local Team Wins Championship',
    body: 'Curabitur efficitur, lectus vel vulputate suscipit, magna felis tincidunt nunc, vel volutpat ante ligula eu tortor. Fusce gravida urna et arcu fringilla, non tincidunt nulla feugiat.',
    imageUrl: 'https://via.placeholder.com/300x200',
    link: '#',
  }
];

const Home = () => {
  return (
    <div style={styles.container}>
      <h2>Welcome to the Home Page</h2>

      
      <div style={styles.newsContainer}>
        {news.map((article) => (
          <div key={article.id} style={styles.newsCard}>
            <img src={article.imageUrl} alt={article.title} style={styles.newsImage} />
            <h3 style={styles.newsTitle}>{article.title}</h3>
            <p style={styles.newsBody}>{article.body}</p>
            <a href={article.link} style={styles.newsLink}>Read more</a>
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
  },
  newsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
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
  newsCardHover: {
    transform: 'scale(1.05)',
  },
  newsImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  newsTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#333',
  },
  newsBody: {
    fontSize: '16px',
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

export default Home;
