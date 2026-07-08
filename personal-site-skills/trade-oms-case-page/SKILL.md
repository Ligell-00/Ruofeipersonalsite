---
name: trade-oms-case-page
description: Create or refine Chen Ruofei's 掌中宝交易 OMS case-study webpage for the personal website. Use when working on `case-trade-oms.html`, the product-cases entry linking to it, trade OMS case copy, desktop webpage layouts inspired by Ashwin-style product cases, or the 42-image trade portfolio evidence set.
---

# Trade OMS Case Page

Use this skill to build and maintain the 掌中宝交易 OMS 专题案例网页.

## Source Order

1. Read `case-trade-oms.html`, `styles.css`, `product-cases.html`, and `design-qa.md` before editing.
2. Use the copied evidence images in `assets/trade-oms/trade-work-01.png` through `trade-work-42.png`.
3. If deeper copy is needed, read `素材/掌中宝交易OMS_项目成果_从产品定位到商业闭环.md` when present.

## Page Pattern

- Preserve the global site navigation exactly; keep “产品案例” active.
- The page is a desktop/web case-study page. Do not add mobile-specific design unless the user asks.
- Use a left-image / right-text portfolio case structure:
  - Left: product screenshots, process evidence, before/after comparisons, or visual proof.
  - Right: project thinking, decisions, role, solution, and result copy.
  - Each major section should keep this left visual / right narrative rhythm.
- Keep the page like a mature product portfolio, not a marketing landing page.
- Use real project screenshots as evidence. Do not replace them with decorative icons or abstract illustrations.

## Current Case Structure

Use these sections unless the user asks for a different order:

- 01 项目概况
- 02 设计策略
- 03 搜索筛选
- 04 订单信息
- 05 自动发货
- 06 多端视觉统一
- 07 结果沉淀

## Content Baseline

- 产品：掌中宝交易，千牛工作台第三方订单管理工具，面向淘宝/天猫中小型商家。
- 范围：搜索找单、订单处理、打单发货、售后协同、通知触达、自动化发货、多端体验。
- 角色：产品设计负责人、项目核心创始成员，覆盖产品生命周期、团队管理、项目推进和方案决策。
- 核心挑战：用户多样、需求复杂、第三方流量减少、行业同质化竞争、多端体验差。
- 设计策略：高频功能体验优化、创新探索、跨平台设计。
- 搜索筛选：基于用户调研、访谈、反馈和打点数据重排信息优先级；支持批量搜索、快捷搜索和搜索历史。
- 订单列表：栅格化信息布局，固定底部操作区，优化合单标记、按钮层级和抽屉式设置。
- 自动发货：从虚拟商品、追单和自动消息触达场景中挖掘增长点。
- 多端统一：统一品牌色、字体层级、图标、功能色、订单信息、搜索筛选和打单发货路径。
- 结果：短信自动发货上线后 2 周日活约 200+；追单小程序通过后旺旺自动发货日活约 500+、峰值 1000+；估计助力月销量提升 6%-10%。
- 基础数据：7.5W 订购店铺数、56.9% 续订率、5.0 评分。

## Writing Rules

- Show decisions and evidence, not feature lists.
- Every major section should connect: user problem -> product judgment -> design action -> result or evidence.
- Keep Chinese copy concise and portfolio-ready.
- Avoid unsupported claims beyond the available images and source notes.

## Visual Rules

- Use the `trade-split-*` CSS namespace for this page.
- Do not modify global navigation styles for this page.
- Do not add mobile media queries unless explicitly requested.
- Support both light and dark themes through the existing `data-theme` switch; keep theme colors in page-scoped CSS variables.
- Avoid nested page cards, decorative gradient orbs, and text over images.
- Large images should be displayed as project evidence cards with stable spacing and no stretching.

## QA

After meaningful edits:

- Check that all referenced `assets/trade-oms/trade-work-*.png` files exist.
- Run `git diff --check`.
- Check desktop layout for horizontal overflow, image loading, text readability, and sidebar sticky behavior.
- Update `design-qa.md` with scope and limitations.
