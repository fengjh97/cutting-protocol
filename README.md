# Cutting Lab

手机端优先的减脂晚餐计划 App。输入今天已经吃了多少、训练前垫了什么，页面会把晚餐的肉、主食、脂肪和水果一起算好，并检查全天 P/C/F/kcal 是否贴近目标（140P · 225C · 60F · 2000kcal）。

当前版本按手机 App 的单手操作路径重做：首页一屏先显示“今晚吃什么”、全天热量和 P/C/F，已吃内容与晚餐偏好都放到底部抽屉，底部四栏导航固定。桌面端保留完整分析视图；手机端使用轻量像素伙伴和 CSS 动效，避免依赖高耗电的 WebGL。

## 本地运行

```bash
npm install
npm run dev      # 开发
npm run build    # 生产构建到 dist/
npm run preview  # 预览构建产物
```

## 技术栈

React 18 · Vite 6 · Tailwind CSS 3

## 部署

推送到 `main` 分支后构建产物发布到 `gh-pages` 分支 (GitHub Pages)。
