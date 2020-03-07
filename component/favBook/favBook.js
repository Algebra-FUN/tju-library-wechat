// component/favBook/favBook.js
Component({
  properties: {
    index: {
      type: String,
      value: "0",
      observer(){
        this.load();
      }
    },
    onDelete: {
      type: Boolean,
      value: false
    }
  },
  data: {
    bookData: {},
    onLoading:false
  },
  methods: {
    removeBook() {
      if (this.properties.onDelete) {
        getApp().favSCC.remove(this.properties.index);
        this.triggerEvent('removeFav');
      }
    },
    triggerDelete() {
      if (this.properties.onDelete) {
        return;
      }
      this.triggerEvent('onDelE');
    },
    goDetail(){
      if(this.properties.onDelete){
        return;
      }
      var URL = '../detailPage/detailPage?index=';
      URL += this.properties.index;
      wx.navigateTo({
        url: URL,
      })
    },
    load(){
      var that = this;
      //init book data
      that.setData({
        onLoading:true
      })
      getApp().request.detail(this.properties.index, function (data) {
        that.setData({
          bookData: data,
          onLoading:false
        });
      });
    }
  },
  lifetimes: {
    attached() {
      this.load();
    }
  },
})