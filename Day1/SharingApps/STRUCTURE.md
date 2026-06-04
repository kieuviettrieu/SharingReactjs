# 📁 Cấu trúc Dự án React Chuẩn

## 📊 Cấu trúc Thư mục

```
SharingApps/
├── public/
│   ├── index.html
│   └── manual-dom.html          # Standalone HTML demo
├── src/
│   ├── components/
│   │   ├── ui/                  # 🔴 Reusable UI Components
│   │   │   ├── Button.jsx       # Customizable button
│   │   │   ├── Button.css
│   │   │   ├── Input.jsx        # Input with validation
│   │   │   ├── Input.css
│   │   │   ├── Card.jsx         # Container component
│   │   │   ├── Card.css
│   │   │   ├── Badge.jsx        # Status badge
│   │   │   ├── Badge.css
│   │   │   ├── Alert.jsx        # Alert/notification
│   │   │   ├── Alert.css
│   │   │   └── index.js         # Central exports
│   │   ├── Navigation.jsx       # App navigation bar
│   │   ├── Navigation.css
│   │
│   ├── pages/                   # 🟢 Full Page Components
│   │   ├── Home.jsx             # Landing page
│   │   ├── Home.css
│   │   ├── CounterPage.jsx      # Counter demo page
│   │   ├── CounterPage.css
│   │   ├── StateFlow.jsx        # State flow visualization
│   │   ├── StateFlow.css
│   │   ├── StateBatching.jsx    # Batching demo
│   │   ├── StateBatching.css
│   │   ├── ManualDom.jsx        # Manual DOM vs React
│   │   ├── ManualDom.css
│   │   ├── Components.jsx       # UI Components showcase
│   │   ├── Components.css
│   │   ├── About.jsx            # About page
│   │   └── About.css
│   │
│   ├── Hooks/                   # 🔵 Custom React Hooks
│   │   └── (custom hooks here)
│   │
│   ├── Utils/                   # 🟡 Utility Functions
│   │   └── (helpers, constants)
│   │
│   ├── Assets/                  # 🟠 Images, fonts, icons
│   │   └── (static assets)
│   │
│   ├── App.jsx                  # Root component
│   ├── App.css                  # Global styles
│   ├── index.jsx                # Application entry point
│   ├── index.css                # Global CSS
│   ├── Counter.jsx              # Counter component (legacy - refactored)
│   └── Counter.css
│
├── package.json
├── README.md
└── STRUCTURE.md                 # This file
```

---

## 🏗️ Các tầng trong dự án

### 1. **UI Components** (`src/components/ui/`)
Các component tái sử dụng được, không phụ thuộc vào page cụ thể:
- **Button**: Customize variant, size, state
- **Input**: Form input với label, validation, error
- **Card**: Container cho nội dung
- **Badge**: Status labels
- **Alert**: Notifications/messages

**Cách sử dụng:**
```javascript
import { Button, Input, Card, Badge, Alert } from '../components/ui';

<Button variant="primary" size="md">Click</Button>
<Input label="Name" required error="" />
<Card title="Title">Content</Card>
<Badge variant="green">Active</Badge>
<Alert type="success">Success!</Alert>
```

### 2. **Page Components** (`src/pages/`)
Các trang đầy đủ của ứng dụng, sử dụng UI components:
- **Home.jsx**: Trang chủ, giới thiệu
- **CounterPage.jsx**: Demo bộ đếm với Counter component
- **StateFlow.jsx**: Visualization quy trình React update
- **StateBatching.jsx**: Demo state batching
- **ManualDom.jsx**: So sánh manual DOM vs React
- **Components.jsx**: Showcase tất cả UI components
- **About.jsx**: Thông tin ứng dụng

### 3. **Custom Hooks** (`src/Hooks/`)
React hooks tái sử dụng, ví dụ:
- `useCustomHook()`
- `useForm()`
- `useFetch()`

### 4. **Utils** (`src/Utils/`)
Hàm helper, constants, utilities:
- Helper functions
- Constants
- API calls
- Data processing

### 5. **Assets** (`src/Assets/`)
Tài nguyên tĩnh:
- Hình ảnh
- Fonts
- Icons
- SVG

---

## 🔄 Data Flow

```
User Interaction
       ↓
Page Component (state management)
       ↓
UI Components (display data, handle events)
       ↓
Custom Hooks (business logic)
       ↓
Utils (helper functions, API calls)
```

---

## 📝 Naming Conventions

### File/Folder Names
- **Components**: PascalCase (`Button.jsx`, `UserProfile.jsx`)
- **Utilities**: camelCase (`formatDate.js`, `validate.js`)
- **Folders**: lowercase (`components/`, `pages/`, `hooks/`)

### CSS Classes
- kebab-case: `.btn-primary`, `.card-header`, `.input-error`
- Scope: `.counter-container`, `.home-content`

### JavaScript Variables/Functions
- **Variables**: camelCase (`firstName`, `isLoading`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL`, `MAX_RETRIES`)
- **Functions**: camelCase (`handleClick`, `formatData`)
- **React Components**: PascalCase (`Button`, `HomePage`)

---

## ✅ Best Practices

### 1. **Component Reusability**
```javascript
// ✅ Good: Flexible, reusable component
<Button variant="primary" size="lg" disabled={isLoading}>
  {isLoading ? 'Loading...' : 'Submit'}
</Button>

// ❌ Bad: Hard-coded, not reusable
<button style={{background: 'blue', padding: '10px 15px'}}>
  Submit
</button>
```

### 2. **Props Documentation**
```javascript
/**
 * Reusable Button Component
 * @param {string} variant - 'primary', 'secondary', 'success', 'danger'
 * @param {string} size - 'sm', 'md', 'lg'
 * @param {boolean} disabled - Disable button
 * @param {function} onClick - Click handler
 */
function Button({ variant, size, disabled, onClick, children }) {
  // ...
}
```

### 3. **Separation of Concerns**
- HTML/JSX in `.jsx` files
- CSS in separate `.css` files
- Business logic in custom hooks
- Utils for helpers

### 4. **Prop Validation**
```javascript
function Button({
  variant = 'primary',      // default value
  size = 'md',
  disabled = false,
  onClick = () => {},
  children = 'Button',
  ...props                  // rest props
}) {
  // ...
}
```

### 5. **CSS Scoping**
```css
/* Good: Scoped to component */
.button-container { /* ... */ }
.button-container .btn { /* ... */ }

/* Bad: Too generic */
.container { /* ... */ }
.btn { /* ... */ }
```

---

## 📦 Import Pattern

### Centralized Exports
```javascript
// src/components/ui/index.js
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as Card } from './Card';
export { default as Badge } from './Badge';
export { default as Alert } from './Alert';
```

### Usage
```javascript
// ✅ Good: Single import line
import { Button, Input, Card } from '../components/ui';

// ❌ Bad: Multiple imports
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
```

---

## 🎯 Development Workflow

1. **Create UI Component** in `src/components/ui/`
   - Component logic (`.jsx`)
   - Component styles (`.css`)
   - Props documentation

2. **Create Page Component** in `src/pages/`
   - Import UI components
   - Manage page state
   - Compose UI components

3. **Add Route** in `src/App.jsx`
   ```javascript
   <Route path="/my-page" element={<MyPage />} />
   ```

4. **Add Navigation** in `src/components/Navigation.jsx`
   ```javascript
   <Link to="/my-page" className={isActive('/my-page')}>
     My Page
   </Link>
   ```

---

## 🚀 Running the App

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm build

# Run tests
npm test
```

---

## 📚 Thêm Tài Nguyên

- [React Official Docs](https://react.dev)
- [React Hooks](https://react.dev/reference/react)
- [Component Composition](https://react.dev/learn/thinking-in-react)
- [Best Practices](https://react.dev/learn/keeping-components-pure)
