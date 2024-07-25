import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>All rights are reserved @TextUtils.com</p>
      <style jsx>{`
        .footer {
        margin-top:50px;
          background: linear-gradient(135deg, rgba(72, 0, 72, 0.8), rgba(160, 0, 96, 0.8), rgba(0, 0, 128, 0.8));
          color: #e0e0e0;
          text-align: center;
          padding: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5), 0 -10px 20px rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          width: 100%; /* Ensure the footer spans the full width */
          position: relative; /* Ensure it flows naturally at the end of the content */
          bottom: 0;
          left: 0;
        }

        .footer p {
          margin: 0;
          font-size: 1rem;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
