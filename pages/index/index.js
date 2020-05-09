Component({

  data: {
    iconMenu: [
      {
        id: 'prize',
        text: '奖品',
        icon: 'icon-libao',
        color: '#e94466',
      },
      {
        id: 'gift',
        text: '礼包',
        icon: 'icon-gouwu',
        color: '#df0614'
      },
      {
        id: 'comment',
        text: '评论',
        icon: 'icon-pinglun',
        color: '#3165aa'
      },
      {
        id: 'msg',
        text: '消息',
        icon: 'icon-xiaoxi',
        color: '#f7d615'
      },
    ],
    listMenu: [
      {
        id: 'wish',
        text: '心愿单',
        icon: 'icon-shoucang1',
        color: '#e94466',
      },
      {
        id: 'bought',
        text: '已购项目',
        icon: 'icon-gouwuche',
        color: '#e94466',
      },
      {
        id: 'setup',
        text: '设置',
        icon: 'icon-shezhi1',
        color: '#e94466',
      },
      {
        id: 'about',
        text: '关于',
        icon: 'icon-iconset0142',
        color: '#e94466',
      },
    ]
  },
  methods: {
    jump({currentTarget: {dataset: {id}}}) {
      console.log(id)
    }
  }
})