import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          ⚛️ Ứng dụng Bộ đếm
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive('/')}>
              🏠 Trang chủ
            </Link>
          </li>
          <li>
            <Link to="/counter" className={isActive('/counter')}>
              🔢 Bộ đếm
            </Link>
          </li>
          <li>
            <Link to="/state-flow" className={isActive('/state-flow')}>
              🚀 State Flow
            </Link>
          </li>
          <li>
            <Link to="/state-batching" className={isActive('/state-batching')}>
              ⚡ Batching
            </Link>
          </li>
          <li>
            <Link to="/manual-dom" className={isActive('/manual-dom')}>
              🧩 Manual DOM
            </Link>
          </li>
          <li>
            <Link to="/components" className={isActive('/components')}>
              📦 Components
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about')}>
              ℹ️ Giới thiệu
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
