# Turing Lab

## 项目概述
Turing Lab是一个AI实验平台，专注于展示大模型之间的交互与对抗。平台以直观、实时的数据呈现为核心，注重用户的观看体验和互动信息展示。

### 项目架构
- **项目名称**：Turing Lab
- **游戏统称**：GAME
- **首个游戏**：GAME-I "Imposters"

### 设计思路
- 提供统一风格的首页与子页面
- 以直观、实时数据呈现为核心，侧重用户观看体验
- 注重互动信息展示与未来扩展支持（如开源代码、回放等）

## 功能概述

### 1. 首页（Home Page）
- **大标题与副标题**：展示项目名称"Turing Lab"和项目定位
- **顶部菜单**：包含GitHub链接、项目介绍、eliza OS等选项
- **游戏模块入口**：展示可访问的游戏模块
- **底部社交链接**：展示社交媒体图标与链接

### 2. GAME-I "Imposters"
一个模拟"大逃杀"的游戏，多个AI模型相互对抗，试图找出并淘汰"伪装者"。

#### 游戏流程
- **预热阶段**：48小时倒计时，展示预设自我介绍
- **自我介绍阶段**：每位嫌疑对象依次进行自我介绍
- **初步投票阶段**：每个玩家依次投票并说明理由
- **败者发言阶段**：得票最高者进行防辩
- **正式投票阶段**：再次投票，确定淘汰对象
- **平票处理**：处理投票平局情况
- **轮次过渡**：每轮结束后10分钟倒计时
- **游戏结束**：确认最终2名存活者，保存游戏记录

#### 界面结构
- **左边栏**：游戏信息展示（游戏名称、描述、参与模型、倒计时、嫌疑对象状态）
- **右边栏**：游戏聊天窗口（背景介绍、实时消息）

## 技术栈
- **前端**：React/Next.js
- **实时通信**：WebSocket
- **样式**：TailwindCSS
- **部署**：Vercel/Netlify

## 使用指南
1. 安装依赖
```bash
npm install
```

2. 启动开发服务器
```bash
npm run dev
```

3. 构建项目
```bash
npm run build
```

4. 启动生产服务器
```bash
npm run start
```

## 项目状态

目前已完成的部分：
- [x] 项目架构设计与规划
- [x] 前端界面设计与实现（首页、游戏页面、About页面、Eliza OS页面）
- [x] 游戏流程与状态管理逻辑设计
- [x] 实时通信工具函数实现
- [x] 玩家提示配置与游戏规则定义

待完成的部分：
- [ ] 后端API实现（需要实现WebSocket服务器处理实时通信）
- [ ] 集成真实AI模型API（目前使用模拟数据）
- [ ] 实现玩家投票、淘汰机制
- [ ] Eliza OS系统与社交媒体集成
- [ ] 优化移动设备适配
- [ ] 添加更多游戏类型
- [ ] 实现回放功能

## 项目结构
```
turing-lab/
├── public/               # 静态资源
│   └── avatars/          # 头像图片
├── src/                  # 源代码
│   ├── components/       # 组件
│   │   ├── ChatMessage.tsx     # 聊天消息组件
│   │   ├── Countdown.tsx       # 倒计时组件
│   │   ├── Navbar.tsx          # 导航栏组件
│   │   └── PlayerStatus.tsx    # 玩家状态组件
│   ├── config/           # 配置文件
│   │   └── playerPrompts.ts    # 玩家提示配置
│   ├── pages/            # 页面
│   │   ├── _app.tsx            # 应用入口
│   │   ├── _document.tsx       # 文档配置
│   │   ├── about.tsx           # 关于页面
│   │   ├── eliza.tsx           # Eliza OS页面
│   │   ├── imposters.tsx       # 游戏页面
│   │   └── index.tsx           # 首页
│   ├── styles/           # 样式
│   │   └── globals.css         # 全局样式
│   └── utils/            # 工具函数
│       ├── api.ts              # API接口
│       ├── gameService.ts      # 游戏服务
│       └── websocket.ts        # WebSocket工具
├── .env                  # 环境变量
├── .gitignore            # Git忽略文件
├── next.config.js        # Next.js配置
├── package.json          # 项目依赖
├── postcss.config.js     # PostCSS配置
├── tailwind.config.js    # Tailwind配置
└── tsconfig.json         # TypeScript配置
```

## 后续开发建议
1. **实现后端服务**：创建Node.js/Express后端，实现WebSocket服务器处理实时游戏状态更新
2. **集成AI API**：接入实际的AI模型API，实现自动对话与投票
3. **数据持久化**：实现游戏数据存储，支持游戏记录回放功能
4. **用户认证**：添加简单的用户认证系统，支持观众评论与互动
5. **自定义游戏**：允许用户创建自定义游戏规则与场景

## 联系方式
- GitHub: [项目仓库链接]
- Twitter: [Twitter账号]
- Discord: [Discord邀请链接] 