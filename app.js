App({
  globalData: {},
  onLaunch() {
    // 计算胶囊按钮安全区，供自定义导航栏使用
    const sys = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
    const menu = wx.getMenuButtonBoundingClientRect();
    const statusBar = sys.statusBarHeight || 20;
    const gap = menu.top - statusBar;
    this.globalData.nav = {
      statusBarHeight: statusBar,
      navBarHeight: menu.height + gap * 2,          // 导航栏内容区高度
      totalHeight: statusBar + menu.height + gap * 2, // 顶部总安全高度
      menuRight: sys.windowWidth - menu.left,       // 胶囊左侧以右需避让的宽度
      menu
    };
  }
});
