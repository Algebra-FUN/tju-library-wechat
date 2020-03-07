// component/header.js
Component({
  properties: {},

  data: {},

  methods: {
    requestML(){
      wx.showLoading({
        title: '加载中'
      })
      wx.navigateTo({
        url: '../favorBook/favorBook',
      })
    }
  }
})
