// pages/main/main.js
Page({

  data: {
    searchBook:'',
    page:1,
    bookDataArr:[],
    bookAniClass:'',//uesd to contorl ani
  },

  //fetch request
  goSearch(){
    var mc = this;//turn 'this' to static form

    //book ani control
    mc.setData({
      bookAniClass: ''
    });

    wx.showLoading({
      title: '加载中'
    })

    //compute URL
    var URL;
    URL = 'http://open.twtstudio.com/api/v1/library/book/?title=';
    URL += mc.data.searchBook;
    URL += '&page=';
    URL += mc.data.page;

    //URL = 'https://api.myjson.com/bins/dfu8g';// testURL

    wx.request({
      url: URL,
      success(back){
        var res = back.data;
        var newBookArr = mc.data.bookDataArr.concat(res.data);

        //bookArr empty ?
        if (newBookArr[0] == null){
          wx.hideLoading();
          wx.showToast({
            icon:'none',
            title: '貌似这本书不存在......',
            duration:2500
          })
          return;
        }

        // has new ?
        if (res.data == null) {
          wx.hideLoading();
          wx.showToast({
            icon: 'none',
            title: '没有更多了...',
            duration: 2500
          })
          return;
        }

        mc.setData({
          //concat new bookArr to load more
          bookDataArr: newBookArr,
          bookAniClass: 'book-ani'//play ani
        })

        wx.hideLoading();
      }
    })
  },

  //handle a new search request
  toSearch(e){
    //reset bookData
    this.setData({
      //get search request's book
      searchBook: e.detail.val,
      bookDataArr:[],
      bookAniClass: '',
      page: 1,
    })

    this.goSearch();
  },
  onReachBottom(){
    //to load more
    var i = this.data.page + 1;
    this.setData({
      page: i,
    })
    this.goSearch();
  }
})