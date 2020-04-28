import bus from '../../utils/eventbus';
Component({
  data: {
    tags: ["被骂哭的导盲犬主", "全国65亿网民月", "鲍毓明养女发声", "大学没有谈过恋爱", "多名学生曝被班主", "林奕含去世三周年", "李国庆发人事调整", "肖战发声", "和对象一起长胖是", "奔跑吧", "最春天的照片", "张杰爱人啊", "拔牙后千万不要嗜睡", "中国第四个新冠疫", "蒋凡被除名合伙人"]
  },
  methods: {
    clickTag({target: {dataset: {tag}}}) {
      bus.emit('sendTag', `#${tag}#`);
    }
  }
})
