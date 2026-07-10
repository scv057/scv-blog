# 博客建站目标清单

> 优先级:**先把整套流程跑通,内容不着急**。
> 技术栈:Astro + Tailwind v4,部署到 Vercel/Netlify。
> 用途:接通 Todoist MCP 后,让 Claude 照此清单把任务写进 Todoist。

## 阶段 1 · 本地就绪(基本已完成)
- [x] Astro 脚手架 + 依赖安装
- [x] Tailwind 集成并验证(构建产物已确认工具类生成)
- [x] 全站样式迁移到 Tailwind(scoped `<style>` 全部移除,设计变量进 `@theme`,基础元素样式进 `@layer base`)
- [ ] 确认 `npm run build` 干净通过(纳入 checklist)
- [ ] 最小占位:改掉站点名 + 一句描述(去掉默认 "Astro Blog" 字样)

## 阶段 2 · 版本控制
- [ ] `git init` + 检查 `.gitignore`
- [ ] 首次 commit
- [ ] GitHub 建仓库并 push

## 阶段 3 · 部署上线(核心)
- [ ] 选平台(Vercel 或 Netlify)
- [ ] 连接 GitHub 仓库,配置构建命令(`astro build`,输出 `dist`)
- [ ] 触发首次部署,拿到线上 URL
- [ ] 验证线上站点正常(页面、样式、RSS、sitemap)

## 阶段 4 · 自动化 & 域名
- [ ] 确认「push 到 main 自动部署」生效(改一行 → 推 → 看线上更新)
- [ ] (可选)绑定自定义域名 + HTTPS
- [ ] (可选)PR 预览部署

## 阶段 5 · 内容(不着急,链路通了再慢慢填)
- [ ] 关于页 / 首页 / 社交链接换成自己的
- [ ] 删示例文章,写第一篇真正的博文
- [ ] favicon、封面图、SEO/Open Graph 图

---

## 可直接粘进 Todoist 的纯文本版

```
建站流程跑通
  确认 build 干净通过
  改站点名+描述(占位)
  git init + 首次 commit
  GitHub 建仓库并 push
  选部署平台(Vercel/Netlify)
  连接仓库+配置构建
  首次部署拿到线上 URL
  验证线上(页面/样式/RSS/sitemap)
  确认 push 自动部署
  (可选)绑定自定义域名
  (可选)PR 预览部署
内容填充(不急)
  关于页/首页/社交链接
  删示例文+写第一篇
  favicon/封面/SEO 图
```

---

## 当前进度快照(2026-07-10)
- 项目路径:`/Users/xieyanghao/workSpace/site`
- 已完成:Astro blog 模板 + Tailwind v4 集成 + 全站样式迁移,`npm run build` 通过。
- 下一步:接通 Todoist MCP → 写入本清单;然后从阶段 1 收尾 + 阶段 2(git)开始跑流程。
