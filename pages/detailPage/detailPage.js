// pages/detailPage/detailPage.js
Page({

  data: {
    bookIndex:0,
    bookData:{},
    isMore:false,
    favor:false,
    moreState:'init',
    imgOK:true
  },

  onLoad(porps){
    this.setData({
      bookIndex: porps.index
    });
    var that = this;
    wx.showLoading({
      title: '加载中...',
    });
    getApp().request.detail(porps.index,function(data){
      that.setData({
        bookData: data
      });
      wx.hideLoading();
    });
    if(getApp().favSCC.has(this.data.bookIndex)){
      this.setData({
        favor: true
      })
    }
  },
  onPullDownRefresh(){
    var that = this;
    wx.showLoading({
      title: '加载中...',
    });
    getApp().request.detail(this.data.bookIndex, function (data) {
      that.setData({
        bookData: data
      });
      wx.hideLoading();
      wx.showToast({
        title: '刷新成功',
      });
    });
  },
  toMore(){
    this.setData({
      isMore: !this.data.isMore,
      moreState: !this.data.isMore?'in':'out'
    })
  },
  tapFavor(){
    this.setData({
      favor: !this.data.favor
    })

    if(this.data.favor){
      getApp().favSCC.add(this.data.bookIndex);
      return;
    }
    getApp().favSCC.remove(this.data.bookIndex);
  },
  imgerr(){
    this.setData({
      imgOK:false
    })
  }
})