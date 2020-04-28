class Bus {
  constructor() {
    this.events = {}
  }
  on(Event, cb) {
    if(this.events[Event]) {
      this.events[Event].push(cb);
    } else {
      this.events[Event] = [cb];
    }
    if(!cb.name) {
      console.warn('on 接口的 handler 参数推荐使用具名函数。具名函数可以使用 off 接口取消订阅，匿名函数无法取消订阅。')
    }
  }
  emit(Event, obj) {
    if(!this.events[Event]) return
    this.events[Event].forEach(cb => {
      cb(obj)
    })
  }
  off(Event,cb) {
    if(!this.events[Event]) return
    const index = this.events[Event].findIndex(item => item === cb);
    if (index === -1) {
      console.error(new Error('该 handle 没有订阅者，取消订阅失败'));
      return;
    }
    this.events[Event].splice(index, 1);
  }
  static getInstance() {
    if (!Bus.instance) {
      Bus.instance = new Bus()
    }
    return Bus.instance;
  }
}
export default Bus.getInstance();