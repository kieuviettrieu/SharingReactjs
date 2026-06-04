import React from 'react';
import { Card } from '../components/ui';
import Counter from '../components/Counter.jsx';
import './CounterPage.css';

function CounterPage() {
  return (
    <div className="counter-page-container">
      <div className="counter-page-content">
        <h1>🔢 Ứng dụng Bộ đếm</h1>
        <p className="page-intro">
          Đây là một ví dụ đơn giản về cách sử dụng useState Hook để quản lý state trong React.
        </p>
        
        <div className="counter-wrapper">
          <Counter />
        </div>

        <Card title="📚 Lộc trình học tập" className="learning-card">
          <div className="learning-steps">
            <div className="step">
              <span className="step-number">1</span>
              <div>
                <h3>Import useState</h3>
                <p>Nhập Hook useState từ React</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <div>
                <h3>Khởi tạo State</h3>
                <p>Tạo state: const [count, setCount] = useState(0)</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <div>
                <h3>Tạo Hàm xử lý</h3>
                <p>Viết các hàm tăng, giảm, và reset count</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <div>
                <h3>Render UI</h3>
                <p>Render giá trị count và các nút bấm</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CounterPage;
