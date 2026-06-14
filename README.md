# Cutting Lab

手机端优先的减脂晚餐计划 App。输入今天已经吃了多少、训练前垫了什么，页面会把晚餐的肉、主食、脂肪和水果一起算好，并检查全天 P/C/F/kcal 是否贴近目标（140P · 225C · 60F · 2000kcal）。

当前版本重做了首屏、暗色高级视觉、3D/2D 动态背景和生成式食物素材，让打开页面后先看到“今晚怎么吃”，细项再慢慢调。

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
