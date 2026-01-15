# 交互动效规范 (Interaction Specifications)

## 1. 时间参数 (Timing)
- **Hover**: 200ms `ease-out`
- **Fade In**: 300ms `ease-out`
- **Slide Up**: 500ms `cubic-bezier(0.4, 0, 0.2, 1)`
- **Page Load**: Elements stagger in with 100ms delay between items.

## 2. 状态反馈 (State Feedback)

### 悬停 (Hover)
- **Buttons**: 背景色加深 10%，阴影增加，轻微上浮 (2px)。
- **Cards**: 明显上浮 (8px)，阴影扩散。
- **Links**: 颜色变化或下划线出现。

### 点击/激活 (Active/Focus)
- **Buttons**: 缩小 (Scale 0.98) 或背景色更深。
- **Inputs**: 出现主色光圈 (Focus Ring)。

### 加载中 (Loading)
- **Form Submit**: 按钮变为不可点击，显示旋转 Loading 图标。
- **Page Load**: 骨架屏 (Skeleton) 或渐进式加载。

## 3. 动画效果 (Animations)

### 页面过渡
- 元素进入视口时使用 `IntersectionObserver` 触发 `fade-in-up` 动画。
- 距离: Y轴位移 20px -> 0px。
- 透明度: 0 -> 1。

### 移动端菜单
- 展开: 从上方滑入或淡入，背景模糊 (Backdrop blur)。
- 收起: 反向动画。

### 搜索联想
- 输入停止 300ms 后显示结果 (Debounce)。
- 结果列表淡入显示。

## 4. 无障碍交互 (Accessibility)
- **Focus Order**: 确保 Tab 键顺序符合逻辑。
- **Focus Visible**: 所有交互元素在键盘聚焦时必须有可见轮廓 (Outline)。
- **Screen Readers**: 使用 `aria-label`, `aria-expanded` 等属性描述动态内容。
