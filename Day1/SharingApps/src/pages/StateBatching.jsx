import React, { useState, useCallback, useRef } from 'react';
import './StateBatching.css';

function StateBatching() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  
  const [logs, setLogs] = useState([
    { 
      timestamp: new Date().toLocaleTimeString('vi-VN'), 
      type: 'MOUNT', 
      message: 'Component được mounted',
      color: '#4ec9b0'
    }
  ]);
  
  const renderCountRef = useRef(1);
  const stateUpdateCountRef = useRef(0);

  const addLog = useCallback((type, message) => {
    const typeColors = {
      'MOUNT': '#4ec9b0',
      'STATE_CALL': '#ce9178',
      'BATCHING': '#b5cea8',
      'RENDER': '#dcdcaa',
      'COMPLETE': '#6a9955'
    };

    const newLog = {
      timestamp: new Date().toLocaleTimeString('vi-VN'),
      type: type,
      message: message,
      color: typeColors[type] || '#ce9178'
    };
    setLogs(prevLogs => [newLog, ...prevLogs]);
  }, []);


  // ✅ Ví dụ 1: Batching - Gộp nhiều setState cùng 1 hàn sự kiện
  const handleBatchUpdate = () => {
    console.clear();
    console.log('%c=== REACT STATE BATCHING DEMO ===', 'color: #667eea; font-size: 16px; font-weight: bold;');
    
    stateUpdateCountRef.current = 0;

    console.log('%c1️⃣ GỌI setCount1 (count1 + 1)', 'color: #ce9178; font-weight: bold;');
    addLog('STATE_CALL', '🎯 Gọi setCount1(count1 + 1)');
    stateUpdateCountRef.current++;
    
    console.log('%c2️⃣ GỌI setCount2 (count2 + 1)', 'color: #ce9178; font-weight: bold;');
    addLog('STATE_CALL', '🎯 Gọi setCount2(count2 + 1)');
    stateUpdateCountRef.current++;
    
    console.log('%c3️⃣ GỌI setCount3 (count3 + 1)', 'color: #ce9178; font-weight: bold;');
    addLog('STATE_CALL', '🎯 Gọi setCount3(count3 + 1)');
    stateUpdateCountRef.current++;

    console.log('%c⚙️ BATCHING: React gộp 3 setState thành 1 lần update', 'color: #b5cea8; font-weight: bold;');
    addLog('BATCHING', `⚙️ BATCHING: ${stateUpdateCountRef.current} setState được gộp → 1 lần re-render`);
    
    console.log('%cReact sẽ re-render component CHỈ 1 lần (không phải 3 lần)', 'color: #b5cea8;');

    // Gọi tất cả setState cùng lúc
    setCount1(count1 + 1);
    setCount2(count2 + 1);
    setCount3(count3 + 1);

    // Simulate delay để component render
    setTimeout(() => {
      renderCountRef.current++;
      
      console.log('%c🎨 COMPONENT RE-RENDER', 'color: #dcdcaa; font-weight: bold;');
      console.log(`%cTổng lần setState gọi: ${stateUpdateCountRef.current}`, 'color: #dcdcaa;');
      console.log(`%cTổng lần re-render: 1 lần (Batching hoạt động!)`, 'color: #dcdcaa;');
      
      addLog('RENDER', `🔄 Component re-rendered: 1 lần (Batching tối ưu)`);
      addLog('COMPLETE', `✅ 3 setState → 1 re-render (Hiệu suất: ${(100 * 2/3).toFixed(0)}% tối ưu!)`);
    }, 50);
  };

  // ❌ Ví dụ 2: Không Batching - setState bên trong async callback
  const handleNoBatchUpdate = () => {
    console.clear();
    console.log('%c=== NO BATCHING (Async Callback) ===', 'color: #d16969; font-size: 16px; font-weight: bold;');
    
    stateUpdateCountRef.current = 0;

    // Dùng setTimeout - React sẽ gọi setState 3 lần riêng biệt
    setTimeout(() => {
      console.log('%c1️⃣ ASYNC: Gọi setCount1 từ setTimeout', 'color: #ce9178; font-weight: bold;');
      addLog('STATE_CALL', '❌ Gọi setCount1 từ async callback');
      stateUpdateCountRef.current++;
      setCount1(count1 + 10);

      console.log('%c⚠️ React sẽ RE-RENDER lần 1 (Không batching vì async)', 'color: #d16969; font-weight: bold;');
      renderCountRef.current++;
    }, 100);

    setTimeout(() => {
      console.log('%c2️⃣ ASYNC: Gọi setCount2 từ setTimeout', 'color: #ce9178; font-weight: bold;');
      addLog('STATE_CALL', '❌ Gọi setCount2 từ async callback');
      stateUpdateCountRef.current++;
      setCount2(count2 + 10);
      
      console.log('%b⚠️ React sẽ RE-RENDER lần 2 (Không batching vì async)', 'color: #d16969; font-weight: bold;');
      renderCountRef.current++;
    }, 150);

    setTimeout(() => {
      console.log('%c3️⃣ ASYNC: Gọi setCount3 từ setTimeout', 'color: #ce9178; font-weight: bold;');
      addLog('STATE_CALL', '❌ Gọi setCount3 từ async callback');
      stateUpdateCountRef.current++;
      setCount3(count3 + 10);
      
      console.log('%c⚠️ React sẽ RE-RENDER lần 3 (Không batching vì async)', 'color: #d16969; font-weight: bold;');
      renderCountRef.current++;
      
      addLog('COMPLETE', `❌ 3 setState → 3 re-render (Hiệu suất: ${(100 * 1/3).toFixed(0)}% tối ưu) - NÃO TỐT!`);
    }, 200);

    addLog('RENDER', `⚠️ Async setState - Không Batching - Sẽ re-render 3 lần`);
  };

  const handleClearLogs = () => {
    setLogs([
      { 
        timestamp: new Date().toLocaleTimeString('vi-VN'), 
        type: 'MOUNT', 
        message: 'Logs đã được xóa',
        color: '#4ec9b0'
      }
    ]);
    renderCountRef.current = 1;
    stateUpdateCountRef.current = 0;
  };

  return (
    <div className="batching-container">
      <div className="batching-content">
        <h1>🚀 React State Batching Demo</h1>
        <p className="subtitle">Xem cách React gộp nhiều setState cùng lúc để tối ưu hóa hiệu suất</p>

        <div className="states-section">
          <h2>📊 State Hiện Tại</h2>
          <div className="states-display">
            <div className="state-box">
              <span className="state-label">Count 1:</span>
              <span className="state-value">{count1}</span>
            </div>
            <div className="state-box">
              <span className="state-label">Count 2:</span>
              <span className="state-value">{count2}</span>
            </div>
            <div className="state-box">
              <span className="state-label">Count 3:</span>
              <span className="state-value">{count3}</span>
            </div>
          </div>
        </div>

        <div className="render-info">
          <h3>📈 Thông tin Render</h3>
          <div className="info-box">
            <p><strong>Tổng lần render:</strong> <span className="highlight">{renderCountRef.current}</span></p>
            <p><strong>setState được gọi:</strong> <span className="highlight">{stateUpdateCountRef.current}</span></p>
          </div>
        </div>

        <div className="demo-section">
          <h2>🎯 Demo Các Tình huống</h2>
          
          <div className="demo-buttons">
            <button className="btn btn-batch" onClick={handleBatchUpdate}>
              ✅ Demo 1: Batching (Tối ưu)
            </button>
            <p className="btn-desc">3 setState cùng lúc → 1 lần re-render</p>
          </div>

          <div className="demo-buttons">
            <button className="btn btn-no-batch" onClick={handleNoBatchUpdate}>
              ❌ Demo 2: Không Batching (Async)
            </button>
            <p className="btn-desc">3 setState từ async → 3 lần re-render (Tệ!)</p>
          </div>
        </div>

        <div className="code-examples-section">
          <h2>💻 Code Examples</h2>
          
          <div className="code-example-card">
            <h3>✅ Batching (TỐI ƯU - Khuyên dùng)</h3>
            <p className="code-desc">Gọi tất cả setState cùng lúc trong event handler:</p>
            <pre><code>{`const handleClickBatch = () => {
  // React sẽ batch tất cả setState này
  setCount1(count1 + 1);
  setCount2(count2 + 1);
  setCount3(count3 + 1);
  
  // Kết quả: 3 setState → 1 re-render ✅
};

{/* JSX */}
<button onClick={handleClickBatch}>
  Update All (Batching)
</button>`}</code></pre>
            <div className="code-result">
              <strong>Kết quả:</strong> 3 setState gọi → 1 lần re-render → Hiệu suất tốt ✅
            </div>
          </div>

          <div className="code-example-card warning">
            <h3>❌ Không Batching (TRÁNH - Kém tối ưu)</h3>
            <p className="code-desc">setState bên trong setTimeout hoặc async callback:</p>
            <pre><code>{`const handleClickAsync = () => {
  // Không batching vì setState trong setTimeout
  setTimeout(() => {
    setCount1(count1 + 10); // Re-render 1
  }, 100);
  
  setTimeout(() => {
    setCount2(count2 + 10); // Re-render 2
  }, 150);
  
  setTimeout(() => {
    setCount3(count3 + 10); // Re-render 3
  }, 200);
  
  // Kết quả: 3 setState → 3 re-render ❌
};

{/* JSX */}
<button onClick={handleClickAsync}>
  Update All (No Batch)
</button>`}</code></pre>
            <div className="code-result error">
              <strong>Kết quả:</strong> 3 setState gọi → 3 lần re-render → Lãng phí tài nguyên ❌
            </div>
          </div>
        </div>

        <div className="concepts-section">
          <h2>💡 Khái niệm Chính</h2>
          <div className="concepts-grid">
            <div className="concept-card">
              <h4>✅ Batching (Tối ưu)</h4>
              <ul>
                <li>Gọi setState trong Event Handler</li>
                <li>React 18 mặc định batch các update</li>
                <li>N setState → 1 re-render</li>
                <li>Tăng hiệu suất 50-100%</li>
                <li>Giảm tải CPU & memory</li>
              </ul>
            </div>

            <div className="concept-card warning">
              <h4>⚠️ Không Batching (Kém tối ưu)</h4>
              <ul>
                <li>setState bên trong setTimeout/Promise</li>
                <li>setState bên trong async function</li>
                <li>setState bên trong native event</li>
                <li>N setState → N re-render</li>
                <li>Gây lãng phí tài nguyên</li>
              </ul>
            </div>

            <div className="concept-card">
              <h4>🔧 Cách hoạt động</h4>
              <ul>
                <li>React collect tất cả setState calls</li>
                <li>Gộp thành một State update</li>
                <li>Re-render component 1 lần</li>
                <li>Cập nhật DOM một lần</li>
                <li>Hiệu suất được optimize</li>
              </ul>
            </div>

            <div className="concept-card">
              <h4>🚀 React 18 Improvements</h4>
              <ul>
                <li>Automatic batching trong setTimeout</li>
                <li>Batching trong Promises</li>
                <li>startTransition() cho non-urgent</li>
                <li>useTransition() hook</li>
                <li>Batching mặc định tất cả scenarios</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="comparison-section">
          <h2>📊 So sánh Hiệu suất</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Tình huống</th>
                <th>setState Gọi</th>
                <th>Re-render</th>
                <th>Hiệu suất</th>
              </tr>
            </thead>
            <tbody>
              <tr className="good">
                <td>✅ Batching (Event Handler)</td>
                <td>3x</td>
                <td>1x</td>
                <td>📈 100% (Tối ưu)</td>
              </tr>
              <tr className="bad">
                <td>❌ Không Batching (Async)</td>
                <td>3x</td>
                <td>3x</td>
                <td>📉 33% (Tệ)</td>
              </tr>
              <tr className="neutral">
                <td>⚡ React 18+ với Async</td>
                <td>3x async</td>
                <td>1x</td>
                <td>📈 100% (Tối ưu)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="logs-section">
          <div className="logs-header">
            <h3>📝 Nhật ký Batching</h3>
            <button className="btn-clear" onClick={handleClearLogs}>🗑️ Xóa</button>
          </div>
          <div className="logs-container">
            {logs.length === 0 ? (
              <div className="no-logs">Chưa có nhật ký</div>
            ) : (
              logs.map((log, index) => (
                <div key={index} className="log-entry" style={{ borderLeftColor: log.color }}>
                  <span className="log-time">{log.timestamp}</span>
                  <span className="log-type" style={{ color: log.color }}>[{log.type}]</span>
                  <span className="log-message">{log.message}</span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="tips-section">
          <h3>💡 Best Practices</h3>
          <ul>
            <li>✅ Nhóm các setState liên quan lại để React tự động batch</li>
            <li>✅ Trong React 18+, batching tự động hoạt động trong setTimeout & Promise</li>
            <li>✅ Nếu cần state ngay, dùng updater function: setState(prev =&gt; newValue)</li>
            <li>⚠️ Tránh gọi setState trong loop hoặc điều kiện phức tạp</li>
            <li>✅ Sử dụng useCallback để memoize event handlers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StateBatching;
