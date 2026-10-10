# 全民扣篮·训练计划 小程序

## 在微信开发者工具里打开
1. 安装最新版[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)。
2. 选择「导入项目」，目录选本文件夹 `miniprogram/`。
3. AppID 先用「测试号」（`project.config.json` 里是 `touristappid`），有正式 AppID 时替换。
4. 基础库建议 ≥ 2.9（WebGL canvas 新接口），工程里设为 3.4.0。
5. 编译后首页是 `pages/index/index`，点进第二页 `packageScene/pages/scene/scene`；也可以在「编译模式」里直接设启动页为 `packageScene/pages/scene/scene`。
6. 3D 效果以**真机预览**为准，模拟器的 WebGL 表现可能不同。

## 目录
- `app.js` 启动时用 `wx.getMenuButtonBoundingClientRect()` 计算胶囊按钮安全区，存到 `globalData.nav`
- `components/nav-bar/` 自定义导航栏，顶部按胶囊位置留出安全区（全局 `navigationStyle: custom`）
- `pages/index/` 首页（辅助bot002 负责）
- `packageScene/pages/scene/` 选择训练场景（图片型）：整张场景图按 2:3 完整显示，五个场馆是百分比定位的透明热区，点中后橙色发光描边并弹原生 `wx.showModal` 确认框；热区坐标和文案在 scene.js 的 VENUES 里
- `packageScene/assets/venues.jpg` 选场景背景图（约 0.35MB）

## 已知限制
- 热区是照图估的百分比，需在开发者工具里逐个点一下校准。
- 我这边没有微信开发者工具，代码只做过语法检查，未经真机验证。
