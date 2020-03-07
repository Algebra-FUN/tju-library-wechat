// pages/favorBook/favorBook.js
Page({
  data: {
    favList:[],
    userDel:false,
  },
  onShow(){
    this.loadData();
  },
  loadData(){
    this.setData({
      favList: getApp().favSCC.getFavArr()
    })
  },
  onRemoveFav(){
    this.loadData();
  },
  onDelE(){
    this.setData({
      userDel:true
    });
  },
  cancelDel(){
    this.setData({
      userDel: false
    });
  }
})