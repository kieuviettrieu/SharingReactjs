import React, { useState, useCallback, useRef } from 'react';
import './StateFlow.css';

function StateFlow() {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState([
    { 
      timestamp: new Date().toLocaleTimeString('vi-VN'), 
      phase: 'MOUNT', 
      message: 'Component được mounted - Lần render đầu tiên',
      color: '#4ec9b0'
    }
  ]);
  const renderCountRef = useRef(1);

  // Thêm log chi tiết
  const addLog = useCallback((phase, message) => {
    const phaseColors = {
      'USER_ACTION': '#ce9178',
      'STATE': '#b5cea8',
      'VDOM_OLD': '#569cd6',
      'VDOM_NEW': '#569cd6',
      'DIFFING': '#c586c0',
      'RECONCILE': '#f7b801',
      'DOM_UPDATE': '#4ec9b0',
      'RENDER': '#dcdcaa',
      'COMPLETE': '#6a9955'
    };

    const newLog = {
      timestamp: new Date().toLocaleTimeString('vi-VN'),
      phase: phase,
      message: message,
      color: phaseColors[phase] || '#ce9178'
    };
    setLogs(prevLogs => [newLog, ...prevLogs]);
  }, []);

  // Chi tiết hơn cho increment
  const handleIncrement = () => {
    console.clear();
    console.log('%c=== REACT UPDATE CYCLE ===', 'color: #667eea; font-size: 16px; font-weight: bold;');
    
    // 1. User Action
    console.log('%c1. USER ACTION: Người dùng click nút', 'color: #ce9178; font-weight: bold;');
    addLog('USER_ACTION', '🖱️ Người dùng click nút "Tăng"');
    
    // 2. Old Virtual DOM
    console.log(`%c2. CURRENT VIRTUAL DOM (Before):`, 'color: #569cd6; font-weight: bold;');
    console.log('%cOld VDom: { count: ' + count + ' }', 'color: #569cd6;');
    addLog('VDOM_OLD', `📦 Old VDom: count = ${count}`);
    
    // 3. State Update
    const newCount = count + 1;
    console.log(`%c3. STATE UPDATE: setCount(${newCount})`, 'color: #b5cea8; font-weight: bold;');
    addLog('STATE', `⚡ setState called - count: ${count} → ${newCount}`);
    
    // 4. New Virtual DOM
    console.log(`%c4. NEW VIRTUAL DOM (After):`, 'color: #569cd6; font-weight: bold;');
    console.log('%cNew VDom: { count: ' + newCount + ' }', 'color: #569cd6;');
    addLog('VDOM_NEW', `📦 New VDom: count = ${newCount}`);
    
    // 5. Diffing
    console.log('%c5. DIFFING (Tìm sự khác biệt):' , 'color: #c586c0; font-weight: bold;');
    console.log('%cSo sánh VDom cũ vs VDom mới...', 'color: #c586c0;');
    console.log('%c✓ Tìm thấy thay đổi: giá trị count thay đổi', 'color: #c586c0;');
    addLog('DIFFING', `🔍 So sánh VDom: Tìm thấy 1 thay đổi (count cập nhật)`);
    
    // 6. Reconciliation (Calculate minimal changes)
    console.log('%c6. RECONCILIATION (Calculate minimal DOM updates):', 'color: #f7b801; font-weight: bold;');
    console.log('%cOptimal update path calculated', 'color: #f7b801;');
    addLog('RECONCILE', `⚙️ Fibre reconciliation - Minimal updates identified`);
    
    // 7. DOM Update
    console.log('%c7. CẬP NHẬT REAL DOM:' , 'color: #4ec9b0; font-weight: bold;');
    console.log('%cCập nhật Real DOM...' , 'color: #4ec9b0;');
    addLog('DOM_UPDATE', `🔧 Real DOM được cập nhật - Giá trị: ${newCount}`);
    
    // 8. Re-render
    console.log('%c8. COMPONENT RE-RENDER:', 'color: #dcdcaa; font-weight: bold;');
    console.log(`%cRender count: ${renderCountRef.current + 1}`, 'color: #dcdcaa;');
    addLog('RENDER', `🔄 Component re-rendered (Render #${renderCountRef.current + 1})`);
    renderCountRef.current++;
    
    // 9. Complete
    console.log('%c9. COMPLETE ✅', 'color: #6a9955; font-weight: bold;');
    console.log('%cUI updated successfully!', 'color: #6a9955;');
    addLog('COMPLETE', `✅ React update cycle complete - UI updated`);
    
    // Actually update state
    setCount(newCount);
  };

  // Xử lý decrement
  const handleDecrement = () => {
    console.clear();
    console.log('%c=== REACT UPDATE CYCLE ===', 'color: #667eea; font-size: 16px; font-weight: bold;');
    
    console.log('%c1. USER ACTION: Người dùng click nút', 'color: #ce9178; font-weight: bold;');
    addLog('USER_ACTION', '🖱️ Người dùng click nút "Giảm"');
    
    console.log(`%c2. VIRTUAL DOM CŨ (Trước):`, 'color: #569cd6; font-weight: bold;');
    console.log('%cVDom cũ: { count: ' + count + ' }', 'color: #569cd6;');
    addLog('VDOM_OLD', `📦 VDom cũ: count = ${count}`);
    
    const newCount = count - 1;
    console.log(`%c3. CẬP NHẬT STATE: setCount(${newCount})`, 'color: #b5cea8; font-weight: bold;');
    addLog('STATE', `⚡ setState được gọi - count: ${count} → ${newCount}`);
    
    console.log(`%c4. VIRTUAL DOM MỚI (Sau):`, 'color: #569cd6; font-weight: bold;');
    console.log('%cVDom mới: { count: ' + newCount + ' }', 'color: #569cd6;');
    addLog('VDOM_NEW', `📦 VDom mới: count = ${newCount}`);
    
    console.log('%c5. DIFFING (Tìm sự khác biệt):', 'color: #c586c0; font-weight: bold;');
    console.log('%cSo sánh VDom cũ vs VDom mới...', 'color: #c586c0;');
    console.log('%c✓ Tìm thấy thay đổi: giá trị count thay đổi', 'color: #c586c0;');
    addLog('DIFFING', `🔍 So sánh VDom: Tìm thấy 1 thay đổi (count cập nhật)`);
    
    console.log('%c6. RECONCILIATION (Tính toán cập nhật tối thiểu):', 'color: #f7b801; font-weight: bold;');
    console.log('%cDuờng cập nhật tối ưu đã được tính toán', 'color: #f7b801;');
    addLog('RECONCILE', `⚙️ Fibre reconciliation - Xác định cập nhật tối thiểu`);
    
    console.log('%c7. CẬP NHẬT REAL DOM:', 'color: #4ec9b0; font-weight: bold;');
    console.log('%cCập nhật Real DOM...', 'color: #4ec9b0;');
    addLog('DOM_UPDATE', `🔧 Real DOM được cập nhật - Giá trị: ${newCount}`);
    
    console.log('%c8. COMPONENT RE-RENDER:', 'color: #dcdcaa; font-weight: bold;');
    console.log(`%cLần render: ${renderCountRef.current + 1}`, 'color: #dcdcaa;');
    addLog('RENDER', `🔄 Component re-render (Lần render #${renderCountRef.current + 1})`);
    renderCountRef.current++;
    
    console.log('%c9. HOÀN THÀNH ✅', 'color: #6a9955; font-weight: bold;');
    console.log('%cUI đã được cập nhật thành công!', 'color: #6a9955;');
    addLog('COMPLETE', `✅ Vòng lặp React update hoàn thành - UI cập nhật`);
    
    setCount(newCount);
  };

  // Xử lý reset
  const handleReset = () => {
    console.clear();
    console.log('%c=== REACT UPDATE CYCLE ===', 'color: #667eea; font-size: 16px; font-weight: bold;');
    
    console.log('%c1. USER ACTION: Người dùng click nút', 'color: #ce9178; font-weight: bold;');
    addLog('USER_ACTION', '🖱️ Người dùng click nút "Đặt lại"');
    
    console.log(`%c2. VIRTUAL DOM CŨ (Trước):`, 'color: #569cd6; font-weight: bold;');
    console.log('%cVDom cũ: { count: ' + count + ' }', 'color: #569cd6;');
    addLog('VDOM_OLD', `📦 VDom cũ: count = ${count}`);
    
    console.log('%c3. CẬP NHẬT STATE: setCount(0)', 'color: #b5cea8; font-weight: bold;');
    addLog('STATE', `⚡ setState được gọi - count: ${count} → 0`);
    
    console.log('%b4. VIRTUAL DOM MỚI (Sau):', 'color: #569cd6; font-weight: bold;');
    console.log('%cVDom mới: { count: 0 }', 'color: #569cd6;');
    addLog('VDOM_NEW', `📦 VDom mới: count = 0`);
    
    console.log('%c5. DIFFING (Tìm sự khác biệt):', 'color: #c586c0; font-weight: bold;');
    console.log('%cSo sánh VDom cũ vs VDom mới...', 'color: #c586c0;');
    console.log('%c✓ Tìm thấy thay đổi: giá trị count thay đổi', 'color: #c586c0;');
    addLog('DIFFING', `🔍 So sánh VDom: Tìm thấy 1 thay đổi (count reset)`);
    
    console.log('%c6. RECONCILIATION (Tính toán cập nhật tối thiểu):', 'color: #f7b801; font-weight: bold;');
    console.log('%cDuờng cập nhật tối ưu đã được tính toán', 'color: #f7b801;');
    addLog('RECONCILE', `⚙️ Fibre reconciliation - Xác định cập nhật tối thiểu`);
    
    console.log('%c7. CẬP NHẬT REAL DOM:', 'color: #4ec9b0; font-weight: bold;');
    console.log('%cCập nhật Real DOM...', 'color: #4ec9b0;');
    addLog('DOM_UPDATE', `🔧 Real DOM được cập nhật - Giá trị: 0`);
    
    console.log('%c8. COMPONENT RE-RENDER:', 'color: #dcdcaa; font-weight: bold;');
    console.log(`%cLần render: ${renderCountRef.current + 1}`, 'color: #dcdcaa;');
    addLog('RENDER', `🔄 Component re-render (Lần render #${renderCountRef.current + 1})`);
    renderCountRef.current++;
    
    console.log('%c9. HOÀN THÀNH ✅', 'color: #6a9955; font-weight: bold;');
    console.log('%cUI đã được cập nhật thành công!', 'color: #6a9955;');
    addLog('COMPLETE', `✅ Vòng lặp React update hoàn thành - UI cập nhật`);
    
    setCount(0);
  };

  const handleClearLogs = () => {
    setLogs([{ timestamp: new Date().toLocaleTimeString('vi-VN'), phase: 'CLEAR', message: 'Logs đã được xóa', color: '#ce9178' }]);
    renderCountRef.current = 1;
  };

  const phaseEmojis = {
    'USER_ACTION': '🖱️',
    'STATE': '⚡',
    'VDOM_OLD': '📦',
    'VDOM_NEW': '📦',
    'DIFFING': '🔍',
    'RECONCILE': '⚙️',
    'DOM_UPDATE': '🔧',
    'RENDER': '🔄',
    'COMPLETE': '✅',
    'MOUNT': '🎯'
  };

  return (
    <div className="stateflow-container">
      <div className="flow-content">
        <h1>🚀 React State Flow & Virtual DOM</h1>
        <p className="subtitle">Hiển thị vòng lặp cập nhật hoàn chỉnh của React</p>
        
        {/* State Display */}
        <div className="state-section">
          <div className="state-label">Trạng thái hiện tại (count):</div>
          <div className="state-value">{count}</div>
          <p className="state-info">
            Mỗi cập nhật tạo quy trình: Thay đổi State → Virtual DOM → Diffing → Cập nhật DOM → Render UI
          </p>
        </div>

        {/* Full Flow Visualization */}
        <div className="full-flow-visualization">
          <h2>📊 Vòng lặp React Update</h2>
          <div className="flow-steps">
            <div className="flow-step">
              <div className="step-emoji">🖱️</div>
              <div className="step-title">Tác vụ người dùng</div>
              <p>Click nút</p>
            </div>
            <div className="flow-arrow">→</div>
            
            <div className="flow-step">
              <div className="step-emoji">⚡</div>
              <div className="step-title">Cập nhật State</div>
              <p>setCount(giá trị mới)</p>
            </div>
            <div className="flow-arrow">→</div>
            
            <div className="flow-step">
              <div className="step-emoji">📦</div>
              <div className="step-title">VDom mới</div>
              <p>Tạo cây mới</p>
            </div>
            <div className="flow-arrow">→</div>
            
            <div className="flow-step">
              <div className="step-emoji">🔍</div>
              <div className="step-title">Diffing</div>
              <p>So sánh cây</p>
            </div>
            <div className="flow-arrow">→</div>
            
            <div className="flow-step">
              <div className="step-emoji">⚙️</div>
              <div className="step-title">Reconcile</div>
              <p>Tìm thay đổi</p>
            </div>
            <div className="flow-arrow">→</div>
            
            <div className="flow-step">
              <div className="step-emoji">🔧</div>
              <div className="step-title">Cập nhật DOM</div>
              <p>Cập nhật tối thiểu</p>
            </div>
            <div className="flow-arrow">→</div>
            
            <div className="flow-step">
              <div className="step-emoji">🎨</div>
              <div className="step-title">Vẽ lại</div>
              <p>Trình duyệt vẽ lại</p>
            </div>
            <div className="flow-arrow">→</div>
            
            <div className="flow-step">
              <div className="step-emoji">✅</div>
              <div className="step-title">Hoàn thành</div>
              <p>UI hiển thị</p>
            </div>
          </div>
        </div>

        {/* Virtual DOM vs Real DOM comparison */}
        <div className="vdom-comparison">
          <h2>📦 Virtual DOM vs 🌐 Real DOM</h2>
          <div className="comparison-grid">
            <div className="comparison-item">
              <div className="comparison-title">📦 Virtual DOM (Đối tượng JS)</div>
              <ul>
                <li>✅ Nhanh - Lưu trong bộ nhớ</li>
                <li>✅ Dễ thao tác</li>
                <li>✅ Không hiển thị cho người dùng</li>
                <li>✅ React quản lý</li>
              </ul>
            </div>
            <div className="vs-divider">VS</div>
            <div className="comparison-item">
              <div className="comparison-title">🌐 Real DOM (HTML thực tế)</div>
              <ul>
                <li>❌ Chậm - Cập nhật đắt tiền</li>
                <li>❌ API DOM phức tạp</li>
                <li>✅ Hiển thị cho trình duyệt</li>
                <li>✅ Trình duyệt render</li>
              </ul>
            </div>
          </div>
          <p className="comparison-note">
            💡 React sử dụng VDom để giảm thiểu cập nhật Real DOM - Chỉ các phần tử thay đổi được cập nhật!
          </p>
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button className="btn btn-decrement" onClick={handleDecrement}>
            ➖ Giảm
          </button>
          <button className="btn btn-reset" onClick={handleReset}>
            🔄 Đặt lại
          </button>
          <button className="btn btn-increment" onClick={handleIncrement}>
            ➕ Tăng
          </button>
        </div>

        {/* Render Count */}
        <div className="render-info">
          <p>Tổng lần render: <strong>{renderCountRef.current}</strong></p>
          <p className="hint">💡 Mở DevTools (F12) → Console để xem logs chi tiết!</p>
        </div>

        {/* Console Simulation */}
        <div className="console-section">
          <div className="console-header">
            <span>📋 Nhật ký cập nhật React</span>
            <button className="clear-btn" onClick={handleClearLogs}>Xóa</button>
          </div>
          <div className="console-logs">
            {logs.map((log, index) => (
              <div key={index} className="log-entry" style={{ color: log.color }}>
                <span className="log-emoji">{phaseEmojis[log.phase] || '•'}</span>
                <span className="log-timestamp">[{log.timestamp}]</span>
                <span className="log-phase">{log.phase}</span>
                <span className="log-message">{log.message}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="explanation">
          <h2>📖 Chi tiết Vòng lặp cập nhật React</h2>
          <div className="explanation-grid">
            <div className="explanation-item">
              <h3>1️⃣ Tác vụ người dùng</h3>
              <p>Người dùng click nút → kích hoạt sự kiện onClick</p>
            </div>
            <div className="explanation-item">
              <h3>2️⃣ Cập nhật State</h3>
              <p>setCount() được gọi → Xếp hàng đợi thay đổi state</p>
            </div>
            <div className="explanation-item">
              <h3>3️⃣ Tạo VDom mới</h3>
              <p>React tạo Virtual DOM mới dựa trên state mới</p>
            </div>
            <div className="explanation-item">
              <h3>4️⃣ Thuật toán Diffing</h3>
              <p>Reconciliation: So sánh VDom cũ vs VDom mới</p>
            </div>
            <div className="explanation-item">
              <h3>5️⃣ Tìm thay đổi</h3>
              <p>Xác định phần tử nào thay đổi (React Fibre)</p>
            </div>
            <div className="explanation-item">
              <h3>6️⃣ Cập nhật DOM tối thiểu</h3>
              <p>Chỉ cập nhật những phần tử thay đổi</p>
            </div>
            <div className="explanation-item">
              <h3>7️⃣ Trình duyệt vẽ lại</h3>
              <p>Trình duyệt render lại phần DOM đã thay đổi</p>
            </div>
            <div className="explanation-item">
              <h3>8️⃣ UI cập nhật xong</h3>
              <p>Người dùng thấy UI mới ✅</p>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="key-concepts">
          <h2>🎯 Các khái niệm chính React</h2>
          <ul>
            <li><strong>Virtual DOM:</strong> Biểu diễn JS của UI (nhanh, lưu trong bộ nhớ)</li>
            <li><strong>Reconciliation:</strong> Quá trình đối chiếu VDom mới với VDom cũ</li>
            <li><strong>Diffing:</strong> Tìm sự khác biệt giữa hai cây Virtual DOM</li>
            <li><strong>Fibre Architecture:</strong> Engine render của React (ưu tiên hóa cập nhật)</li>
            <li><strong>Batching:</strong> React nhóm nhiều lệnh setState lại với nhau</li>
            <li><strong>Cập nhật DOM tối thiểu:</strong> Chỉ những phần tử thay đổi mới được cập nhật trong Real DOM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StateFlow;
