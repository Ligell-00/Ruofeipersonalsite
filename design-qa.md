# Design QA

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
