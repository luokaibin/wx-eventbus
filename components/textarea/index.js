import bus from '../../utils/eventbus';
Component({
  data: {
    value: '',
    _handle: undefined,
  },
  lifetimes: {
    ready() {
      this.setData({
        _handle: this.handleTag.bind(this)
      })
      bus.on('sendTag', this.data._handle);
    },
    detached() {
      bus.off('sendTag', this.data._handle)
    }
  },
  methods: {
    handleInput({detail: {value}}) {
      this.setData({value});
    },
    handleTag(e) {
      const {value} = this.data;
      this.setData({
        value: `${value} ${e} `
      })
    }
  }
})
