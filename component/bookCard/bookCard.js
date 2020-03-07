// component/bookCard/bookCard.js
Component({
  properties: {
    bookData:{
      type: Object,
      value: {
        index:'',
        title: '',
        author: '',
        publisher: '',
        year: '',
        isbn: '',
      }
    }
  },
  data: {
    aniClass:'',
    imgOK:true
  },
  methods: {
    requestDetail(){
      var URL = '../detailPage/detailPage?index=';
      URL += this.properties.bookData.index;
      wx.navigateTo({
        url: URL,
      })
    },

    onTapStart(){
      this.setData({
        aniClass: ''
      })
    },

    onTapEnd(){
      this.setData({
        aniClass: 'card-ani'
      })
    },

    imgerr(){
      this.setData({
        imgOK:false
      })
    }
  }
})
