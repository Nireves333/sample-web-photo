import React, { useEffect, useState } from 'react';
import './Portfolio.css';

function Portfolio() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://api.pexels.com/v1/curated?per_page=12', {
      headers: {
        Authorization:
          'VJ4xkmbUOEyQqCUDcPXWYOA35qvH0vRjgFf1jrlJrqi53hdDlRWyZKRd',
      },
    })
      .then((response) => response.json())
      .then((data) => setPhotos(data.photos))
      .catch((error) => console.error('Error fetching photos:', error));
  }, []);

  return (
    <div className="portfolio-container">
      <h1 className="sectionTitle">Portfolio</h1>
      <div className="grid-container">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="grid-item"
          >
            <img
              src={photo.src.large2x}
              alt={photo.photographer}
              className="portfolio-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
