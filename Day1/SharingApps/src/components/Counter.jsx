import React, { useState } from 'react';
import { Button, Card } from './ui';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <Card title="Ứng dụng Bộ đếm" className="counter-container">
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <Button variant="danger" onClick={decrement}>
          ➖ Giảm
        </Button>
        <Button variant="secondary" onClick={reset}>
          🔄 Đặt lại
        </Button>
        <Button variant="success" onClick={increment}>
          ➕ Tăng
        </Button>
      </div>
    </Card>
  );
}

export default Counter;
