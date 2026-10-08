# Design QA

## 2026-08-05 掌中宝交易 OMS 原风格精简对比页

final result: passed

Checked scope: `case-trade-oms-refined.html`.

Passed checks:

- 新增独立对比页 `case-trade-oms-refined.html`，未覆盖原 `case-trade-oms.html`，未修改公共 `styles.css` 与 `script.js`；上一版 `case-trade-oms-p8.html` 继续保留。
- 复用原页面的导航、双栏图文、超大标题、蓝色标签、图片卡片、视频和深色模式视觉，只增加页面内必要的表格与结果样式。
- 内容收敛为 7 个章节：项目定位与角色、打印体验、订单工作台、系统模型、差异化能力、商业化、结果与沉淀。
- 将打印视频归入打印体验案例；搜索筛选与订单列表合并为连续的订单工作台案例；页面共 10 个 figure，减少重复研究图、组件图和泛方法论图。
- 指标区分 2021—2022 峰值与当前服务市场口径；移除 12% 转化率；商业化区分 2021 年前免费基础发货闭环与当前基础版起付费。
- 系统模型统一为“订单 → 打印/发货处理 → 包裹/运单”，不设置履约单层，不扩展缺少证据的系统推荐、冲突校验和全链路日志。
- 桌面端 1280×720 页面高度约 6163px，相比原页面约 7672px 收敛约 20%；首屏角色、简介与三项峰值指标均可见。
- 移动端 390×844 保持正文在前、视觉证据在后的自然顺序，无页面级横向溢出；版本表仅在自身容器内横向滚动。
- 浅色与深色主题均可读，图片和视频加载正常，系统模型放大/关闭交互正常，浏览器控制台无 error。

Notes:

- 本页面仅用于本地对比，未加入产品案例入口，未发布或替换线上页面。

## 2026-08-05 掌中宝交易 OMS P8 叙事优化对比页

final result: passed

Checked scope: `case-trade-oms-p8.html`.

Passed checks:

- 新增独立对比页 `case-trade-oms-p8.html`，未覆盖或替换原 `case-trade-oms.html`，也未修改公共 `styles.css` 与 `script.js`。
- 按 P0 修正指标与时间口径：删除 12% 转化率；区分 2021—2022 峰值数据与当前淘宝服务市场数据。
- 将打印面单提升为主案例，并明确电脑端/移动端设计与开发技术实现的职责边界；未补造体验测试与效率提升数据。
- 系统模型统一为“订单 → 打印/发货处理 → 包裹/运单”，不再设置履约单层，也未扩展缺少证据的系统推荐、冲突校验或全链路日志。
- 商业化章节区分 2021 年前免费基础发货闭环与当前基础版起付费，版本表包含 15/25/50/80 元月费与 300/400/1000/1500 日均订单量。
- 桌面端 1280×720、移动端 390×844 均无页面级横向溢出；移动端保持“结论与角色在前、视觉证据在后”的阅读顺序。
- 浅色与深色主题均可读；页面 1 个 H1、7 个 H2，案例标题使用语义化标题；所有正式展示图片均有 alt，系统模型放大按钮可用。
- 视频加载成功，图片放大打开/关闭状态正常，浏览器控制台无 error。

Notes:

- 移动端版本表在自身容器内横向滚动，不引起整页横向溢出。
- 页面为本地对比稿，未发布、未替换线上页面，也未加入产品案例入口。

## 2026-07-13 促销项目尾部新增 3 张产品图

Checked scope: `case-promo.html`, `assets/promo/promo-product-conversion-optimize.png`, `assets/promo/promo-product-create-event.png`, `assets/promo/promo-product-data-viz.png`.

Passed checks:

- 源图从 `素材/促销素材/促销产品{05,09,17}.png` 复制到 `assets/promo/` 并重新命名，3 张图均为 1920×1080。
- 在 `case-promo.html` 末尾（项目复盘之后）新增 `promo-more-scenes-section` section，沿用 `.trade-split-visual--sticky` + `.promo-split-visual-stack` + `.promo-product-frame` 结构，放置 3 张图片。
- 右侧 copy 写最小化文案：编号 09 / More Scenes、标题「更多场景」与一句话说明，不破坏页面节奏。
- 复用既有 `.promo-product-frame` 样式，无需新增样式规则。
- 后续用户要求撤销：删除 `promo-more-scenes-section`，并把原 07 / Project Impact → 05、08 / Key Learnings → 06，编号连续（01–06）。复制进 `assets/promo/` 的 3 张图改为未引用（保留不动，未删除）。

---

## 2026-07-13 掌中宝促销横向自动轮播

final result: passed

Checked scope: `promo-horizontal-scroll.html`, `assets/promo/promo-horizontal-scroll-1.png`, `素材/促销素材/横向滚动播放1-自动轮播.gif`.

Passed checks:

- 源图 `素材/促销素材/横向滚动播放1.png`（4953×1306）复制到 `assets/promo/promo-horizontal-scroll-1.png` 用于页面引用。
- 生成自包含横向自动轮播页 `promo-horizontal-scroll.html`：视口宽度 1920、`aspect-ratio: 1920/1306`（高度按原图比例不变）、`overflow:hidden`，内部 `.carousel-track` 用两份相同图片做 `translateX(0 → -50%)` 无缝循环，动画 50s linear infinite，悬停暂停，`prefers-reduced-motion` 下关闭动画。
- 另生成可独立查看的滚动动图 `素材/促销素材/横向滚动播放1-自动轮播.gif`（45 帧、1920 宽、loop=0 无限循环、首尾无缝），便于在任意看图软件查看滚动效果。

Notes:

- 「滚动」是 CSS/序列帧动画，不是单张静态图；HTML 页在浏览器预览面板即可看到长图滚动，GIF 可在任意图片查看器打开。
- GIF 为 22MB（1920×1306×45 帧），体积偏大；如需要更轻量预览可降到 960 宽版本。

---

## 2026-07-12 掌中宝商品案例页 GIF 素材顺序调整

final result: passed

Checked scope: `case-goods.html`, `design-qa.md`.

Passed checks:

- 将「商品体检」GIF（`goods-checkup.gif`）从商品明细之后移动到「商品列表」GIF（`goods-list.gif`）之前；现 GIF 顺序为：商品体检 → 商品列表 → 商品明细。
- 将「标题优化」GIF（`goods-title-optimization.gif`）与「上架优化」GIF（`goods-shelf-optimization.gif`）互换位置；现顺序为上架优化在前、标题优化在后。
- 媒体栈最终顺序：PC 工作台、移动端视频 1、移动端视频 2、主图水印视频、商品体检、商品列表、商品明细、上架优化、标题优化。

Notes:

- 视频帧（移动端 1/2、水印）与 GIF 帧均保持在同一 `.goods-media-stack` 容器内，本次仅调整了 5 个 GIF 帧的相对位置。

---

## 2026-07-12 掌中宝商品案例页素材顺序调整

final result: passed

Checked scope: `case-goods.html`, `design-qa.md`.

Passed checks:

- 已按浏览器批注将 `goods-list.gif` 与其下方 `goods-detail.gif` 从体检图之后移动到体检图之前。
- 商品页连续素材栈当前顺序为：PC 工作台、移动端视频 1、移动端视频 2、商品列表、商品明细、商品体检、标题优化、上架优化。
- 静态解析确认 `goods-checkup.gif` 已排在 `goods-list.gif` 与 `goods-detail.gif` 之后。
- `node --check script.js` 通过。

Notes:

- 尝试刷新当前 `file://` 浏览器标签做页面复验时被 Browser Use URL policy 拦截；本轮以源码静态解析结果作为验收依据。

---

## 2026-07-12 掌中宝商品案例页新增水印演示视频

final result: passed

Checked scope: `case-goods.html`, `assets/goods/`, `design-qa.md`.

Passed checks:

- 将 `素材/商品素材/水印.mp4`（2.1M）复制到 `assets/goods/goods-watermark-demo.mp4`。
- 在商品案例页媒体栈第 4 位（移动端视频 2 之后、商品列表 GIF 之前）新增 `<video>` 帧引用该视频，aria-label 为「掌中宝商品主图水印功能演示视频」。
- 当前媒体栈顺序：PC 工作台、移动端视频 1、移动端视频 2、主图水印视频、商品列表、商品明细、商品体检、标题优化、上架优化。
- 原 `goods-watermark.gif` 仍保留在其原有位置，未被替换。

Notes:

- 水印模块现同时有 GIF（原位置）与新增 mp4 演示（第 4 位）两种素材；如需合并或替换 GIF 可再调整。

---

## 2026-07-12 掌中宝商品案例页顶部素材与转型行调整

final result: passed

Checked scope: `case-goods.html`, `styles.css`, `design-qa.md`.

Passed checks:

- 已将 PC 工作台图移动到左侧连续素材栈第 1 位，并添加 `goods-frame--padded` 白色边距底座。
- 两个视频顺延为第 2、第 3 位，保留 `autoplay loop muted playsinline controls` 自动播放配置。
- 已移除页面中 `goods-watermark.gif` 展示引用。
- `界面是否美观 → 操作是否高效` 等 4 组转型文案已改为同行 flex 排版。
- 静态检查确认素材顺序、移除引用和转型行 class 均已落到 `case-goods.html`。
- `git diff --check` 通过；`node --check script.js` 通过。

Notes:

- 曾尝试通过本地服务 `python3 -m http.server 8767` 做浏览器 QA，但 CDP 连接被当前沙箱策略拦截；服务已停止。

---

## 2026-07-12 掌中宝商品案例页连续双栏改版

final result: passed

Checked scope: `case-goods.html`, `styles.css`, `design-qa.md`.

Passed checks:

- 已参考掌中宝交易页，将商品页改为一个连续双栏 section：左侧素材连续浏览，右侧文案连续浏览，不再按章节拆分为多个左右图文 section。
- 已将原底部两个视频移动到左侧素材栈第 1、第 2 个位置，并保留 `autoplay loop muted playsinline controls` 自动播放配置。
- 左侧素材栈统一使用 `goods-continuous-media`，图片/视频之间保持一致间距。
- 右侧文案整合为单个 `goods-continuous-copy` article，H2、H3、段落、列表连续排布，只保留轻量标签间距。
- 桌面浏览器 QA：布局增强开启，左侧 rail 只有 1 个连续 visual item，右侧 story 只有 1 个 section；媒体共 9 个，前两项为视频且加载成功，无横向滚动，控制台无 error。
- 移动/窄视口 QA：页面保持 1 个 section，左侧 9 个媒体连续，前两项为视频且加载成功，无横向滚动。
- `git diff --check` 通过；`node --check script.js` 通过。

Notes:

- 使用临时本地服务 `python3 -m http.server 8766` 完成浏览器 QA，检查后已停止服务。

---

## 2026-07-12 掌中宝商品案例页列表圆点改灰

final result: passed

Checked scope: `styles.css`, `design-qa.md`.

Passed checks:

- 已按浏览器批注将商品页 `.trade-split-copy` 内所有列表圆点从橙色改为深灰色。
- 改动局限于 `.goods-case-main`，不影响交易、促销、工具吧等其他案例页的 accent 圆点。
- 深色模式下列表圆点使用浅灰色，保证可读。
- `git diff --check` 通过；`node --check script.js` 通过。

---

## 2026-07-12 掌中宝商品案例页移除生成场景图

final result: passed

Checked scope: `case-goods.html`, `design-qa.md`.

Passed checks:

- 已按最新反馈移除商品页中所有 `assets/goods/goods-app-icon.png` 展示引用。
- `我的角色` 与 `从设计师到产品经理` 章节左侧视觉改为 `goods-dashboard.png`，避免页面出现用户标注的生成场景图。
- 未删除 `assets/goods/goods-app-icon.png` 文件，仅从网页引用中移除。
- 静态检查确认 `case-goods.html` 不再引用 `goods-app-icon.png`。
- `git diff --check` 通过；`node --check script.js` 通过。

---

## 2026-07-12 掌中宝商品案例页浏览器批注清理

final result: passed

Checked scope: `case-goods.html`, `styles.css`, `design-qa.md`.

Passed checks:

- 已按浏览器批注删除商品页 hero 中的 `Product & UI Case`。
- 已删除 hero 中的 `从交互设计到产品思维`。
- 已删除 hero 下方三条 metrics：`千牛生态头部`、`连续10年获得`、`降低商品维护成本`。
- 已去掉所有 H2 内的序号，H2 保留为 `我的角色`、`设计挑战`、`设计策略`、`代表性方案`、`Design System 与平台规范`、`项目价值`、`从设计师到产品经理`。
- 已将商品页所有编号英文标签 `.trade-section-label` 从橙色改为深灰色，深色模式下使用浅灰保证可读。
- `git diff --check` 通过；`node --check script.js` 通过。

---

## 2026-07-12 掌中宝商品案例页文案按 P7 版替换

final result: passed

Checked scope: `case-goods.html`, `design-qa.md`.

Passed checks:

- 已按 `素材/商品素材/掌中宝商品_项目介绍网站文案_P7体验设计版.md` 替换商品详情页文案。
- 页面主 H2 调整为源文档 7 个章节：`01 我的角色`、`02｜设计挑战`、`03｜设计策略`、`04｜代表性方案`、`05｜Design System 与平台规范`、`06｜项目价值`、`07｜从设计师到产品经理`。
- 每个 H2 上方补充编号标签，并按要求自行补充英文说明，如 `01 / Role`、`02 / Challenge`、`03 / Strategy`。
- H3、段落、列表、引用和加粗转折内容按源文案照搬；移除上一版额外发挥的流量优化章节说明和旧版概述/影响文案。
- 页面图片与视频结构保留，仅调整对应章节的右侧文案。
- `git diff --check` 通过。

---

## 2026-07-12 掌中宝商品案例页素材编排

final result: passed

Checked scope: `case-goods.html`, `styles.css`, `script.js`, `assets/goods/`.

Passed checks:

- 将商品素材复制为正式页面资产并统一命名到 `assets/goods/`，保留 `素材/商品素材/` 原始文件不移动。
- `case-goods.html` 按案例叙事重排视觉素材：工作台总览、商品列表、商品明细、商品体检、标题优化、上架优化、主图水印、移动端视频分别对应右侧章节文案。
- 新增「标题优化与上架优化」章节，用 04/05 两张 GIF 对应流量优化能力，避免素材无文案承接。
- 商品页添加 `case-static-media-main`，并让 `script.js` 的滚动增强布局跳过该页，桌面端保持逐段左图右文对应，不再出现后段图文错位。
- 新增商品页专项样式：工作台图、GIF 图、竖屏水印图、横屏视频、品牌图标容器均有稳定比例与深色模式适配。
- 桌面浏览器 QA：媒体全部加载成功，12 个 section 保持直接布局，前 4 段左右基线差为 0，无横向滚动、无标题溢出。
- 移动端 390×844 QA：单列顺序正确，媒体全部加载成功，无横向滚动、无标题溢出；水印图保持 272×484 竖屏比例，两个视频保持 330×186 横屏比例。
- 深色模式 QA：背景与正文可读，媒体全部加载成功，无横向滚动，控制台无 JavaScript error。
- `git diff --check` 通过。

Notes:

- 使用临时本地服务 `python3 -m http.server 8765` 完成浏览器 QA，检查后已停止服务。

---

## 2026-07-09 工具吧案例页新建

final result: passed

Checked scope: `case-tools.html`, `styles.css`, `product-cases.html`.

Passed checks:

- 按 `素材/工具吧_项目介绍网站文案.md` 完全新建 `case-tools.html`，左图右文双栏结构，沿用 `trade-case-layout`。
- 文档 5 个章节完整映射为 5 个 `case-story-section`：产品概述、工具入口与信息架构、权限体系设计、运营设计与服务详情页转化优化、帮助知识库建设。
- 权限体系设计含 3 个 h3（角色边界、功能权限、数据权限）+ 收尾段。
- 运营设计含 3 个 h3（价值表达清晰化、信息结构重组、转化路径优化）+ 收尾段。
- 工具入口与信息架构含 9 条 ul 列表，帮助知识库含 5 条 ul 列表。
- 新增 `.tools-case-main` CSS 类，accent 色 `#15a888`（teal），并加入 metrics strong 选择器。
- `product-cases.html` 工具吧图片链接和标题链接从 `#tools` 改为 `case-tools.html`。
- 不擅自发挥，文档原文逐段映射。
- `git diff --check` 通过。

---

## 2026-07-09 掌中宝商品案例页文案替换

final result: passed

Checked scope: `case-goods.html`.

Passed checks:

- 按 `素材/掌中宝商品_项目介绍网站文案_P7体验设计版.md` 完全替换正文文案，不擅自发挥。
- 保留页面结构（左图右文双栏、header/nav、左侧 metrics 面板），仅替换 `<article>` 内文案。
- 文档 10 个章节完整映射为 10 个 `<section class="case-story-section">` + h2：产品概述、Ownership｜我的角色、01-06 核心设计成果、组件规范与多端一致性、影响与沉淀。
- Ownership 下保留 h3「我的主要职责」+ 5 条 ul 列表。
- 01-06 每节含描述段 +「设计方向包括：」+ ul 列表 + 部分有收尾段，与文档一致。
- hero lede 改为文档副标题「面向淘宝 / 天猫商家的商品管理系统」。
- meta description 同步更新为文档首段概述。
- 文档末段缺句号处补齐句号。
- `git diff --check` 通过。

---

## 2026-07-09 vibe coding 取名 Agent 第二屏

final result: passed

Reference: https://name-agent-all7.onrender.com/prototype/index.html

Checked scope: `vibe-coding.html`, `styles.css`.

Passed checks:

- 在 Prompt Make 首屏下方新增取名 Agent 第二屏，两屏之间以 `border-top` 分隔。
- 布局为左图右文（镜像首屏的右图左文）：`.vibe-section` grid 为 `1.08fr / 0.92fr`（左图为重）。
- 左图使用内联 SVG 占位（720×520），显示"取名 Agent 原型截图 / 替换为实际截图即可"，用户可直接换为 `<img src="...">` 真实截图。
- 右文包含标题「取名 Agent」、项目概述、meta 一行（vibe coding · AI 产品化 · 前端设计 · Render 部署）、反色药丸按钮。
- 按钮链接到 `https://name-agent-all7.onrender.com/prototype/index.html`（target="_blank"），hover 上浮 + 箭头右移。
- 第二屏为内容高度（非全屏），padding 使用 clamp 响应式保证留白。
- 浅色/深色模式均跟随 `data-theme` 切换，卡片阴影、径向辉光、文字颜色自动适配。
- Playwright/Puppeteer 都无法安装 Chromium（sandbox OOM），因此使用 SVG 占位而非真实截图。
- `git diff --check` 通过。

---

## 2026-07-09 vibe coding 示意图白色背景处理

final result: passed

Checked scope: `assets/prompt-make-hero.png`.

Passed checks:

- 示意图 PNG 虽为 RGBA 格式，但内层存在大面积浅灰不透明背景像素，CSS 透明背景不够。
- 用 BFS 从透明边缘向内侵蚀算法处理：遇 min(R,G,B) ≥ 220 的浅色像素变透明并继续传播，遇深色像素停止（保护浏览器窗口内容）。
- 处理后顶部白色条和底部白角已转为透明；浏览器窗口内容（深色像素）完整保留。
- 处理脚本用 Python Pillow，一次性运行，无临时文件残留。

---

## 2026-07-09 vibe coding 首屏内容精简与示意图背景处理

final result: passed

Checked scope: `vibe-coding.html`, `styles.css`.

Passed checks:

- 已删除左栏顶部 kicker 圆角标签「Chrome 插件 · AI Prompt 工具 · MVP」。
- 已删除左栏「产品策略 · PRD · 交互设计 · AI 规则设计 · vibe coding」meta 一行。
- 左栏现仅保留标题、项目概述和「查看项目」按钮；按钮补充 `margin-top: 1.5rem` 维持与概述段的呼吸节奏。
- 示意图卡片 `.vibe-hero-frame` 背景由 `var(--color-bg)` 改为 `transparent`，去掉 Chrome 示意图后的白色背景。
- 背景改动仅作用于 `.vibe-hero-frame`（该类专属于 vibe coding 首屏），未影响项目其他图片。
- 浅色 / 深色模式均跟随现有 `data-theme` 切换，无横向滚动。
- `git diff --check` 通过。

---

## 2026-07-09 vibe coding 首屏 Prompt Make 项目介绍

final result: passed

Reference: https://magic-portfolio.com/

Checked scope: `vibe-coding.html`, `styles.css`, `assets/prompt-make-chrome-demo.png`.

Passed checks:

- `vibe-coding.html` 原“场景判断 / 原型验证 / 持续评测”摘要内容已替换为 Prompt Make 项目首屏，保留全站 `site-header` 导航、主题切换按钮和移动端侧滑菜单结构。
- 首屏采用左文右图双栏布局：左栏为 kicker 标签 + 标题 + 项目概述 + 角色一行 + 查看项目按钮；右栏为 Chrome 示意图卡片。
- 左栏标题为“Prompt Make”，内容根据 `项目学习/prompt-make-portfolio/index.html` 概括为 Chrome 插件一键优化 Prompt 的定位。
- 按钮采用反色药丸样式（浅色模式深底浅字、深色模式浅底深字），hover 时上浮、加阴影、箭头右移，跟随 `data-theme` 自动切换。
- 右栏示意图复制为正式资产 `assets/prompt-make-chrome-demo.png`，置于圆角卡片 + 阴影 + 蓝色 accent 径向辉光背景中。
- 浅色模式：浅灰页面背景、白色图片卡、深色正文、蓝色 kicker，对比度可读。
- 深色模式：深色背景、深色卡片阴影、浅色正文、浅蓝 kicker，对比度可读。
- 首屏高度 `calc(100vh - header)`，桌面双栏比例 0.92fr / 1.08fr，无横向滚动。
- 未新增移动端专项适配（按要求）。
- 仅改动 vibe coding 首屏，未修改其他页面、导航或全局变量。
- `git diff --check` 通过。

Notes:

- 使用临时本地服务 `python3 -m http.server 8765` 完成浏览器 QA。
- “查看项目”按钮 `href="#"` 为占位，待后续接入 Prompt Make 详情页或外链时更新。

---

## 2026-07-06 掌中宝交易专题页浅色/深色主题

final result: passed

Checked scope: `styles.css`, `personal-site-skills/trade-oms-case-page/SKILL.md`.

Passed checks:

- 掌中宝交易专题页已支持浅色和深色两套主题，跟随现有导航主题按钮的 `data-theme` 切换。
- 交易专题页颜色已抽为 `trade-split-*` 页面作用域内的 CSS 变量，未修改全站导航样式。
- 浅色模式使用浅灰页面背景、白色图片容器、深色正文；深色模式保留深色背景、浅色正文和蓝色强调。
- 已更新 `trade-oms-case-page` skill，后续维护要求通过现有 `data-theme` 支持浅深色。
- `git diff --check` 通过。

---

## 2026-07-06 掌中宝交易网页端左图右文专题页

final result: passed

Checked scope: `case-trade-oms.html`, `styles.css`, `assets/trade-oms/`, `personal-site-skills/trade-oms-case-page/SKILL.md`.

Passed checks:

- 掌中宝交易专题页已改为网页端左图右文结构，每个章节左侧展示项目证据图，右侧展示项目思路、设计判断和结果说明。
- 保留全站导航结构，“产品案例”导航 active 状态仍由现有脚本控制。
- 42 张交易作品图已复制到 `assets/trade-oms/`，当前页面引用其中 25 张作为主要项目证据。
- 页面内容从现有交易案例出发，结合作品图补充项目概况、设计策略、搜索筛选、订单信息透传、虚拟商品自动发货、多端视觉统一和项目成果。
- 已更新 `personal-site-skills/trade-oms-case-page/SKILL.md`，明确后续维护使用左图右文网页结构，不使用左侧目录式布局。
- 未新增移动端专项适配。
- `git diff --check` 通过。

---

## 2026-07-05 产品案例页项目间距调整

final result: passed

Checked scope: `styles.css`.

Passed checks:

- 产品案例列表项目之间的桌面间距从 `clamp(3rem, 6vw, 5.4rem)` 调整为 `clamp(2rem, 4vw, 3.6rem)`，约缩小三分之一。
- 移动端项目间距从 `4rem` 调整为 `2.67rem`，保持同样缩减比例。
- 仅调整 `.portfolio-projects` 的 `gap`，未改变项目内容、图片尺寸或页面结构。

---

## 2026-07-05 掌中宝促销专题页

final result: passed

Checked scope: `case-promo.html`, `product-cases.html`, `styles.css`.

Passed checks:

- 新增 `case-promo.html`，沿用同样的左图右文案例页方法，保留全站导航结构。
- 左侧为可替换图片占位框，没有新增插画资产；右侧为项目叙事内容。
- 右侧内容包含产品概述、我的角色、私域营销体系构建、促销打折活动流程优化、营销素材库与后台维护、多角色协作与方案评审、结果与沉淀。
- 产品案例页“掌中宝促销”标题链接已跳转到 `case-promo.html`，浏览器点击验证通过。
- 桌面 1440x900：无横向滚动，左图右文双栏正常，图片占位框尺寸稳定，7 个章节完整。
- 移动 390x844：布局切换为单列，左侧 sticky 关闭，图片占位框和正文无横向溢出。
- 深色模式：占位框、标题、正文颜色可读，无横向滚动。
- 浏览器控制台无 JavaScript error。
- `git diff --check` 通过。

Notes:

- 使用临时本地服务 `python3 -m http.server 8765` 完成浏览器 QA，检查后已停止服务。

---

## 2026-07-05 掌中宝商品专题页

final result: passed

Checked scope: `case-goods.html`, `product-cases.html`, `styles.css`.

Passed checks:

- 新增 `case-goods.html`，沿用掌中宝交易专题页的双栏案例方法，保留全站导航结构。
- 左侧按用户要求只做可替换图片占位框，没有新增插画资产；占位说明指向后续可替换的“掌中宝商品详情页12.gif”或正式截图。
- 右侧内容围绕掌中宝商品的产品概述、我的角色、商品维护流程优化、营销素材模块、详情页与转化设计、组件规范与多端一致性、影响与沉淀展开。
- 产品案例页“掌中宝商品”标题链接已跳转到 `case-goods.html`，浏览器点击验证通过。
- 桌面 1440x900：无横向滚动，左图右文双栏正常，图片占位框尺寸稳定，7 个章节完整。
- 移动 390x844：布局切换为单列，左侧 sticky 关闭，标题、图片占位框和正文无横向溢出。
- 深色模式：占位框、标题、正文颜色可读，无横向滚动。
- 浏览器控制台无 JavaScript error。
- `git diff --check` 通过。

Notes:

- 使用临时本地服务 `python3 -m http.server 8765` 完成浏览器 QA，检查后已停止服务。

---

## 2026-07-05 掌中宝交易 OMS 专题页

final result: passed with skill-validator limitation

Reference: https://ashwinportfolio.com/portfolio-item/zcrm-b2bsaas/

Checked scope: `case-trade-oms.html`, `product-cases.html`, `styles.css`, `script.js`, `assets/case-trade-oms-screens.svg`, `personal-site-skills/trade-oms-case-page/`.

Passed checks:

- 新增 `case-trade-oms.html`，保留全站导航结构，详情页导航 active 为“产品案例”。
- 页面采用参考站的双栏案例页节奏：左侧 sticky 产品截图占位与关键指标，右侧项目介绍长文。
- 右侧包含产品概述、我的角色、0-1 MVP、核心链路优化、机会点挖掘、多端视觉统一、商业化体系构建。
- 产品案例页“掌中宝交易”标题链接已跳转到 `case-trade-oms.html`，浏览器点击验证通过。
- 桌面 1440x900：无横向滚动，左/右双栏正常，图片资源加载成功，7 个章节完整。
- 移动 390x844：布局切换为单列，左侧 sticky 关闭，标题和正文无横向溢出。
- 深色模式：背景、标题、正文颜色可读，图片资源加载成功，无横向滚动。
- 浏览器控制台无 JavaScript error。
- `assets/case-trade-oms-screens.svg` 通过 `xmllint --noout`。
- `git diff --check` 通过。
- 已新增独立 skill：`personal-site-skills/trade-oms-case-page/SKILL.md`。

Notes:

- `quick_validate.py` 和 `generate_openai_yaml.py` 因当前 Python 环境缺少 `yaml` 包无法运行；已手写最小合规 `agents/openai.yaml`。
- 使用临时本地服务 `python3 -m http.server 8765` 完成浏览器 QA，检查后已停止服务。

---

## 2026-07-05 产品案例页项目卡片与视觉图优化

final result: passed with browser-plugin limitation

Checked scope: `product-cases.html`, `styles.css`, `assets/case-*.svg`.

Passed checks:

- 产品案例页 5 个项目说明已改为“项目介绍 + 角色职责”两行结构。
- 掌中宝商品、掌中宝促销、工具吧、多卖宝的职责描述已按交互/UI、产品、团队管理、运营设计和模块产品设计方向改写。
- 项目说明字号已放大，标题字号已缩小，移动端标题不再使用过大的 16vw 上限。
- 桌面 hover 位移问题已修复：补充了 `.reveal-item.is-visible` 状态下的 hover transform，避免 reveal 动效覆盖项目卡片位移，并增加标题向右滑动距离。
- 五张 `case-*.svg` 已从简单 icon 升级为圆形裁切下的产品场景视觉，分别表达 OMS 工作台、商品/SKU 维护、促销配置、运营工具集合和多店铺协作。
- `xmllint --noout assets/case-*.svg` 全部通过。
- `git diff --check` 通过。

Notes:

- in-app browser 插件在尝试重载当前 `file://` 页面时触发 URL 安全策略限制，因此本轮没有完成插件截图验收；未使用其他浏览器绕过该限制。

---

final result: passed

Reference: https://mldangelo.com/resume

Checked viewport: desktop 1536x703 and mobile 390x844.

Passed checks:

- 一级导航固定在顶部，居中排列，视觉样式改为低不透明度半透明蓝色 active 背景和下划线 hover/active。
- 一级导航在桌面视口水平居中，检测中心偏移为 0px。
- 一级导航已删除“联系”，保留“简历 / 产品案例 / 交互/UI / vibe coding”。
- “产品案例 / 交互/UI / vibe coding”已拆成独立页面，不再使用首页锚点内容。
- 首页不再包含产品案例锚点内容。
- 主体版心为 800px，简历标题、摘要、二级导航与内容卡片采用参考页布局。
- 顶部导航、一级 active、二级导航已去掉 blur，滚动时下方文字能直接透出。
- 二级导航为 sticky，滚动时停在 header 下方并跟随当前段落高亮。
- 移动端隐藏一级导航，使用汉堡按钮打开右侧侧滑菜单和遮罩。
- 汉堡按钮打开时变为关闭态，点击菜单项、遮罩或菜单外区域可关闭。
- 主题按钮支持浅色/深色切换，并写入本地偏好。
- 卡片模块已加入参考风格 hover：蓝色边框、左侧蓝色强调线、轻微浮起和阴影。
- 页面可见文案均为中文。
- 桌面与移动视口均无横向溢出。

---

## 2026-07-07 掌中宝交易 OMS 文案更新

Checked scope: `case-trade-oms.html`.

Passed checks:

- 右侧文案已按 `素材/掌中宝交易OMS_项目介绍网站文案.md` 完整重排为 14 段案例结构：Hero、Product Overview、Ownership、Market Opportunity、Personas & Use Cases、Product Strategy、System Design、4 个 Case Study、Growth & Monetization、Impact & Reach、Strategic Learnings。
- 文案口径从偏设计展示升级为“产品负责人 + 复杂系统设计 + 增长商业化 + 组织协同”的产品案例表达。
- 保留原有左图右文页面结构，本轮不考虑左侧图片匹配，未改动导航、图片资产和移动端布局。
- `git diff --check` 通过。

---

## 2026-07-08 掌中宝交易 OMS 流程图查看修复

Checked scope: `case-trade-oms.html`, `styles.css`, `script.js`.

Passed checks:

- 首屏流程图缩略图已增加内边距和白色内层画布，避免图片贴边。
- 点击流程图可打开 100% 原图弹层，支持关闭按钮、点击背景和 Escape 关闭。
- 弹层打开时页面背景滚动已锁定，关闭后恢复。
- `git diff --check` 通过。

---

## 2026-07-08 掌中宝交易 OMS 项目概述文案微调

Checked scope: `case-trade-oms.html`.

Passed checks:

- Product Overview 标题已改为“项目背景与产品概述”。
- 概述正文已更新为轻量化 OMS 定位、竞品断层、核心价值和履约链路说明。
- 本轮仅调整文案，不改动页面结构、样式、脚本和图片资产。

---

## 2026-07-08 掌中宝交易 OMS 流程图上下留白调整

Checked scope: `styles.css`.

Passed checks:

- 首屏流程图容器上下内边距已调整为原来的 2 倍。
- 左右内边距保持原值，避免流程图横向显示比例被额外压缩。
- 间距规则绑定到泳道图专用类 `trade-split-frame--swimlane`，不影响其他图片或未来新增的流程图卡片。

---

## 2026-07-08 掌中宝交易 OMS 项目概述动效替换

Checked scope: `case-trade-oms.html`, `styles.css`, `assets/trade-oms/trade-overview-motion.mov`.

Passed checks:

- “项目背景与产品概述”左侧第一张静态图已替换为上传录屏动效。
- 视频已设置 `autoplay`、`muted`、`loop`、`playsinline` 和 `preload="metadata"`，满足静音自动播放要求。
- 动效卡片使用专用样式 `trade-split-frame--motion`，保留独立内边距，不影响其他图片卡片。
- 已尝试使用系统 AVFoundation 压缩 / 重封装为 `.mp4` 和 `.m4v`，但源录屏导出失败；当前使用 12MB 原始 `.mov` 作为正式页面资源，并让浏览器自行嗅探视频类型。

---

## 2026-07-08 掌中宝交易 OMS 手机录屏画板合成

Checked scope: `case-trade-oms.html`, `styles.css`, `assets/trade-oms/trade-work-33.png`, `assets/trade-oms/trade-phone-demo.mp4`.

Passed checks:

- 已尝试连接 Figma MCP 文件 `ciL7h525bs2s1B06uOZWhy` 和节点 `2220:197`，但 `use_figma` 与截图工具均握手超时。
- 本轮使用本地已有 `trade-work-33.png` 作为交易作品33画板背景，叠加上传的 `831_1783506610.mp4` 手机录屏。
- “项目背景与产品概述”模块左侧第 2 张图已替换为画板背景 + 手机区域视频覆盖。
- 手机录屏设置 `autoplay`、`muted`、`loop`、`playsinline` 和 `preload="metadata"`，满足静音自动播放要求。
- 视频定位样式限定在 `trade-phone-composite` 内，不影响其他案例图片。

---

## 2026-07-08 掌中宝交易 OMS 市场机会章节删除

Checked scope: `case-trade-oms.html`.

Passed checks:

- 已删除原 `03 / Market Opportunity` 完整章节。
- 后续章节已上移，序列号从 `03 / Personas & Use Cases` 到 `13 / Strategic Learnings` 重新连续排列。
- 页面未残留 `Market Opportunity` 文案或 `id="market"` 章节。

---

## 2026-07-08 掌中宝交易 OMS 首屏图替换

Checked scope: `case-trade-oms.html`, `assets/trade-oms/`.

Passed checks:

- 首屏左侧原 2 张图已替换为 `trade-hero-device-showcase.png`。
- 原首屏封面图已保存为 `hero-archive-trade-work-01.png`。
- 原首屏泳道图已保存为 `hero-archive-trade-oms-swimlane.png`。
- 本轮仅调整首屏图片引用，不改动首屏文案、导航和后续章节。

---

## 2026-07-08 掌中宝交易 OMS 首屏与项目背景图片交换

Checked scope: `case-trade-oms.html`.

Passed checks:

- `01 / Product Overview` 原左侧 2 个媒体已移到首屏。
- 首屏媒体顺序已调整为手机端合成图在上，项目介绍动效在下。
- 原首屏设备展示图 `trade-hero-device-showcase.png` 已移动到 `01 / Product Overview` 左侧。

---

## 2026-07-09 掌中宝交易 OMS 项目背景配图重排

Checked scope: `case-trade-oms.html`, `assets/trade-oms/trade-oms-er-flow.png`.

Passed checks:

- `01 / Product Overview` 左侧配图已调整为三张：订单管理流程图、单据流转 ER 图、界面展示图。
- 订单管理流程图使用此前首屏流程图资源 `trade-oms-swimlane.png`。
- 附件 ER 图已复制为正式资产 `trade-oms-er-flow.png` 并放在第二张。
- 当前界面展示图 `trade-hero-device-showcase.png` 已保留为第三张。
- 流程图和 ER 图均保留点击放大查看能力。

---

## 2026-07-09 掌中宝促销专题页文案搭建

Checked scope: `case-promo.html`, `styles.css`.

Passed checks:

- 已按 `素材/掌中宝促销_项目介绍网站文案_简洁版.md` 的原有结构和文案搭建右侧专题页内容。
- 页面保留左图右文结构，左侧仍为图片占位和关键指标。
- 右侧保留源文档中的英文标题、序号、小标题、列表和路径说明。
- 已补充案例正文三级标题和列表样式，兼容浅色 / 深色主题。
- 本轮不新增正式促销截图资产，不改动导航和产品案例入口。

---

## 2026-07-09 产品案例页项目列表微调

Checked scope: `product-cases.html`, `styles.css`, `index.html`, `case-trade-oms.html`, `case-goods.html`, `case-promo.html`, `vibe-coding.html`, `interaction-ui.html`.

Passed checks:

- 全站顶部导航和移动端菜单已暂时隐藏“交互/UI”入口，保留页面文件本身不删除。
- 产品案例页已将“掌中宝促销”与“掌中宝商品”交换位置，顺序调整为交易、促销、商品、工具吧、多卖宝。
- 五个项目的首行说明已按批注更新，删除或替换了逗号后的延展描述。
- 产品案例页圆形项目图片默认恢复为彩色展示，悬停仍保留放大和阴影反馈。

---

## 2026-07-10 Prompt Make 专题页配图补充

Checked scope: `case-prompt-make.html`, `styles.css`, `assets/prompt-make-*.png`.

Passed checks:

- 已将 5 张 Prompt Make 介绍图复制为正式页面资产，统一放入 `assets/`。
- `01 / 项目定位` 左侧使用信息架构图，帮助说明插件产品形态与核心模块。
- `02 / 核心体验与工作流程` 左侧使用 Prompt 优化工作流图，对应右侧 5 步流程说明。
- `03 / 运用的 AI 产品知识` 左侧使用应用场景规则图，对应场景化 Prompt 模板说明。
- `04 / 核心功能亮点` 左侧使用核心功能亮点图，对应一键优化、模式、对比、收藏与历史。
- `05 / 项目总结` 左侧使用技术架构与数据流图，补充轻量插件、数据本地化与流程闭环证据。

---

## 2026-07-10 Prompt Make 首屏 GitHub 链接

Checked scope: `case-prompt-make.html`, `styles.css`.

Passed checks:

- 首屏原项目标签已替换为 GitHub 项目链接。
- 链接指向 `https://github.com/Ligell-00/PromptMake`，并使用新窗口打开与 `noopener noreferrer`。
- 按钮包含 GitHub 图标与“去 GitHub 查看项目”文案，样式限定在 Prompt Make 专题页，不影响其他案例页标签。

---

## 2026-07-10 Prompt Make 首屏动效对照替换

Checked scope: `case-prompt-make.html`, `styles.css`, `assets/prompt-make-real-*.mov`.

Passed checks:

- 首屏左侧动效区已替换为对照页的标签切换、视频视口和播放状态结构。
- 已补充 Gemini、chatGPT、deepseek、豆包 4 个真实演示视频资源，并支持点击标签切换与播放结束自动轮播。
- 首屏左侧动效整体放大约 20%，从偏小的展示调整为更饱满的视觉比例。
- 已移除视频视口右上角插件卡片叠层，压缩左侧图形整体高度，并让首屏左侧动效顶部与右侧文案顶部对齐。
- 已增大首屏左右栏间距，并将左侧动效放大后的溢出方向向左释放，避免视频视口贴近右侧文案。
- 动效样式均通过 `.prompt-make-page` 页面级 class 限定，不改动全站图片规则和其他页面。

---

## 2026-07-10 Prompt Make 项目定位产品界面补充

Checked scope: `case-prompt-make.html`, `styles.css`, `assets/prompt-make-ui-*.png`.

Passed checks:

- `01 / 项目定位` 左侧新增插件设置界面与优化结果面板两张产品界面图，作为真实产品证据。
- 原信息架构图位置已替换为“让普通用户也能写出高质量 Prompt”的产品价值图，并保留在产品界面组合下方。
- 新增排版使用上方双界面同排展示、下方架构图的纵向结构，界面图保留主体内容，仅轻微裁切最外侧边框像素，样式限定在 `.prompt-make-page`。
- Prompt Make 页面下方所有证据图片统一使用浅色展示底座，包含细边框、柔和背景、圆角和轻阴影。

---

## 2026-07-10 Prompt Make 章节标题层级互换

Checked scope: `styles.css`, `case-prompt-make.html`.

Passed checks:

- Prompt Make 页内所有模块的章节编号标签视觉样式已切换为原章节标题的大标题层级。
- Prompt Make 页内所有模块的章节标题已调整为深色中标题层级，字号高于正文但低于章节编号大标题。
- 模块标题不再强制英文全大写，保留文案中的首字母大写形式。
- 改动通过 `.prompt-make-page` 限定，仅影响当前专题页，不影响网站其他页面。

---

## 2026-07-10 Prompt Make 项目定位文案调整

Checked scope: `case-prompt-make.html`.

Passed checks:

- `01 / 项目定位` 已改为 `01/项目背景与定位`。
- 项目定位章节中“Prompt Make 解决的正是这个高频问题”前的段落已替换为来自 trae、workbuddy 输入框提示词增强 icon 的产品灵感说明。

---

## 2026-07-10 Prompt Make 工作流与 AI 技术章节标题调整

Checked scope: `case-prompt-make.html`.

Passed checks:

- `02 / 核心体验与工作流程` 已改为 `02/Prompt优化工作流`。
- `03 / 运用的 AI 产品知识` 已改为 `03/AI技术实现与规划`。
- 已删除 `03` 章节下方重复的 `运用的 AI 产品知识` 小标题。
- 已删除 `04` 章节下方重复的 `核心功能亮点` 小标题。

---

## 2026-07-10 Prompt Make AI 技术章节配图替换

Checked scope: `case-prompt-make.html`.

Passed checks:

- `03/AI技术实现与规划` 左侧配图已由应用场景规则图替换为技术架构与数据流图。
- 替换仅修改当前章节这一处图片引用，未影响其他图片展示规则。

---

## 2026-07-10 Prompt Make 项目总结配图替换

Checked scope: `case-prompt-make.html`, `assets/prompt-make-summary-demo.png`.

Passed checks:

- `05 / 项目总结` 左侧配图已替换为 Gemini 页面中的 Prompt Make 优化演示图。
- 新图已复制为正式页面资产 `assets/prompt-make-summary-demo.png`，未改动其他章节配图。

---

## 2026-07-10 取名 Agent 首屏素材展示

Checked scope: `case-name-agent.html`, `styles.css`, `assets/name-agent-demo.mp4`, `assets/name-agent-container.png`.

Passed checks:

- 取名 Agent 专题页首屏左侧占位图已替换为视频动效与静态启动页横排展示。
- 视频使用 `autoplay`、`muted`、`loop`、`playsinline`，可在首屏自动播放。
- 样式通过 `.name-agent-page` 限定，仅影响当前专题页首屏。

Follow-up adjustment:

- 去除首屏左侧素材外层展示底座，改为静态图在左、视频在右的直接横排展示。

Second adjustment:

- 首屏左侧素材组重新加入浅色底座，仅作用于当前首屏素材区域。
- 静态图与动效图统一为同宽横排、底部对齐；右侧视频加入 Prompt Make 首屏风格的圆角矩形外框。
- 视频通过圆角框裁切上下边缘，去除画面中的黑色横条。

Final adjustment:

- 静态图与视频图统一使用 `466 / 920` 画幅比例，保证同宽时等高。
- 视频通过上移 30px 并增加 60px 高度，由外框裁切上下黑边，避免裁掉主体内容。

Title hierarchy adjustment:

- 取名 Agent 页面模块编号标签已调整为 Prompt Make 同类页面的大标题样式。
- 模块内 `h2` 标题已调整为较小标题样式，字号高于正文但低于编号标签。

Summary image update:

- 取名 Agent 页面最后的项目总结区域已替换为正式项目总结展示图 `assets/name-agent-summary.png`。

Hero CTA update:

- 取名 Agent 首屏标题下方已新增“立即使用”按钮，链接到线上原型地址。

---

## 2026-07-11 掌中宝促销 P7 文案替换

Checked scope: `case-promo.html`, `styles.css`.

Passed checks:

- 掌中宝促销正文已按 `素材/促销素材/掌中宝促销_项目介绍网站文案_P7重构版.md` 替换为 P7 重构版结构。
- 中文标题、正文、列表与复盘内容均使用文档内容；仅章节编号标签中的英文说明为页面结构补充。
- 左侧关键指标已调整为文档中的 `40W+ 用户｜3W+ 付费用户｜45% 续费率`。
- 章节继续复用现有 `case-meta-label`、`case-story-section`、`case-lede` 等文字样式。

Notes:

- 本轮未通过浏览器做视觉截图验证，仅完成代码层级与旧文案残留检查。

---

## 2026-07-11 掌中宝促销左侧作品展示资产

Checked scope: `case-promo.html`, `styles.css`, `assets/promo/promo-left-showcase.png`, `assets/promo/promo-left-showcase.gif`.

Passed checks:

- 基于促销作品集 PDF 与四张界面截图生成左侧作品展示动效图，覆盖产品矩阵、创建流程、私域承接、抽奖互动、数据复盘五个状态。
- `case-promo.html` 左侧占位图已替换为 `assets/promo/promo-left-showcase.gif`，并保留静态 poster `assets/promo/promo-left-showcase.png` 作为资产备份。
- 三项关键指标已适配为三列展示，避免旧四列布局留下空位。
- GIF 关键帧已抽样检查，未发现空白帧、主体裁切丢失或明显错位。

Notes:

- 本轮未通过 in-app browser 做页面截图验证；浏览器侧 `file://` 检查此前受安全策略限制。

---

## 2026-07-12 产品案例页悬停投影改为各项目主色

Checked scope: `product-cases.html`, `styles.css`.

Passed checks:

- 产品案例页圆形项目图片悬停投影原统一使用蓝色 `--color-accent`，现改为各自专题页主色。
- 在 `styles.css` 用 `.portfolio-project:has(#trade|#promo|#goods|#tools)` 覆盖卡片级 `--accent`，无需改动 HTML 结构。
- 主色映射：交易 `#1890ff`、促销 `#f5222d`（红色，由 `#8f7cff` 紫改红）、商品 `#ff9b54`、工具吧 `#15a888`，与对应案例页 `--case-accent`/`--trade-accent` 一致。
- 悬停投影仍复用第 672 行 `box-shadow ... color-mix(var(--accent) 28%)` 规则，浅色/深色主题均生效。

Notes:

- `:has()` 现代浏览器均支持；投影使用 accent 与透明混色，两种主题下均可读。

---

## 2026-07-12 产品案例页移除多卖宝项目

Checked scope: `product-cases.html`.

Passed checks:

- 已删除产品案例页最后一个「多卖宝」项目卡片（原 `portfolio-project--right` 架构，含追单小程序说明、圆图与 `#multi-store` 标题链接）。
- 项目列表现在仅保留：掌中宝交易、掌中宝促销、掌中宝商品、工具吧，共 4 个项目。
- 页面 `meta description` 已从“…工具吧、多卖宝。”改为“…工具吧。”，与页面当前项目保持一致。
- 未改动导航、样式、脚本或其他页面；`#multi-store` 锚点已随卡片删除一并移除。

Notes:

- 多卖宝此前无独立专题页，仅为产品案例页卡片入口（锚点 `#multi-store`），删除不影响其他页面。
- `AGENTS.md` 内容规划与 `assets/case-multistore.svg` 资产不在本次范围内，未做处理。

---

## 2026-07-12 项目专题页连续滚动图文结构

Checked scope: `case-trade-oms.html`, `case-promo.html`, `case-goods.html`, `case-tools.html`, `case-prompt-make.html`, `case-name-agent.html`, `styles.css`, `script.js`.

Passed checks:

- 桌面端所有项目专题页已增强为左侧独立图片 rail + 右侧正文 story column，图文均为连续一页滚动。
- 左侧图片不再跟随单个章节高度定位，图片列统一使用固定 gap；抽查 6 个专题页，首屏后前 5 个图片间距均约 27px。
- 掌中宝商品、工具吧已从旧版 `trade-case-layout` 迁入新版 `trade-split` 专题结构，移除页面内“图片占位”展示。
- 移动端不启用独立图片 rail，保留每段图在上、正文在下的阅读顺序。
- 桌面 1280x720 与移动 390x844 检查均未发现横向溢出；商品页控制台无 JavaScript error。

Notes:

- 本轮通过本地静态服务器 `http://127.0.0.1:8765/` 和 in-app browser 完成布局检查；未逐页做视觉截图留档。

---

## 2026-07-12 掌中宝交易专题页批注删图

Checked scope: `case-trade-oms.html`, `script.js`, `design-qa.md`.

Passed checks:

- 已按浏览器批注删除交易专题页 `用户、场景与核心痛点` 章节左侧配图 `trade-personas.png`。
- 已按浏览器批注删除 `战略判断` 章节左侧配图 `trade-strategy.png`。
- 已按浏览器批注删除 `核心方案` 图片栈中的 `trade-work-14.png`、`trade-work-33.png` 对应的“移动端体验一致性和功能映射”图、`trade-work-38.png`。
- 已修正桌面增强布局在章节无左图时的响应式恢复逻辑，避免桌面切回移动时纯文字章节丢失。
- `node --check script.js` 通过；静态搜索确认被删除的 5 个正文配图不再被 `case-trade-oms.html` 引用。

Notes:

- 内置浏览器对当前 `file://` 页面刷新触发 URL 策略拦截，因此本轮未做浏览器刷新后 DOM 复验。

---

## 2026-07-12 掌中宝交易专题页 GIF 动效补充

Checked scope: `case-trade-oms.html`, `styles.css`, `assets/trade-oms/`, `design-qa.md`.

Passed checks:

- 已将 `素材/掌中宝交易素材/订单列表滚动/订单列表滚动.gif` 复制为 `assets/trade-oms/trade-order-list-scroll.gif`。
- 已将 `素材/掌中宝交易素材/打单/打单.gif` 复制为 `assets/trade-oms/trade-print-order.gif`。
- 两张 GIF 已插入 `我的角色与职责` 左侧视觉栈中，排序为：产品负责人核心创始成员图 → 订单列表滚动 GIF → 打单 GIF → 后续流程图。
- 已为 GIF frame 增加比例约束与 hover 禁止缩放规则，减少动图展示跳动。
- `node --check script.js` 通过；静态检查确认页面引用顺序正确。

Notes:

- 本轮未做浏览器刷新复验，仅完成源码、资产与脚本静态检查。

Update:

- 已将该位置两张动效从 GIF 替换为 MP4：`trade-order-list-scroll.mp4`、`trade-print-order.mp4`。
- 视频使用 `autoplay muted loop playsinline` 自动播放，并增加白色内边距画布，提升清晰度与展示质感。
- 页面不再引用 `trade-order-list-scroll.gif`、`trade-print-order.gif`。

---

## 2026-07-12 掌中宝交易系统图前置录入订单图

Checked scope: `case-trade-oms.html`, `styles.css`, `assets/trade-oms/`, `design-qa.md`.

Passed checks:

- 已将 `素材/掌中宝交易素材/录入订单.png` 复制为 `assets/trade-oms/trade-order-entry.png`。
- 图片已插入 `系统设计能力` 左侧视觉栈最前面，位于 OMS 泳道图和 ER 流转图之前。
- 已新增 `trade-split-frame--original-size` 样式，覆盖全局图片撑满规则：优先按原始尺寸显示，最大不超过容器宽度，避免横向溢出。
- `node --check script.js` 通过；静态检查确认引用顺序正确。

Notes:

- 本轮未做浏览器刷新复验，仅完成源码、资产与脚本静态检查。

Update:

- 已将桌面目录中的 `交易作品07.png`、`交易作品08.png`、`交易作品09.png` 复制为 `assets/trade-oms/trade-search-user-research.png`、`assets/trade-oms/trade-search-data-analysis.png`、`assets/trade-oms/trade-search-competitor-analysis.png`。
- 三张搜索筛选分析图已插入 `系统设计能力` 左侧视觉栈，位置在 `录入订单` 图之前。
- `node --check script.js` 通过；静态检查确认图片顺序正确。

Follow-up:

- 已按要求从页面中移除 `录入订单` 图；`case-trade-oms.html` 不再引用 `trade-order-entry.png`。

---

## 2026-07-12 掌中宝交易核心方案批注替换图

Checked scope: `case-trade-oms.html`, `assets/trade-oms/`, `design-qa.md`.

Passed checks:

- 已按浏览器批注删除 `核心方案` 图片栈第一张 `trade-work-07.png`。
- 已将桌面目录中的 `交易作品12.png` 复制为 `assets/trade-oms/trade-search-priority-levels.png`。
- 已按浏览器批注将原第二张 `trade-work-08.png` 替换为 `trade-search-priority-levels.png`。
- 静态检查确认 `case-trade-oms.html` 不再引用 `trade-work-07.png`、`trade-work-08.png`，且新图位于核心方案图片栈第一位。
- `node --check script.js` 通过。

Notes:

- 本轮未做浏览器刷新复验，仅完成源码、资产与脚本静态检查。

Update:

- 已将 `素材/掌中宝交易素材/交易作品17.png` 复制为 `assets/trade-oms/trade-order-layout-optimization.png`，并替换原 `trade-work-17.png`。
- 已按新增浏览器批注删除 `核心方案` 图片栈中的 `trade-work-18.png` 与 `trade-work-19.png`。
- 静态检查确认 `case-trade-oms.html` 不再引用 `trade-work-17.png`、`trade-work-18.png`、`trade-work-19.png`；`node --check script.js` 通过。

Follow-up:

- 已按最新浏览器批注删除 `核心方案` 图片栈中的 `trade-work-20.png` 与 `trade-work-27.png`。
- 已删除 `项目成果` 与 `策略沉淀与复盘` 章节左侧展示图，不再引用 `trade-impact.png` 与 `trade-learnings.png`。
- 静态检查确认 `case-trade-oms.html` 不再引用上述 4 张图；`node --check script.js` 通过。

## 2026-07-12 掌中宝促销图片顺序与直放展示

Checked scope: `case-promo.html`, `styles.css`, `assets/promo/`.

Passed checks:

- 已将用户提供的 9 张促销案例图复制到 `assets/promo/`，并按 `促销产品01、08、09、10、11、12、14、15、17` 的顺序接入页面。
- `case-promo.html` 不再引用旧的 `promo-left-showcase.png`、`promo-section-*.png` 展示图。
- 已新增“活动图预览”“模板浏览路径优化”两个段落，保证 9 张图均按顺序完整展示。
- 已将促销案例图框改为直接放图样式：无边框、无阴影、无圆角，图片本身不裁切圆角。

Notes:

- 已通过本地静态服务打开 `case-promo.html`，浏览器检查确认 9 张图均加载、自然尺寸为 1920 x 1080，图片框与图片圆角均为 0，且页面无横向溢出。
- 增强滚动布局下的图片轨道顺序同样为 1 到 9。

---

Follow-up:

- 已将 `素材/掌中宝交易素材/交易作品22.png` 复制为 `assets/trade-oms/trade-split-merge-fulfillment.png`，替换 `核心方案` 图片栈第 4 张 `trade-work-22.png`。
- 已将 `素材/掌中宝交易素材/交易作品28.png` 复制为 `assets/trade-oms/trade-virtual-auto-delivery.png`，替换 `核心方案` 图片栈第 5 张 `trade-work-30.png`。
- 静态检查确认 `case-trade-oms.html` 不再引用 `trade-work-22.png`、`trade-work-30.png`，新图顺序正确；`node --check script.js` 通过。

Follow-up:

- 已将 `素材/掌中宝交易素材/交易作品39.png`、`交易作品40.png`、`交易作品42.png` 复制为 `assets/trade-oms/trade-mobile-print-consistency.png`、`trade-mobile-sales-statistics.png`、`trade-mobile-scan-shipment-return.png`。
- 已按浏览器批注将 `核心方案` 图片栈原第 6 张 `trade-work-40.png` 替换为上述 3 张移动端优势与多端一致性图。
- 静态检查确认 `case-trade-oms.html` 不再引用 `trade-work-40.png`，3 张新图顺序正确；`node --check script.js` 通过。

Follow-up:

- 已按最新批注从 `核心方案` 图片栈中移除 `trade-mobile-print-consistency.png`。
- 已将桌面原图 `团队建设04.png`、`团队建设05.png` 直接复制为 `assets/trade-oms/trade-team-component-library-general.png`、`trade-team-business-component-library.png`，未改背景色或文字。
- 两张团队建设图已追加到 `核心方案` 图片栈最后；静态检查确认 assets 哈希与原图一致，`node --check script.js` 通过。

Follow-up:

- 已将剪贴板产品方法论图复制为 `assets/trade-oms/trade-product-methodology.png`。
- 图片已插入 `策略沉淀与复盘` 正文列表下方，位于右侧内容列，不进入左侧图片 rail。
- 已新增 `trade-inline-zoom-frame` 样式：正文图右对齐，桌面鼠标悬停时直接放大；`node --check script.js` 通过。

Follow-up:

- 已按要求将 `trade-product-methodology.png` 上方裁切 30px、下方裁切 50px，尺寸调整为 1672 x 861。
- 已将图片边缘连通白色背景转为透明，并同步将 `trade-inline-zoom-frame` 容器背景改为透明。
- 静态检查确认图片为 RGBA 且边角透明；`node --check script.js` 通过。

Follow-up:

- 已按浏览器批注替换 `核心方案` 中 `case 3：拆单、合单与复杂履约链路重构` 的正文说明。
- 新文案强化 `交易单-履约单-包裹单` 三层模型、拆单因子、合单因子，以及自动拆合单、系统推荐、人工调整、规则配置、冲突校验和全链路日志能力。
- 静态检查确认旧的 WMS / TMS 联动说明已移除；`node --check script.js` 通过。

Follow-up:

- 已按浏览器批注去掉 `trade-inline-zoom-frame` 的白色展示底座，包括边框、圆角和阴影。
- 方法论图仍保留右对齐和鼠标悬停放大能力；`node --check script.js` 通过。

Follow-up:

- 已仅修改 `trade-work-33.png` 左侧深色区域文案为「发挥移动端优势 / 轻松管理店铺」。
- 页面结构、右侧图片区域和 `trade-phone-demo.mp4` 视频叠层未改动；`node --check script.js` 通过。

---

## 2026-07-12 掌中宝促销真实截图静态展示图

Checked scope: `case-promo.html`, `styles.css`, `assets/promo/`.

Passed checks:

- 已按要求停用自生成动效展示图，页面不再引用 `promo-left-showcase.gif` 或 `promo-section-lottery.gif`。
- 首屏与各章节左侧图已替换为作品集 PDF 页面或真实后台界面截图裁切图。
- 所有促销展示图统一输出为 1280 x 720 静态 PNG，保持页面展示比例一致。
- 已移除促销页抽奖展示图的 motion 专用类，避免继续使用动效语义。

Notes:

- 本轮通过本地静态检查和资产拼图抽查确认图片来源与裁切效果；未通过 in-app browser 做页面截图验证。

---

## 2026-07-11 掌中宝促销分段左侧展示图

Checked scope: `case-promo.html`, `styles.css`, `assets/promo/`.

Passed checks:

- 掌中宝促销页已从首屏单张展示，调整为分段图文结构，每个正文章节左侧均有对应展示图。
- 已为项目概览、产品战略规划、私域互动营销升级、抽奖模块全流程改版、项目成果、项目复盘分别接入独立视觉资产。
- 抽奖模块展示已改用 `promo-section-lottery.png` 静态截图，覆盖奖品设置、活动配置与右侧移动端预览。
- 移动端使用单列阅读结构，左侧视觉取消 sticky，避免小屏图文挤压。

Notes:

- 本轮未通过 in-app browser 做页面截图验证；浏览器侧 `file://` 检查此前受安全策略限制。
## 2026-07-13 掌中宝促销产品界面截图补充

Checked scope: `case-promo.html`, `styles.css`, `assets/promo/`.

- 新增产品首页、打折 / 减钱活动创建、关注店铺有礼 3 张真实产品界面截图，并复制到 `assets/promo/` 使用语义化命名。
- 三张截图分别放入“项目概览”“产品战略规划”“私域互动营销升级”，与右侧产品定位、基础转化和私域承接文案对应。
- 三张截图均使用原图直放，仅增加统一白色留边底座、细边框与轻阴影，不添加标题栏或深色背景，不裁切产品信息。
- 原“已有抽奖玩法”展示图顺移到“抽奖模块全流程改版”，使左图与章节内容一致。
- 浏览器检查通过：桌面端 1280 x 720、移动端 390 x 844 均无横向溢出，三张图片均按原始尺寸正常加载；深色模式下白色底座保持清晰，浅色模式已恢复。

Follow-up:

- 按最新要求将三张产品界面截图调整为连续排列，位于整页左侧图片流第 2、3、4 位；第 1 位仍为项目封面，原有案例图从第 5 位继续排列。
- 已将第 2 位产品首页截图替换为 `assets/promo/promo-demo.mp4`，视频保留白色底座，并启用静音自动播放、循环、移动端内联播放和控制条；原第 3、4 位截图顺序不变。
- 浏览器验证通过：视频可正常解码，原始画面为 1844 x 1080、时长 5.2 秒；检查时 `readyState = 4`、无媒体错误、处于自动播放状态，窄屏页面无横向溢出。
- 按浏览器批注移除 `promo-product-discount-create.png` 的页面引用；新增 `promo-product-prize-setup.png`，放在“关注店铺有礼”截图下方。当前前四项为：封面、促销演示视频、关注店铺有礼、抽奖活动奖品设置。
- 按最新三条浏览器批注移除 `promo-case-02-create-before.png`、`promo-case-03-create-after.png`、`promo-case-08-system-custom-template.png` 的页面引用；同时删除后两者所在的空视觉容器，章节文案保留。
- 将“抽奖模块全流程改版”第一张 `promo-case-04-existing-plays.png` 替换为 `promo-lottery-animation-examples.png`，按 1268 x 1357 原比例完整展示移动端大转盘效果与动画实现拆解；第二张新增玩法图保持不变。
- 复用已有 `promo-product-frame` 白色底座样式，仅为尚未使用底座的封面、两张抽奖图、活动预览、模板导航和数据可视化 6 个图片容器补充该类；已有视频与产品截图未重复添加样式。

---

## 2026-07-15 一级导航悬停下拉菜单

Checked scope: 全站正式页面页头、`styles.css`。

Passed checks:

- “产品案例”悬停下拉包含掌中宝交易、掌中宝促销、掌中宝商品；“vibe coding”悬停下拉包含 PromptMake、NameAgent。
- 下拉使用独立的单列文本面板样式，没有复用简历页的分段次级导航样式。
- 产品与 AI 专题页能够在下拉中标记当前项目，一级导航 active 状态保持正常。
- 键盘聚焦可通过 `:focus-within` 展开下拉；浅色与深色主题均有对应背景、边框和悬停状态。
- 桌面端 1280 x 720、移动端 390 x 844 均无横向溢出；移动端继续使用原有汉堡侧滑菜单，控制台无 JavaScript 错误。

---

## 2026-07-15 媒体首屏加载与视频压缩

Checked scope: 产品案例、AI 案例入口与详情页，`script.js`，三个最大视频资产。

Passed checks:

- 除首屏关键图外，正式页面图片已补充 `loading="lazy"` 与异步解码；首屏关键图保留高优先级加载。
- 自动播放视频改为视口观察控制：临近视口时加载并播放，离开视口后暂停；深层视频初始使用 `preload="none"`。
- `promo-lottery-scroll.mp4`、Prompt Make 演示和交易概览动效合计由 39.65 MB 压缩至 2.43 MB，减少 93.9%；页面改用 H.264 MP4，原 MOV 保留为源素材但不再被页面引用。
- 桌面端 1280 宽与移动端 390 x 844 浏览器检查通过，无横向溢出、已加载图片损坏或控制台媒体错误。
- Prompt Make、掌中宝交易和掌中宝促销的压缩视频均能正常解码；深层视频未进入视口时保持未加载。
- `node --check script.js` 与全站本地媒体引用检查通过。

Notes:

- 已发布至 Netlify 生产站点 `https://chen-ruofei-portfolio.netlify.app`，部署 ID：`6a5745f490996f28b0417b36`；尚未推送 GitHub。
