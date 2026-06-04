import React, { useState } from 'react';
import { Button, Input, Card, Badge, Alert } from '../components/ui';
import './Components.css';

function ComponentsPage() {
  const [inputValue, setInputValue] = useState('');
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="components-container">
      <div className="components-content">
        <h1>📦 Các thành phần React (Components)</h1>
        <p className="components-intro">
          Đây là thư viện các component tái sử dụng được xây dựng theo nguyên tắc Component-Based Architecture.
          Mỗi component được thiết kế để độc lập, tái sử dụng và dễ mở rộng.
        </p>

        {/* Button Component */}
        <Card title="🔘 Button Component" className="component-card">
          <p className="component-description">
            Đây là button có thể tùy chỉnh màu sắc, kích thước, và trạng thái.
          </p>

          <div className="demo-section">
            <h3>Variants (Màu sắc)</h3>
            <div className="demo-grid">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </div>

          <div className="demo-section">
            <h3>Sizes (Kích thước)</h3>
            <div className="demo-grid">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div className="demo-section">
            <h3>States (Trạng thái)</h3>
            <div className="demo-grid">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>

          <div className="code-block">
            <pre><code>{`import { Button } from '../components/ui';

<Button variant="primary" onClick={() => {}}>
  Click me
</Button>`}</code></pre>
          </div>
        </Card>

        {/* Input Component */}
        <Card title="✏️ Input Component" className="component-card">
          <p className="component-description">
            Input field với label, validation, và error message.
          </p>

          <div className="demo-section">
            <h3>Basic Input</h3>
            <Input
              label="Tên của bạn"
              placeholder="Nhập tên..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
          </div>

          <div className="demo-section">
            <h3>Input với Error</h3>
            <Input
              label="Email"
              type="email"
              placeholder="example@email.com"
              error="Email không hợp lệ"
              required
            />
          </div>

          <div className="demo-section">
            <h3>Input Types</h3>
            <Input label="Password" type="password" placeholder="Nhập mật khẩu" />
            <Input label="Number" type="number" placeholder="Nhập số" />
          </div>

          <div className="code-block">
            <pre><code>{`import { Input } from '../components/ui';

<Input
  label="Username"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  error={error}
  required
/>`}</code></pre>
          </div>
        </Card>

        {/* Card Component */}
        <Card title="📋 Card Component" className="component-card">
          <p className="component-description">
            Container để nhóm nội dung có liên quan.
          </p>

          <div className="demo-section">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <Card title="Card 1">
                Đây là nội dung của card 1
              </Card>
              <Card title="Card 2">
                Đây là nội dung của card 2
              </Card>
            </div>
          </div>

          <div className="code-block">
            <pre><code>{`import { Card } from '../components/ui';

<Card title="My Card">
  Card content here
</Card>`}</code></pre>
          </div>
        </Card>

        {/* Badge Component */}
        <Card title="🏷️ Badge Component" className="component-card">
          <p className="component-description">
            Nhãn nhỏ để hiển thị trạng thái hoặc danh mục.
          </p>

          <div className="demo-section">
            <h3>Color Variants</h3>
            <div className="badge-grid">
              <Badge variant="blue">New</Badge>
              <Badge variant="green">Active</Badge>
              <Badge variant="red">Archived</Badge>
              <Badge variant="yellow">Pending</Badge>
              <Badge variant="gray">Inactive</Badge>
            </div>
          </div>

          <div className="code-block">
            <pre><code>{`import { Badge } from '../components/ui';

<Badge variant="green">Active</Badge>
<Badge variant="red">Inactive</Badge>`}</code></pre>
          </div>
        </Card>

        {/* Alert Component */}
        <Card title="⚠️ Alert Component" className="component-card">
          <p className="component-description">
            Thông báo để hiển thị các thông tin, cảnh báo hoặc lỗi.
          </p>

          <div className="demo-section">
            <Alert type="info" title="Thông tin" onClose={() => {}}>
              Đây là thông báo thông tin
            </Alert>
            <Alert type="success" title="Thành công" onClose={() => {}}>
              Hoạt động đã hoàn thành thành công
            </Alert>
            <Alert type="warning" title="Cảnh báo" onClose={() => {}}>
              Vui lòng kiểm tra lại thông tin
            </Alert>
            <Alert type="error" title="Lỗi" onClose={() => {}}>
              Đã xảy ra lỗi, vui lòng thử lại
            </Alert>
          </div>

          <div className="code-block">
            <pre><code>{`import { Alert } from '../components/ui';

<Alert type="success" title="Success" onClose={() => {}}>
  Operation completed successfully
</Alert>`}</code></pre>
          </div>
        </Card>

        {/* Architecture */}
        <Card title="🏗️ Cấu trúc Component Architecture" className="component-card">
          <p className="component-description">
            Component được tổ chức theo cấu trúc chuẩn:
          </p>

          <div className="architecture-box">
            <pre><code>{`src/
├── components/
│   ├── ui/                    # Reusable UI Components
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   ├── Input.jsx
│   │   ├── Input.css
│   │   ├── Card.jsx
│   │   ├── Card.css
│   │   ├── Badge.jsx
│   │   ├── Badge.css
│   │   ├── Alert.jsx
│   │   ├── Alert.css
│   │   └── index.js           # Central exports
│   └── Navigation.jsx
├── pages/                     # Page Components
│   ├── Home.jsx
│   ├── CounterPage.jsx
│   ├── StateFlow.jsx
│   ├── StateBatching.jsx
│   ├── ManualDom.jsx
│   ├── Components.jsx         # NEW: Components Showcase
│   └── About.jsx
└── App.jsx`}</code></pre>
          </div>

          <h3>Lợi ích của Component Architecture:</h3>
          <ul className="benefits-list">
            <li>✅ <strong>Tái sử dụng</strong>: Một component, nhiều nơi sử dụng</li>
            <li>✅ <strong>Dễ bảo trì</strong>: Thay đổi logic ở một chỗ</li>
            <li>✅ <strong>Dễ test</strong>: Mỗi component độc lập</li>
            <li>✅ <strong>Mở rộng dễ</strong>: Thêm props và variants mới</li>
            <li>✅ <strong>Consistency</strong>: Giao diện đồng nhất trong app</li>
          </ul>

          <h3>Cách import:</h3>
          <div className="code-block">
            <pre><code>{`// Cách 1: Import từ index.js
import { Button, Input, Card, Badge, Alert } from '../components/ui';

// Cách 2: Import trực tiếp
import Button from '../components/ui/Button';`}</code></pre>
          </div>
        </Card>

        {/* Best Practices */}
        <Card title="💡 Best Practices" className="component-card">
          <div className="best-practices">
            <div className="practice-item">
              <h4>1. Props Documentation</h4>
              <p>Mỗi component có JSDoc comments để giải thích các props</p>
            </div>
            <div className="practice-item">
              <h4>2. Naming Convention</h4>
              <p>Component theo CamelCase, CSS class theo kebab-case</p>
            </div>
            <div className="practice-item">
              <h4>3. Separation of Concerns</h4>
              <p>HTML/JSX trong .jsx, CSS trong .css riêng biệt</p>
            </div>
            <div className="practice-item">
              <h4>4. Prop Validation</h4>
              <p>Định nghĩa default props và kiểu dữ liệu</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ComponentsPage;
