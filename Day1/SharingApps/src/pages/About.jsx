import React from 'react';

function About() {
  return (
    <div className="page-container">
      <div className="about-content">
        <h1>ℹ️ Giới thiệu Ứng dụng Bộ đếm</h1>
        <p>
          <strong>Ứng dụng Bộ đếm</strong> là một ứng dụng React đơn giản nhưng mạnh mẽ, minh họa
          các thực tiễn phát triển web hiện đại bao gồm:
        </p>
        <ul style={{ color: '#555', lineHeight: '1.8' }}>
          <li>React Hooks (useState) để quản lý State</li>
          <li>React Router để điều hướng phía client</li>
          <li>Kiến trúc dựa trên Components</li>
          <li>CSS styling và thiết kế responsive</li>
          <li>UI hiện đại với các phần tử tương tác</li>
        </ul>
        <p>
          <strong>Tính năng:</strong>
        </p>
        <ul style={{ color: '#555', lineHeight: '1.8' }}>
          <li>Tăng giá trị của bộ đếm</li>
          <li>Giảm giá trị của bộ đếm</li>
          <li>Đặt lại bộ đếm về 0</li>
          <li>Điều hướng giữa các trang khác nhau</li>
        </ul>
        <p>
          Xây dựng với React 18.2.0 và React Router v7, ứng dụng này phục vụ như một nền tảng
          để hiểu rõ các mô hình phát triển React hiện đại.
        </p>
      </div>
    </div>
  );
}

export default About;
