import React from 'react';
import './Button.css';

/**
 * Reusable Button Component
 * @param {string} variant - Style variant: 'primary', 'secondary', 'success', 'danger', 'outline'
 * @param {string} size - Size: 'sm', 'md', 'lg'
 * @param {boolean} disabled - Disable button
 * @param {function} onClick - Click handler
 * @param {React.ReactNode} children - Button content
 */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children,
  type = 'button',
  ...props
}) {
  const className = `btn btn-${variant} btn-${size}`;

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
