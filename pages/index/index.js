const RATIO = 1536 / 1024; // 图片高宽比
Page({
  data: { w: 0, h: 0, x: 0, y: 0, pressed: false },
  onLoad() {
    const { windowWidth: W, windowHeight: H } = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
    let w = W, h = W * RATIO;
    if (h < H) { h = H; w = H / RATIO; }
    this.setData({ w, h, x: (W - w) / 2, y: (H - h) / 2 });
  },
  onDown() { this.setData({ pressed: true }); },
  onUp() { this.setData({ pressed: false }); },
  onStart() {
    wx.vibrateShort && wx.vibrateShort({ type: 'light' });
    wx.navigateTo({ url: '/packageScene/pages/scene/scene' });
  },
  onShareAppMessage() { return { title: '全民扣篮·训练计划', path: '/pages/index/index' }; }
});
