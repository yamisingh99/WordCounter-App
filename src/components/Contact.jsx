import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-header">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-group">
          <label htmlFor="name" className="contact-form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact-form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form-group">
          <label htmlFor="email" className="contact-form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form-group">
          <label htmlFor="message" className="contact-form-label">Message:</label>
          <textarea
            id="message"
            name="message"
            className="contact-form-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-form-submit">Send Message</button>
      </form>
      <footer className="contact-footer">
        <p>All rights reserved at <a href="https://textutils.com" target="_blank" rel="noopener noreferrer">TextUtils.com</a></p>
      </footer>
      <style jsx>{`
        .contact-container {
          background: linear-gradient(135deg, #3d3b9f, #e02f7c, #1e1e4f);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 20px;
          max-width: 600px;
          margin: 50px auto; /* Center container horizontally */
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.7);
          color: #e0e0e0;
          display: flex;
          flex-direction: column;
          align-items: center; /* Center content horizontally */
        }

        .contact-header {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #ffffff;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
          text-align: center; /* Center text */
        }

        .contact-form {
          width: 100%;
          max-width: 500px; /* Adjust to fit your design */
          display: flex;
          flex-direction: column;
        }

        .contact-form-group {
          margin-bottom: 15px;
        }

        .contact-form-label {
          font-size: 1.2rem;
          color: #ffffff;
          margin-bottom: 5px;
          display: block;
          text-align: left; /* Align label text */
        }

        .contact-form-input, .contact-form-textarea {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          color: #ffffff;
          padding: 10px;
          width: 100%;
          resize: none;
          backdrop-filter: blur(10px);
          box-sizing: border-box;
        }

        .contact-form-textarea {
          min-height: 100px;
        }

        .contact-form-submit {
          background: rgba(255, 105, 180, 0.3);
          border: none;
          border-radius: 8px;
          color: #ffffff;
          padding: 10px 20px;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .contact-form-submit:hover {
          background: rgba(255, 105, 180, 0.5);
        }

        .contact-footer {
          margin-top: 20px;
          text-align: center;
        }

        .contact-footer p {
          margin: 5px 0;
          font-size: 0.9rem;
        }

        .contact-footer a {
          color: #e02f7c;
          text-decoration: none;
        }

        .contact-footer a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default ContactPage;
