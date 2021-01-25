// pages/article/article.js

const {postList} =require( "../../data/data.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // postData:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    // console.log(options)
    const postData = postList[options.pid]
    this.setData({
      postData,
      paragraphs: postData.article.split('\n')
    })

    wx.setNavigationBarTitle({
      title: postData.title,
    })
  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})