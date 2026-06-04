import React from 'react';
import './Card.css';

/**
 * Reusable Card Component
 * @param {string} title - Card title
 * @param {React.ReactNode} children - Card content
 * @param {string} className - Additional CSS classes
 */
function Card({ title, children, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {title && <div className="card-header">{title}</div>}
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
