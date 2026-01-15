# 设计系统文档 (Design System)

## 1. 视觉设计原则
- **极简主义**: 界面保持干净整洁，去除多余装饰，强调内容本身。
- **一致性**: 统一的图标、圆角、阴影和交互反馈。
- **层级清晰**: 通过字号、颜色深浅和间距区分信息层级。

## 2. 色彩系统 (Color Palette)

### 主色调 (Primary Colors)
- **Primary Blue**: `#0066CC`
  - 用途: 主按钮、链接、强调文字、品牌标识。
  - 变体: Light (`#3385D6`), Dark (`#004C99`)
- **Secondary Teal**: `#00CC99`
  - 用途: 成功状态、次级强调、渐变色辅助。
- **Accent Orange**: `#FF6600` (Use sparingly)
  - 用途: 警告、高亮提示。

### 中性色调 (Neutrals)
- **Dark**: `#1A1A2E` (主要文本)
- **Dark Light**: `#4A4A6A` (次级文本)
- **Light**: `#F5F7FA` (页面背景)
- **White**: `#FFFFFF` (卡片背景)
- **Gray**: `#E0E0E0` (边框、分割线)

## 3. 排版系统 (Typography)

### 字体家族
- **Sans-serif**: Inter, system-ui, -apple-system, sans-serif

### 字号层级 (Type Scale)
- **H1**: 3.75rem (60px) / 2.25rem (36px) mobile - Line height: 1.1
- **H2**: 2.25rem (36px) - Line height: 1.2
- **H3**: 1.5rem (24px) - Line height: 1.3
- **Body Large**: 1.125rem (18px) - Line height: 1.6
- **Body Regular**: 1rem (16px) - Line height: 1.5
- **Small**: 0.875rem (14px) - Line height: 1.4

## 4. 间距与布局 (Spacing & Layout)
- **Container**: Max-width 1280px, Padding x-4 (mobile), x-8 (desktop)
- **Section Spacing**: 80px (desktop), 60px (mobile)
- **Component Spacing**: 8px, 16px, 24px, 32px, 48px

## 5. 阴影与圆角 (Shadows & Radius)
- **Radius**:
  - Button/Input: 8px (rounded-lg)
  - Card: 16px (rounded-2xl)
  - Pill: 9999px (rounded-full)
- **Shadows**:
  - Small: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
  - Medium: `0 4px 6px -1px rgb(0 0 0 / 0.1)`
  - Large: `0 10px 15px -3px rgb(0 0 0 / 0.1)`
  - Brand Glow: `0 10px 15px -3px rgba(0, 102, 204, 0.2)`
