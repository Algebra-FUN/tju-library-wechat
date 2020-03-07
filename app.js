App({
  onLaunch(){
    this.favSCC.init();
  },
  // fav storage central controller
  favSCC:{
    init(){
      wx.setStorageSync('myFav', []);
    },
    add(index){
      var favData = this.getFav();
      if(favData.has(index)){
        return;
      }
      favData.add(index);
      this.setFav(favData);
    },
    remove(index){
      var favData = this.getFav();
      if (favData.has(index)){
        favData.delete(index);
       this.setFav(favData);
      }
    },
    getFav(){
      return new Set(wx.getStorageSync('myFav'));
    },
    getFavArr() {
      return wx.getStorageSync('myFav');
    },
    setFav(favData){
      wx.setStorageSync('myFav', [...favData]);
    },
    has(index){
      return this.getFav().has(index);
    },
  },

  request:{
    detail(index,onDataLoad){
      var URL = 'http://open.twtstudio.com/api/v1/library/book/';
      URL += index;

      //URL = 'https://api.myjson.com/bins/1g50k0?tdsourcetag=s_pctim_aiomsg';//for test used

      wx.request({
        url: URL,
        success(back) {
          var data = back.data.data;

          //data pretreat
          for (let book of data.holding) {
            book.local = book.local.substr(0, 5);
          }
          wx.hideLoading();
          onDataLoad(data);
          return;
        },
      })
    }
  }
})
