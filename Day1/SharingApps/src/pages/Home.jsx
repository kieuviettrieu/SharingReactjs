import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Badge } from '../components/ui';
import './Home.css';

function Home() {
  return (
    <div className="page-container">
      <div className="home-content">
        <h1>🏠 Chào mừng đến Ứng dụng Bộ đếm</h1>
        
        <Card title="ℹ️ Giới thiệu" className="intro-card">
          <p>
            Đây là một ứng dụng React hiện đại được xây dựng với React Router để điều hướng liền mạch
            giữa các trang khác nhau.
          </p>
          <p>
            Nhấp vào liên kết "Bộ đếm" trong menu điều hướng để truy cập tính năng bộ đếm,
            hoặc khám phá các trang khác để tìm hiểu thêm về React.
          </p>
        </Card>

        <Card title="📚 Các tính năng" className="features-card">
          <div className="features-list">
            <div className="feature-item">
              <Badge variant="blue">Component</Badge>
              <span>Xem các component tái sử dụng</span>
            </div>
            <div className="feature-item">
              <Badge variant="green">State Flow</Badge>
              <span>Học cách React update state</span>
            </div>
            <div className="feature-item">
              <Badge variant="yellow">Batching</Badge>
              <span>Hiểu về State Batching</span>
            </div>
            <div className="feature-item">
              <Badge variant="red">Manual DOM</Badge>
              <span>So sánh DOM API vs React</span>
            </div>
          </div>
        </Card>

        <div className="home-buttons">
          <Link to="/counter" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="lg">🔢 Đi đến Bộ đếm</Button>
          </Link>
          <Link to="/components" style={{ textDecoration: 'none' }}>
            <Button variant="outline" size="lg">📦 Xem Components</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
