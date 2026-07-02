# Design QA

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
