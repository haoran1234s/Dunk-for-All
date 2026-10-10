Component({
  properties: { title: { type: String, value: '' }, back: { type: Boolean, value: true }, transparent: { type: Boolean, value: false } },
  data: { nav: {} },
  lifetimes: { attached() { this.setData({ nav: getApp().globalData.nav }); } },
  methods: { onBack() { wx.navigateBack({ fail: () => wx.reLaunch({ url: '/pages/index/index' }) }); } }
});
