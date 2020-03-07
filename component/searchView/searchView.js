// component/searchView.js
Component({
  properties: {

  },
  data: {
    text:'',
    aniClass:'',
  },

  methods: {
    getInput(e){
      this.setData({
        text:e.detail.value
      })
    },
    submitSearch() {
      var value = this.data.text;
      var submitData = {
        val: value
      }
      this.triggerEvent('searchRequest', submitData);
    },
    onTouchStart(){
      this.setData({
        aniClass:''
      });
    },
    onTouchEnd() {
      this.setData({
        aniClass: 'sv-button-ani'
      });
    }
    
  }
})
