# 📚 Refactoring & Component Architecture

Dự án này đã được refactor để tuân theo **Component-Based Architecture** chuẩn của React.

## ✨ Những gì đã thay đổi

### 1. **Tạo UI Components Library** (`src/components/ui/`)
- ✅ **Button** - Customizable button với variant, size, state
- ✅ **Input** - Form input với label, validation, error message
- ✅ **Card** - Container component cho nội dung
- ✅ **Badge** - Status badges với các màu khác nhau
- ✅ **Alert** - Alert/notification component

Mỗi component có:
- File `.jsx` - Logic component
- File `.css` - Styles riêng biệt
- Props documentation
- Default props

### 2. **Cấu trúc thư mục chuẩn**
```
src/
├── components/
│   ├── ui/                    # 🔴 Reusable UI Components
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Card/
│   │   ├── Badge/
│   │   ├── Alert/
│   │   └── index.js           # Central exports
│   └── Navigation.jsx
├── pages/                     # 🟢 Full Pages
├── Hooks/                     # 🔵 Custom Hooks
├── Utils/                     # 🟡 Utilities
└── Assets/                    # 🟠 Static assets
```

### 3. **Refactor các Pages**
- ✅ `src/pages/Home.jsx` - Sử dụng Button, Card, Badge
- ✅ `src/pages/CounterPage.jsx` - Sử dụng Card, Counter (refactored)
- ✅ `src/Counter.jsx` - Sử dụng Button, Card từ UI library
- ✅ `src/pages/Components.jsx` - Showcase tất cả UI components
- ⏳ `src/pages/StateFlow.jsx` - (pending refactor)
- ⏳ `src/pages/StateBatching.jsx` - (pending refactor)
- ⏳ `src/pages/ManualDom.jsx` - (đã sử dụng iframe)
- ✅ `src/pages/About.jsx` - (no changes needed)

## 📖 Cách sử dụng Components

### Import từ UI Library
```javascript
import { Button, Input, Card, Badge, Alert } from '../components/ui';
```

### Sử dụng Button
```javascript
<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>

<Button variant="success" disabled>
  Success
</Button>

<Button variant="outline" size="lg">
  Outline Large
</Button>
```

### Sử dụng Input
```javascript
<Input 
  label="Username"
  type="text"
  placeholder="Enter username"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  error={error}
  required
/>
```

### Sử dụng Card
```javascript
<Card title="My Card Title">
  Content goes here
</Card>
```

### Sử dụng Badge
```javascript
<Badge variant="blue">New</Badge>
<Badge variant="green">Active</Badge>
<Badge variant="red">Archived</Badge>
```

### Sử dụng Alert
```javascript
<Alert type="success" title="Success" onClose={() => {}}>
  Operation completed successfully!
</Alert>
```

## 🎨 Button Variants & Sizes

### Variants
- `primary` - Blue (chính)
- `secondary` - Gray (phụ)
- `success` - Green (thành công)
- `danger` - Red (nguy hiểm)
- `outline` - Outlined style

### Sizes
- `sm` - Small (nhỏ)
- `md` - Medium (trung bình) - default
- `lg` - Large (lớn)

## 🏷️ Badge Variants
- `blue` - Blue background
- `green` - Green background
- `red` - Red background
- `yellow` - Yellow background
- `gray` - Gray background

## ⚠️ Alert Types
- `info` - Blue (thông tin)
- `success` - Green (thành công)
- `warning` - Yellow (cảnh báo)
- `error` - Red (lỗi)

## 🚀 Lợi ích của Component Architecture

### 1. **Reusability** (Tái sử dụng)
Viết một lần, dùng nhiều nơi

### 2. **Maintainability** (Dễ bảo trì)
Thay đổi ở một chỗ, tất cả cập nhật

### 3. **Consistency** (Tính nhất quán)
Giao diện đồng nhất trong toàn app

### 4. **Scalability** (Mở rộng dễ)
Thêm variant, props mới một cách đơn giản

### 5. **Testability** (Dễ test)
Mỗi component độc lập, test riêng

## 📋 Next Steps (Công việc tiếp theo)

- [ ] Refactor `StateFlow.jsx` để sử dụng Card, Badge
- [ ] Refactor `StateBatching.jsx` để sử dụng UI components
- [ ] Thêm theme support (dark mode)
- [ ] Thêm more component variants
- [ ] Viết unit tests cho UI components
- [ ] Setup Storybook để showcase components

## 📚 Tài liệu chi tiết

Xem [STRUCTURE.md](./STRUCTURE.md) để biết chi tiết về cấu trúc dự án và best practices.

## 💡 Tips

1. **Luôn sử dụng component từ UI library** thay vì tạo custom button/input
2. **Thêm prop documentation** cho mỗi component mới
3. **Giữ component đơn giản** - mỗi component chỉ làm một việc
4. **Tái sử dụng props** - sử dụng `...props` để pass remaining props

---

**Created on:** June 3, 2026
**Updated:** Refactored to Component-Based Architecture
