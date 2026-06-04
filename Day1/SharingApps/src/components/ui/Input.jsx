import React from 'react';
import './Input.css';

/**
 * Reusable Input Component
 * @param {string} type - Input type: 'text', 'email', 'password', 'number', etc.
 * @param {string} placeholder - Placeholder text
 * @param {string} label - Label for input
 * @param {string} value - Current value
 * @param {function} onChange - Change handler
 * @param {boolean} required - Mark as required
 * @param {string} error - Error message
 */
function Input({
  type = 'text',
  placeholder = '',
  label = '',
  value = '',
  onChange,
  required = false,
  error = '',
  ...props
}) {
  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <input
        type={type}
        className={`input-field ${error ? 'input-error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <div className="input-error-message">{error}</div>}
    </div>
  );
}

export default Input;
