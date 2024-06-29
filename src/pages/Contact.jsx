import React, { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    fetch('https://api.pexels.com/v1/curated?per_page=1', {
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
    <div className="contact-container">
      {photo && (
        <div className="photo-container">
          <img
            src={photo.src.large2x}
            alt={photo.photographer}
            className="contact-photo"
          />
        </div>
      )}
      <div className="form-container">
        <h1 className="sectionTitle">Contact</h1>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
            />
          </div>
          <button
            type="button"
            className="submit-button"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
