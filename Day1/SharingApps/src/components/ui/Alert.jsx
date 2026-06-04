import React from 'react';
import './Alert.css';

/**
 * Reusable Alert Component
 * @param {string} type - Alert type: 'info', 'success', 'warning', 'error'
 * @param {string} title - Alert title
 * @param {React.ReactNode} children - Alert message
 * @param {function} onClose - Close handler
 */
function Alert({ type = 'info', title, children, onClose }) {
  return (
    <div className={`alert alert-${type}`}>
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        <div className="alert-message">{children}</div>
      </div>
      {onClose && (
        <button
          className="alert-close"
          onClick={onClose}
          aria-label="Close alert"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default Alert;
