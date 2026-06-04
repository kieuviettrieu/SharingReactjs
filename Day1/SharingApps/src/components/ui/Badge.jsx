import React from 'react';
import './Badge.css';

/**
 * Reusable Badge Component
 * @param {string} variant - Color variant: 'blue', 'green', 'red', 'yellow', 'gray'
 * @param {React.ReactNode} children - Badge content
 */
function Badge({ variant = 'blue', children }) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}

export default Badge;
