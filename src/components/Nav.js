import React from 'react';
// import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <>
      <div className="header">
        <h1>{props.title}</h1>
        
      </div>
      <style jsx>{`
        .header {
          background: linear-gradient(135deg, rgba(72, 0, 72, 0.8), rgba(160, 0, 96, 0.8), rgba(0, 0, 128, 0.8));
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(15px);
          border-radius: 15px;
          padding: 10px 20px;
          text-align: center;
          color: #e0e0e0;
          text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
          margin: 20px auto;
          max-width: 800px;
          position: relative;
          overflow: hidden;
        }

        .header::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 204, 255, 0.1));
          opacity: 0.3;
          mix-blend-mode: overlay;
          pointer-events: none;
          border-radius: 15px;
        }

        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: bold;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ffffff;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .icons {
          display: flex;
          justify-content: center;
          list-style: none;
          padding: 0;
          margin: 20px 0 0;
        }

        .icons li {
          margin: 0 20px;
          font-size: 1.2rem;
          position: relative;
        }

        .icons li a {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }

        .icons li a::before, .icons li a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: #ffffff;
          transition: width 0.3s ease;
        }

        .icons li a::before {
          opacity: 0.5;
        }

        .icons li a:hover::before, .icons li a:hover::after {
          width: 100%;
        }

        .icons li a:hover {
          color: #00ffcc;
          text-shadow: 0 0 10px rgba(0, 255, 204, 0.8);
        }
      `}</style>
    </>
  );
}

export default Nav;
