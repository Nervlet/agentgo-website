# AgentGo 官网

AgentGo 面向 HarmonyOS 手机与折叠屏，是集 SSH、Coding Agent 和代码查看于一体的工作台。此仓库维护其中文产品官网。

官网使用原生 HTML、CSS 和 JavaScript，无运行时依赖、无后端、无用户数据收集。所有资源随站点提供，不加载第三方字体或分析脚本。产品工作台为可交互的功能示意，使用虚构数据，不连接 SSH、模型或凭据服务。

## 本地开发

需要 Node.js 22 或更高版本，无需安装 npm 依赖。

```sh
npm run dev
```

打开终端输出的地址，默认是 `http://127.0.0.1:4173`。可用 `PORT` 指定端口。保存文件后刷新浏览器。

```sh
npm run check
npm run build
```

构建仅将公开页面与资源复制到 `dist/`，可以部署到任意静态托管平台。资源使用相对路径，支持 GitHub Pages 项目子路径。

## 发布

GitHub Pages 通过 `.github/workflows/pages.yml` 从 `main` 自动构建和部署。在仓库 Settings → Pages 中选择 GitHub Actions。

默认地址：`https://nervlet.github.io/agentgo-website/`。

如改用 Cloudflare Workers 静态资源托管，构建命令为 `npm run build`，静态资源目录为 `dist`。站点不依赖供应商 API，可随时迁移。

## 内容维护

- `index.html`：中文文案、导航、工作台示意与 FAQ。
- `styles.css`：品牌配色、响应式布局、可访问性与动效偏好。
- `app.js`：演示标签切换，支持方向键、Home / End 和键盘焦点。
- `assets/agentgo-mark.png`：现有 AgentGo 品牌图标。

公开下载链接尚未配置，发布后更新 `#get-agentgo`。不要把官网示意当作 App 截图，不要将官网开源描述为应用本体开源。正式域名确定后再补充 canonical 和站点地图。

## 许可

官网代码以 [MIT](LICENSE) 许可开源。AgentGo、Nervlet 名称及品牌图标不授予商标使用权；品牌资源说明见 [assets/NOTICE.md](assets/NOTICE.md)。应用本体许可独立于此仓库。
