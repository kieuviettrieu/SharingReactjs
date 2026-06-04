import React, { useState } from 'react';
import './ManualDom.css';

function ManualDom() {
  const [reactCount, setReactCount] = useState(0);
  const [reactList, setReactList] = useState(['A', 'B', 'C']);

  const handleReactUpdate = () => {
    setReactCount((prev) => prev + 1);
    setReactList(() => ['A', 'B', 'C'].map((item) => `${item}-${reactCount + 1}`));
  };

  const handleReactReset = () => {
    setReactCount(0);
    setReactList(['A', 'B', 'C']);
  };

  return (
    <div className="manual-container">
      <div className="manual-content">
        <h1>🧩 Manual DOM vs React DOM</h1>
        <p className="manual-intro">
          Phần manual DOM đã được tách ra thành file HTML thuần để bạn thấy rõ cách cập nhật DOM thủ công bằng JavaScript.
          React giữ UI đồng bộ bằng cách render lại component theo state, tránh mất đồng bộ nếu quên cập nhật phần tử.
        </p>

        <div className="manual-grid">
          <section className="manual-panel manual-panel-left">
            <h2>🛠 Manual DOM bằng HTML + JS thuần</h2>
            <p>Phần này sử dụng file tĩnh <code>public/manual-dom.html</code>. Nội dung được render trực tiếp bằng HTML và DOM API.</p>
            <div className="iframe-container">
              <iframe
                title="Manual DOM Example"
                src="/manual-dom.html"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
            <div className="manual-code-block">
              <h3>File HTML thuần</h3>
              <pre>
                <code>{`public/manual-dom.html
<!DOCTYPE html>
<html>
  <body>
    ...
    <script>
      // DOM API thuần
    </script>
  </body>
</html>`}</code>
              </pre>
            </div>
          </section>

          <section className="manual-panel manual-panel-right">
            <h2>⚛️ React DOM bằng React</h2>
            <p>React render lại DOM dựa trên state. Khi state thay đổi, UI được cập nhật đồng bộ mà không cần dùng DOM API thủ công.</p>

            <div className="react-box">
              <div className="react-label">React count:</div>
              <div className="react-value">{reactCount}</div>
            </div>

            <div className="react-list-box">
              <h3>React Items</h3>
              <ul className="react-list">
                {reactList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="manual-buttons">
              <button className="btn btn-react" onClick={handleReactUpdate}>
                Cập nhật React
              </button>
              <button className="btn btn-reset" onClick={handleReactReset}>
                Reset React
              </button>
            </div>

            <div className="manual-code-block">
              <h3>Ví dụ code React</h3>
              <pre>
                <code>{`const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
};

return <div>{count}</div>;`}</code>
              </pre>
            </div>

            <div className="react-note">
              React đảm bảo UI luôn đồng bộ với state. Bạn không cần truy cập DOM trực tiếp.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ManualDom;
