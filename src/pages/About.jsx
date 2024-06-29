import React, { useEffect, useState } from 'react';
import './About.css';

function About() {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    fetch('https://api.pexels.com/v1/search?query=landscape&per_page=1', {
      headers: {
        Authorization:
          'VJ4xkmbUOEyQqCUDcPXWYOA35qvH0vRjgFf1jrlJrqi53hdDlRWyZKRd', // Replace with your Pexels API key
      },
    })
      .then((response) => response.json())
      .then((data) => setPhoto(data.photos[0]))
      .catch((error) => console.error('Error fetching photo:', error));
  }, []);

  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          Welcome! I'm a photographer with a passion for capturing the beauty of
          the world. I have been in the industry for over 10 years and
          specialize in portrait and landscape photography.
        </p>
        <p>
          My journey began with a simple point-and-shoot camera, and over the
          years, I've honed my skills and invested in professional equipment to
          ensure I deliver the highest quality images to my clients.
        </p>
      </div>
      {photo && (
        <div className="about-photo">
          <img
            src={photo.src.large2x}
            alt={photo.photographer}
            className="photo-image"
          />
        </div>
      )}
    </div>
  );
}

export default About;
