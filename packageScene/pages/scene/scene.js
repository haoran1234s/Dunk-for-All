// 图片型选场景页。热区为占图片宽高的百分比（原图 1024x1536）。
const VENUES = [
  { id: 'venue_arena',  name: '篮球场', desc: '起跳扣篮、实战模拟、扣篮挑战',       x: 25, y: 15, w: 50, h: 18 },
  { id: 'venue_track',  name: '田径场', desc: '助跑速度、连续跳跃、弹跳训练',       x: 55, y: 33, w: 43, h: 19 },
  { id: 'venue_gym',    name: '健身房', desc: '下肢力量、核心稳定、爆发力训练',     x: 3,  y: 39, w: 47, h: 19 },
  { id: 'venue_rehab',  name: '康复馆', desc: '膝踝保护、筋膜放松、伤病预防',       x: 52, y: 55, w: 46, h: 20 },
  { id: 'venue_lounge', name: '休息室', desc: '恢复拉伸、冥想放松、睡眠与营养指导', x: 3,  y: 72, w: 59, h: 21 }
];

Page({
  data: { venues: VENUES, selected: '' },

  onTap(e) {
    const v = VENUES.find(i => i.id === e.currentTarget.dataset.id);
    if (!v) return;
    this.setData({ selected: v.id });
    wx.vibrateShort && wx.vibrateShort({ type: 'light' });
    wx.showModal({
      title: `选择${v.name}？`,
      content: v.desc,
      confirmText: '开始训练',
      cancelText: '再看看',
      success: res => {
        if (res.confirm) {
          wx.showToast({ title: '已选择', icon: 'success' });
          // TODO: wx.navigateTo({ url: `/pages/train/train?scene=${v.id}` })
        } else {
          this.setData({ selected: '' });
        }
      }
    });
  }
});
