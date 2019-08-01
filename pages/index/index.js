//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 1.轮播图数组
    swiperList:[],
    // 2.分类导航数组
    navCateList:[],
    // 3.楼层数组
    floorList:[]
  },
  onLoad(){
    this.getSwiperList();
    this.getNavCateList();
    this.getFloorList();
  },

  // 获取轮播图数据
  getSwiperList(){
    // 1.发送请求 获取数据
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      // data: {},
      // header: {'content-type':'application/json'},
      // method: 'GET',
      // dataType: 'json',
      // responseType: 'text',
      success: (result) => {
        // console.log(result);
        this.setData({
          swiperList:result.data.message
        })
      },
      // fail: () => {},
      // complete: () => {}
    });
      
  },

  // 导航分类
  getNavCateList(){
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
      success: (result) => {
        console.log(result);
        this.setData({
          navCateList:result.data.message
        })
      },
      fail: () => {},
      complete: () => {}
    });
      
  },

  // 获取楼层数据
  getFloorList(){
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
      success: (result) => {
        this.setData({
          floorList:result.data.message
        })
      },
      
    });
      
  }
 
})
