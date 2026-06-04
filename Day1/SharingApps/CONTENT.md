# Day 1 — ReactJS là gì? React hoạt động như thế nào?

> Tài liệu buổi học đầu tiên dành cho Backend Dev / người mới bắt đầu với ReactJS.

---

## 🎯 Mục tiêu

Sau buổi học, bạn sẽ hiểu:

- React là gì?
- React giải quyết vấn đề gì?
- Component là gì?
- Function Component là gì?
- State là gì?
- Vì sao UI tự động update?
- React render UI như thế nào?
- Flow hoạt động cơ bản của React

---

## 📚 Mục lục

1. [ReactJS là gì?](#1-reactjs-là-gì)
2. [React giải quyết vấn đề gì?](#2-react-giải-quyết-vấn-đề-gì)
3. [Component là gì?](#3-component-là-gì)
4. [Function Component là gì?](#4-function-component-là-gì)
   - [Class Component là gì?](#class-component-là-gì)
5. [Hooks là gì?](#-hooks-là-gì)
6. [State là gì?](#5-state-là-gì)
7. [Vì sao UI tự động update?](#6-vì-sao-ui-tự-động-update)
8. [React render UI như thế nào?](#7-react-render-ui-như-thế-nào)
9. [Flow hoạt động cơ bản của React](#8-flow-hoạt-động-cơ-bản-của-react)
10. [Cấu trúc một React App](#9-các-thành-phần-trong-cấu-trúc-react-app)
11. [Demo thực tế](#-demo-thực-tế)
12. [Kết thúc buổi](#-kết-thúc-buổi)

---

## 1. ReactJS là gì?

**ReactJS** là một **thư viện JavaScript** dùng để xây dựng **giao diện người dùng (UI)**.
Bạn có thể xem nó như một **công cụ để render UI**.

---

## 2. React giải quyết vấn đề gì?

### 🕰️ Ngày xưa
Website chủ yếu hoạt động theo cách:
- Server render HTML
- Reload toàn bộ page khi có thay đổi
- Frontend khá đơn giản

**Ví dụ:** Khi user click một button
→ Gửi request lên server
→ Server render HTML mới
→ Browser reload page

Lúc đó chưa có vấn đề lớn vì UI khá đơn giản: Form, Table, CRUD cơ bản.

### 🚀 Sau này
Web app bắt đầu giống desktop app hơn, yêu cầu Frontend ngày càng phức tạp.

**Ví dụ:** Một màn hình có thể có:
> search realtime, loading, modal, dropdown, notification, tabs, pagination, filter...

Trước khi có React, frontend thường dùng **JavaScript thuần** để thao tác trực tiếp với DOM bằng `getElementById`, `innerHTML`, `addEventListener`... Khi ứng dụng phức tạp hơn, việc tự quản lý và cập nhật UI trở nên rất khó maintain:

- Developer phải **manually update** nhiều phần của giao diện
- Data đã thay đổi nhưng UI **không đồng bộ**
- Logic update DOM **phân tán khắp nơi** → dễ phát sinh bug

→ **Trong bối cảnh này, ReactJS ra đời.**

### 💡 React giải quyết
React cho phép xây dựng giao diện dựa trên **state**:
- Khi data thay đổi, React **tự động re-render** đúng phần UI cần thay đổi
- Giao diện **luôn đồng bộ** với dữ liệu
- Code **dễ maintain**, component **tái sử dụng** tốt
- Xử lý ứng dụng frontend lớn **hiệu quả hơn**

### 👁️ Góc nhìn của React về UI
> React **không** nhìn UI như một trang lớn.
> React nhìn UI như **tập hợp nhiều phần nhỏ**.

---

## 3. Component là gì?

**Component** là một phần UI:
- **Độc lập**
- Có thể **tái sử dụng**
- Có thể **kết hợp** với các component khác để tạo thành ứng dụng hoàn chỉnh

Trong React có **2 cách viết component**:
- Function Component
- Class Component

---

## 4. Function Component/Class Component là gì?

```jsx
function Header() {
  return <h1>Header</h1>;
}
```

Đặc điểm của Function Component:
- Là một **JavaScript Function**
- **Trả về JSX**
- React dùng JSX đó để render UI

> ➡️ **Component thực chất là một Function.**

Hiện nay hầu hết các dự án React mới đều sử dụng:
**Function Component + Hooks**

---

### Class Component là gì?

Trước khi Hooks ra đời (React < 16.8), React sử dụng **Class Component** để quản lý state và lifecycle.

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Tăng</button>
      </div>
    );
  }
}
```

Đặc điểm của Class Component:
- Là một **ES6 Class** kế thừa từ `React.Component`
- State được quản lý qua `this.state` và cập nhật bằng `this.setState()`
- Có **Lifecycle Methods** để xử lý các giai đoạn của component

---

#### 🔁 Lifecycle của Class Component

Lifecycle chia thành 3 giai đoạn chính:

**1. Mounting — Component được tạo và đưa vào DOM**

| Phương thức | Mô tả |
| ----------- | ----- |
| `constructor()` | Khởi tạo state và bind event handlers |
| `render()` | Trả về JSX để React vẽ UI |
| `componentDidMount()` | Chạy sau khi component đã vào DOM — dùng để call API, set up subscriptions |

**2. Updating — Component re-render khi props hoặc state thay đổi**

| Phương thức | Mô tả |
| ----------- | ----- |
| `render()` | Chạy lại để tạo UI mới |
| `componentDidUpdate(prevProps, prevState)` | Chạy sau re-render — dùng để xử lý side effects khi dữ liệu thay đổi |

**3. Unmounting — Component bị xóa khỏi DOM**

| Phương thức | Mô tả |
| ----------- | ----- |
| `componentWillUnmount()` | Chạy trước khi component bị xóa — dùng để dọn dẹp: hủy timer, unsubscribe |

```text
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Mounting   │ ──▶ │  Updating   │ ──▶ │ Unmounting  │
└─────────────┘     └─────────────┘     └─────────────┘
  constructor()       render()            componentWillUnmount()
  render()            componentDidUpdate()
  componentDidMount()
```

> ➡️ **Ngày nay**, Function Component + Hooks đã thay thế hoàn toàn Class Component vì code ngắn gọn và dễ tái sử dụng logic hơn. Tuy nhiên, bạn vẫn có thể gặp Class Component trong các codebase cũ.

---

### ⚡ Hooks là gì?

**Hooks** là các hàm đặc biệt do React cung cấp, giúp Function Component có thêm khả năng:
- Quản lý dữ liệu
- Xử lý side effects
- Tái sử dụng logic

| Hook          | Mục đích                          |
| ------------- | --------------------------------- |
| `useState`    | Quản lý State                     |
| `useEffect`   | Xử lý side effects                |
| `useRef`      | Truy cập DOM hoặc lưu giá trị     |
| `useMemo`     | Tối ưu tính toán                  |
| `useCallback` | Tối ưu function                   |
| `useContext`  | Chia sẻ dữ liệu toàn cục          |

---

## 5. State là gì?

```jsx
function Counter() {
  return <h1>0</h1>;
}
```

> Nếu muốn số `0` tăng thành `1, 2, 3...` thì React lưu dữ liệu đó ở đâu?
> Làm sao React biết UI cần hiển thị số nào?

### 📖 Định nghĩa
**State** là dữ liệu **bên trong Component**.
React dùng State để quyết định **UI sẽ hiển thị như thế nào**.

### Ví dụ
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <h1>{count}</h1>;
}
```

---

## 6. Vì sao UI tự động update?

- State là dữ liệu của Component
- React dùng State để quyết định UI cần hiển thị gì
- Khi **State thay đổi** → React **render lại** giao diện tương ứng

---

## 7. React render UI như thế nào?

Khi ứng dụng chạy đoạn code sau:

```jsx
function Header() {
  return <h1>Hello React</h1>;
}
```

React sẽ thực hiện theo các bước:

| Bước | Hành động                                                                  |
| ---- | -------------------------------------------------------------------------- |
| B1   | Chạy Function Component để lấy JSX → `<h1>Hello React</h1>`                |
| B2   | Không update trực tiếp vào DOM, mà tạo **Virtual DOM** (mô phỏng trong RAM) |
| B3   | So sánh Virtual DOM **cũ** và Virtual DOM **mới**                          |
| B4   | Tìm ra **phần tối thiểu** cần cập nhật                                     |
| B5   | **Real DOM** được update                                                   |
| B6   | **Re-render UI**                                                           |

> ➡️ React **không render lại toàn bộ trang**. React tìm sự khác biệt giữa hai Virtual DOM và chỉ cập nhật phần thay đổi.

---

## 8. Flow hoạt động cơ bản của React

→ **Demo thực tế** (xem mục Demo bên dưới).

---

## 9. Các thành phần trong cấu trúc React App

### ❌ Vấn đề
Nếu một file `App.jsx` dài **3000 dòng** chứa tất cả: Header, Footer, Login, Movie List, Booking, API Call, Utils, Validation...

→ **Hậu quả:**
- Khó đọc
- Khó tìm code
- Khó maintain
- Khó scale

### ✅ Giải pháp
React App được chia thành **nhiều folder**, mỗi folder có **một trách nhiệm riêng**.

### 🚀 React App bắt đầu chạy từ `main.jsx`

```jsx
ReactDOM.createRoot(document.getElementById("root"))
  .render(<App />);
```

Luồng khởi động:

```text
main.jsx
   ↓
App.jsx  (Root Component)
   ↓
Các Component khác
```

Bên trong `App.jsx`:

```text
App.jsx
├── Header
├── HomePage
└── Footer
```

### 📦 Vai trò các folder

| Folder         | Vai trò                                                   |
| -------------- | --------------------------------------------------------- |
| **components** | UI dùng lại nhiều lần: Button, Input, Card, Modal, Loading |
| **pages**      | Đại diện cho các màn hình (URL ↔ Page): home, login, profile |
| **services**   | Backend communication — nơi call API đến BE                |
| **assets**     | images, icons, fonts                                       |
| **utils**      | Khai báo các hàm dùng chung                                |
| **hooks**      | Các custom hook                                            |

Ví dụ `services/`:
```text
services
├── movieService.js
├── authService.js
└── bookingService.js
```

### 🗂️ Sơ đồ tổng quan

```text
src
│
├── main.jsx
├── App.jsx
│
├── pages
│   ├── Home
│   └── Login
│
├── components
│   ├── Button
│   └── Card
│
├── services
│   └── movieService
│
├── hooks
│   └── useAuth
│
├── utils
│   └── formatDate
│
└── assets
```

---

## 🧪 Demo thực tế

Build các ví dụ nhỏ:

- ✅ **Counter** — đếm số
- ✅ **Todo list mini** — danh sách công việc
- ✅ **Toggle UI** — bật/tắt giao diện

---

## 🎓 Kết thúc buổi

**Backend Dev cần ghi nhớ:**

- React **render theo state**
- React **không update DOM trực tiếp** (đi qua Virtual DOM)
- **Component** là nền tảng của mọi thứ
- Một ứng dụng React thường bắt đầu từ **`main.jsx`**, nơi React render toàn bộ ứng dụng vào thẻ `root` trong HTML. Sau đó **`App.jsx`** đóng vai trò là component gốc để điều hướng và quản lý các màn hình chính. Khi user truy cập một URL, **React Router** sẽ xác định page nào cần render — ví dụ `/users` sẽ render `UserPage`.

---

> 📌 *Tài liệu nội bộ — Day 1: Introduction to ReactJS*
