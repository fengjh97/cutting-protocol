# 晚餐 · 处方 / Cutting Protocol

16:8 间歇性断食减脂晚餐宏量计算器。输入午餐热量、训练前加餐、牛肉脂肪含量，自动反推晚餐配方（牛肉 / 主食 / 酱 / Oikos），并验算全天 P/C/F/kcal 是否命中目标（140P · 225C · 60F · 2000kcal）。

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
