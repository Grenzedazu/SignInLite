var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

// pages/qiandao/qiandao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */

  spring_to_user_info:function(){
    wx.redirectTo({
      url: '../user_info/user_info',
    })
  },
  onLoad: function (options) {
    //拉数据
    var globalData = getApp().globalData;
    this.setData({
      user_Info: globalData.userInfo,
      tags: globalData.tags
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 签到发出请求
   */
  sign: function () {
    var that = this
    qcloud.request({
      url: config.service.requestUrl,
      login: true,
      success(result) {
        wx.request({
          url: config.service.POSTUrl,
          data: {
            USERINFO: that.data.user_info,
            ARRAY: [12425, 23346, 1526]
          },
          header: {},
          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: function (res) {
            console.log(res)
          },
          fail: function (res) { },
          complete: function (res) { },
        })
      }
    })
  }
})