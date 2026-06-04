# 📐 Cấu Trúc & Thiết kế Ứng dụng React

## 🏗️ Kiến trúc Dự án

```
┌─────────────────────────────────────────────────────────────┐
│                      React Application                      │
│                      (Browser / Frontend)                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │         App.jsx (Root Component)        │
        │          Routes & Navigation            │
        └─────────────────────────────────────────┘
                              │
                 ┌────────────┼────────────┐
                 ▼            ▼            ▼
          ┌──────────┐  ┌──────────┐  ┌──────────┐
          │Navigation│  │Router    │  │Layout    │
          └──────────┘  └──────────┘  └──────────┘
                 │
        ┌────────┼────────────────────────────────┐
        │        │        │         │       │      │
        ▼        ▼        ▼         ▼       ▼      ▼
      Home   Counter  StateFlow  Batching  Manual About
      Page   Page       Page      Page      DOM    Page
        │        │        │         │       │      │
        └────────┴────────┴─────────┴───────┴──────┘
                         │
                         ▼
        ┌────────────────────────────────────┐
        │   UI Components Library (src/ui/)  │
        ├────────────────────────────────────┤
        │  ┌──────┐  ┌──────┐  ┌──────┐    │
        │  │Button│  │Input │  │Card  │    │
        │  └──────┘  └──────┘  └──────┘    │
        │  ┌──────┐  ┌──────┐             │
        │  │Badge │  │Alert │             │
        │  └──────┘  └──────┘             │
        └────────────────────────────────────┘
```

---

## 🔄 Data Flow trong Ứng dụng

```
┌─────────────────────────────────────────────────────────┐
│                    USER INTERACTION                      │
│                   (Click, Type, etc)                     │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
       ┌───────────────────────────────────┐
       │  Event Handler (onClick, onChange) │
       └────────────┬────────────────────────┘
                    │
                    ▼
       ┌───────────────────────────────────┐
       │    setState() được gọi             │
       │   (State bị cập nhật)              │
       └────────────┬────────────────────────┘
                    │
                    ▼
       ┌───────────────────────────────────┐
       │  React creates New Virtual DOM     │
       │  (VDOM - In-memory JS object)      │
       └────────────┬────────────────────────┘
                    │
                    ▼
       ┌───────────────────────────────────┐
       │  Diffing Algorithm                │
       │  (So sánh Old VDOM vs New VDOM)    │
       │  Tìm differences                  │
       └────────────┬────────────────────────┘
                    │
                    ▼
       ┌───────────────────────────────────┐
       │  Reconciliation (React Fibre)     │
       │  Tính toán minimal DOM updates    │
       └────────────┬────────────────────────┘
                    │
                    ▼
       ┌───────────────────────────────────┐
       │  Update Real DOM                  │
       │  (Browser DOM API)                │
       └────────────┬────────────────────────┘
                    │
                    ▼
       ┌───────────────────────────────────┐
       │  Browser Re-paint                 │
       │  (Render lên màn hình)            │
       └────────────┬────────────────────────┘
                    │
                    ▼
       ┌───────────────────────────────────┐
       │    USER SEES UPDATED UI            │
       └───────────────────────────────────┘
```

---

## 🎯 Cấu Trúc Thư mục Chi Tiết

```
src/
│
├── components/
│   ├── ui/                              ← 🔴 Reusable UI Components
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.css
│   │   ├── Input/
│   │   │   ├── Input.jsx
│   │   │   └── Input.css
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.css
│   │   ├── Badge/
│   │   │   ├── Badge.jsx
│   │   │   └── Badge.css
│   │   ├── Alert/
│   │   │   ├── Alert.jsx
│   │   │   └── Alert.css
│   │   └── index.js                    ← Central exports
│   │
│   └── Navigation.jsx                  ← Navigation bar component
│
├── pages/                               ← 🟢 Full Page Components
│   ├── Home.jsx
│   ├── CounterPage.jsx
│   ├── StateFlow.jsx
│   ├── StateBatching.jsx
│   ├── ManualDom.jsx
│   ├── Components.jsx
│   ├── About.jsx
│   └── (CSS files for each page)
│
├── Hooks/                               ← 🔵 Custom React Hooks
│   └── (custom hooks here)
│
├── Utils/                               ← 🟡 Utility Functions
│   └── (helpers, constants)
│
├── Assets/                              ← 🟠 Static Assets
│   └── (images, fonts, icons)
│
├                        ← Counter component (refactored)
├
├── App.jsx                              ← Root component
├── App.css
├── index.jsx                            ← Entry point
└── index.css
```

---

## 🎨 Component Hierarchy (Thứ bậc Component)

```
                        <App />
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
         <Router>              <Routes>
              │                   │
              ▼                   ├─ / → <Home />
         <Navigation />           │   ├─ <Button />
              │                   │   ├─ <Card />
              │                   │   └─ <Badge />
              │                   │
              │                   ├─ /counter → <CounterPage />
              │                   │   └─ <Counter />
              │                   │       ├─ <Card />
              │                   │       └─ <Button />
              │                   │
              │                   ├─ /components → <Components />
              │                   │   └─ (showcase all UI components)
              │                   │
              │                   ├─ /state-flow → <StateFlow />
              │                   │   └─ <Card />, <Badge />
              │                   │
              │                   ├─ /state-batching → <StateBatching />
              │                   │
              │                   ├─ /manual-dom → <ManualDom />
              │                   │   └─ (iframe + <Button />)
              │                   │
              │                   └─ /about → <About />
              │
              └─ Used in all pages for navigation
```

---

## 📊 State Management Flow

```
┌──────────────────────────────────────────┐
│      Page Component (e.g., Home)         │
│      Local State Management              │
│                                          │
│  const [state, setState] = useState(0)   │
└──────────────────────────────────────────┘
                    │
                    │ Passes via props
                    ▼
    ┌─────────────────────────────────┐
    │   UI Components                 │
    │   (Button, Input, Card, etc)    │
    │                                 │
    │  Function: Display & Interact   │
    └─────────────────────────────────┘
                    │
                    │ Events (onClick, onChange)
                    ▼
    ┌─────────────────────────────────┐
    │   Event Handlers                │
    │                                 │
    │   handleClick() {               │
    │     setState(newValue)          │
    │   }                             │
    └─────────────────────────────────┘
                    │
                    │ setState updates state
                    ▼
    ┌─────────────────────────────────┐
    │   React Re-render Cycle         │
    │   (Virtual DOM → Real DOM)      │
    └─────────────────────────────────┘
```

---

## 🔀 Routing Architecture

```
App.jsx
  │
  ├─ <Router>
  │   │
  │   ├─ <Routes>
  │   │   ├─ <Route path="/" element={<Home />} />
  │   │   ├─ <Route path="/counter" element={<CounterPage />} />
  │   │   ├─ <Route path="/state-flow" element={<StateFlow />} />
  │   │   ├─ <Route path="/state-batching" element={<StateBatching />} />
  │   │   ├─ <Route path="/manual-dom" element={<ManualDom />} />
  │   │   ├─ <Route path="/components" element={<Components />} />
  │   │   └─ <Route path="/about" element={<About />} />
  │   │
  │   └─ <Navigation />
  │       └─ <Link to="/" />
  │       └─ <Link to="/counter" />
  │       └─ <Link to="/state-flow" />
  │       ... (etc)
```

---

## ✨ Component Composition Pattern

```
Page Component (High-level)
    │
    ├─ Container/Layout <Card>
    │   │
    │   ├─ Title & Description
    │   │
    │   └─ Content Section
    │       ├─ <Button /> - User interaction
    │       ├─ <Input /> - Form input
    │       ├─ <Badge /> - Status display
    │       └─ <Alert /> - Notifications
    │
    └─ Multiple sections...
```

---

## 🎯 Naming Conventions at a Glance

| Item | Convention | Example |
|------|-----------|---------|
| **Component Files** | PascalCase | `Button.jsx`, `HomePage.jsx` |
| **Utility Files** | camelCase | `formatDate.js`, `validate.js` |
| **Folders** | lowercase | `components/`, `pages/`, `hooks/` |
| **CSS Classes** | kebab-case | `.btn-primary`, `.card-header` |
| **Variables** | camelCase | `firstName`, `isLoading` |
| **Constants** | UPPER_SNAKE_CASE | `API_URL`, `MAX_RETRIES` |
| **Functions** | camelCase | `handleClick()`, `formatData()` |
| **React Props** | camelCase | `onClick`, `onChange`, `disabled` |

---

## 🚀 Import/Export Pattern

```javascript
// ✅ Good: Centralized exports
// src/components/ui/index.js
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as Card } from './Card';
export { default as Badge } from './Badge';
export { default as Alert } from './Alert';

// Usage
import { Button, Input, Card } from '../components/ui';

// ❌ Bad: Multiple individual imports
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
```

---

## 📝 Tài liệu Liên quan

- **README.md** - Hướng dẫn sử dụng cơ bản
- **STRUCTURE.md** - Chi tiết cấu trúc & best practices
- **REFACTORING.md** - Ghi chép quá trình refactor

---

**Created on:** June 3, 2026  
**Purpose:** Giúp hiểu rõ kiến trúc & thiết kế của React application
