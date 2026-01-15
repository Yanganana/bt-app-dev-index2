# 组件库 (Component Library)

## 1. 按钮 (Buttons)

### Primary Button
- **Style**: `bg-primary text-white rounded-lg`
- **Hover**: `bg-primary-dark shadow-lg translateY(-2px)`
- **Usage**: 主要行动点（如“获取报价”、“提交”）。

### Secondary Button
- **Style**: `bg-white text-dark border border-gray-200 rounded-lg`
- **Hover**: `bg-gray-50 shadow-md`
- **Usage**: 次要行动点（如“了解详情”、“取消”）。

### Text Link
- **Style**: `text-primary font-medium`
- **Hover**: `underline` or `text-primary-dark`
- **Usage**: 嵌入文本中的链接。

## 2. 导航 (Navigation)

### Header
- **Height**: 80px
- **Behavior**: Sticky on scroll, background becomes opaque white with blur.
- **Responsive**: Hamburger menu on mobile (<768px), Full links on desktop.

### Mobile Menu
- **Trigger**: Hamburger icon (48x48px touch target).
- **Animation**: Fade in / Slide down.
- **Content**: Vertical list of links + CTA button.

## 3. 表单元素 (Form Elements)

### Input Field
- **Default**: `border-gray-200 bg-white`
- **Focus**: `border-primary ring-2 ring-primary/20`
- **Error**: `border-red-500` + Error message below.
- **Success**: `border-green-500`

### Search Bar
- **Desktop**: Expandable input or visible pill-shaped input.
- **Mobile**: Full-width input at top of menu.
- **Features**: Auto-complete dropdown with mock data.

## 4. 卡片 (Cards)

### Service Card
- **Container**: White background, rounded-2xl, border-gray-100.
- **Hover**: Lift up (`translateY(-8px)`), shadow increase.
- **Content**: Icon (top left), Title, Description, Link.

## 5. 提示框 (Alerts/Feedback)
- **Success Toast**: Green background/text, fixed top or bottom right.
- **Error Toast**: Red background/text.
- **Loading State**: Button text changes to spinner + "Processing...".
