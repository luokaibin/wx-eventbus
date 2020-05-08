Component({

  data: {
    iconMenu: [
      {
        text: '奖品',
        icon: 'icon-libao',
        color: '#e94466',
      },
      {
        text: '礼包',
        icon: 'icon-gouwu',
        color: '#df0614'
      },
      {
        text: '评论',
        icon: 'icon-pinglun',
        color: '#3165aa'
      },
      {
        text: '消息',
        icon: 'icon-xiaoxi',
        color: '#f7d615'
      },
    ],
    listMenu: [
      {
        text: '心愿单',
        icon: 'icon-shoucang1',
        color: '#e94466',
      },
      {
        text: '已购项目',
        icon: 'icon-gouwuche',
        color: '#e94466',
      },
      {
        text: '设置',
        icon: 'icon-shezhi1',
        color: '#e94466',
      },
      {
        text: '关于',
        icon: 'icon-iconset0142',
        color: '#e94466',
      },
    ]
  },
  methods: {
    jump() {
      wx.navigateTo({
        url: '/pages/detail/index',
      })
    }
  }
})