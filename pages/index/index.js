//index.js
//获取应用实例
var app = getApp()
Page({
  data : {
    text : 'normal data',
    object : {
      subObject : {
        objectText : 'object data'
      }
    },
    array : [
      {arrayText : 'array data' }
    ]
  },
  changeText : function() {
    this.setData( {
      /* 普通索引 */
      text : 'new normal data'
    });
  },
  changeObjectText : function() {
    this.setData( {
      'object.subObject.objectText' : 'new object data'
    });
  },

  changeArrayText : function() {
    this.setData( {
      'array[0].arrayText' : 'new array data'
    });
  },

  addNewData : function() {
    this.setData( {
      'newField.newFieldText' : 'add new data'
    });
  }

  
  
  
  /* myevent: function () {
    console.log('点击了 view ')
  }
 
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }*/
})
