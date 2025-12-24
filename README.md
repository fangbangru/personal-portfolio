# 个人作品集网站

这是一个现代化的个人作品集网站，使用 Next.js、React、TypeScript、Tailwind CSS 和 Framer Motion 构建。

## 特性

- ✨ 现代简约的深色主题设计
- 🎨 流畅的动画和过渡效果
- 📱 完全响应式设计
- ⚡ 基于 Next.js 的服务端渲染
- 🎭 使用 Framer Motion 的高级动画
- 🎯 类型安全的 TypeScript

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React

## 快速开始

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
npm run build
npm start
```

## 自定义内容

### 1. 修改个人信息

编辑以下文件来自定义你的个人信息:

- `components/Hero.tsx` - 首页标题和副标题
- `components/About.tsx` - 关于我的内容
- `components/Experience.tsx` - 工作经验
- `components/Projects.tsx` - 项目展示
- `components/Skills.tsx` - 技能列表
- `components/Contact.tsx` - 联系方式和社交链接

### 2. 修改样式

- `app/globals.css` - 全局样式和自定义 CSS
- `tailwind.config.js` - Tailwind CSS 配置

### 3. 添加图片

将你的项目截图放在 `public/` 文件夹中，然后在组件中引用。

## 部署

这个项目可以轻松部署到 Vercel:

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. Vercel 会自动检测 Next.js 并进行构建

## 项目结构

```
personal-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Loader.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 许可证

MIT License
