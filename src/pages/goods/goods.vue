<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
//接收跳转页面参数
onLoad((options) => {
  const id = options.id
  console.log('接收到的商品ID:', id)
  // 根据 ID 获取商品详情逻辑
})

const goBack = () => {
  uni.navigateBack()
}
//api

const statusMap = ['正常', '待提车', '租赁中', '已售', '待归还']

//模拟数据
const data = {
  id: '1',
  number: '123456',
  name: '山地车',
  type: '1',
  size: '24',
  age: '114',
  price: '8848',
  daily: '100',
  monthly: '200',
  description: '这是一辆很牛逼的车',
  status: 0,
  image: '/static/test/test.jpg',
}
</script>

<template>
  <view class="viewport">
    <!--顶部导航栏 -->
    <view class="header">
      <text class="header-title">
        <text class="icon-left" @tap="goBack"></text>
        <text class="title">商品详情</text>
      </text>

      <view class="bike-image" :style="{ backgroundImage: 'url(' + data.image + ')' }"></view>
    </view>
    <!-- 商品信息 -->
    <view class="information">
      <!-- 价格以及状态 -->
      <view class="information-top">
        <text class="price">{{ data.price }}轮胎币</text>
        <text class="status">状态 {{ statusMap[data.status] }}</text>
      </view>
      <!-- 名字、编号、车况、车龄 -->
      <view class="information-bottom">
        <text class="name" style="margin-bottom: 5rpx;">{{ data.name }}</text>
        <text class="number" style="margin-bottom: 5rpx;">单车编号: {{ data.number }}</text>
        <text class="description" style="margin-bottom: 5rpx;">车况介绍: {{ data.description }}</text>
        <text class="age" style="margin-bottom: 5rpx;">车龄: {{ data.age }}年</text>
      </view>
    </view>

    <view class="user">
      <text class="safe">
        <text class="safe-title">保障</text>
        <text class="safe-content">不支持七天无理由-急速退款</text>
      </text>

      <text class="address">
        <text class="address-title">地址</text>
        <text class="address-content">沧海校区东北门</text>
      </text>
    </view>

    <view class="bottom">
      <view class="bottom-title">
        <text class="attention">云百客交易须知</text>
        <navigator class="detail">付款前了解交易规则，保障您的权益 <text class="icon-right"></text></navigator>
      </view>

      <view class="price-information">
        <navigator class="tobuy" url="/pages/cart/cart">
          <image src="@/static/tabs/cart_default.png" class="tobuy-image"></image>
        </navigator>
        <text class="tag">租越久，越便宜</text>
        <view class="price-daily-box">
          <text class="price-daily">{{ data.daily }}币/天</text>
          <text class="price-tag">定期租赁</text>
        </view>
        <view class="price-sell-box">
          <text class="price-sell">{{ data.price }}币</text>
          <text class="sell-tag">全款购买</text>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f8;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    display: flex;
    flex-direction: column;
    height: 800rpx;
    background: linear-gradient(to bottom, rgba(189, 17, 78, 0.8), rgba(255, 255, 255, 0));
    background-size: cover;

    .header-title {
      font-size: 35rpx;
      font-weight: bold;
      color: #fff;
      margin: 87rpx 0 30rpx 25rpx;
      .title {
        margin-left: 250rpx;
      }
    }

    .bike-image {
      border-radius: 30rpx;
      background-size: cover;
      background-position: center;
      height: 80%;
      z-index: 999;
      width: 100%;
    }
  }

  .information {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 20rpx;
    margin: 5rpx 10rpx 20rpx;
    .information-top {
      font-weight: bold;
      display: flex;
      flex-direction: row;
      .price {
        color: #cf4444;
        font-size: 40rpx;
        margin-left: 20rpx;
      }
      .status {
        margin-left: 350rpx;
        color: #7f7f7f;
        font-size: 30rpx;
        padding-top: 10rpx;
      }
    }
    .information-bottom {
      margin-left: 20rpx;
      margin-bottom: 10rpx;
      display: flex;
      flex-direction: column;
      .name {
        font-weight: bold;
        font-size: 30rpx;
      }
    }
  }
  .user{
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 20rpx;
    margin: 5rpx 10rpx 20rpx;
    .safe{
      margin: 25rpx 20rpx 0;
      padding-bottom: 25rpx;
      border-bottom: 2rpx solid #e5e5e5;
      .safe-title{
        color: #7f7f7f;
        margin-right: 100rpx
      }
    }
    .address{
      margin: 0 20rpx 25rpx;
      padding-top: 25rpx;
      .address-title{
        color: #7f7f7f;
        margin-right: 100rpx
      }
    }
  }

  .bottom{
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 20rpx;
    margin: 5rpx 10rpx 20rpx;
    .bottom-title{
      display: flex;
      flex-direction: row;
      margin-left: 20rpx;
    }
    .detail{
      margin-left: 20rpx;
      color: #7f7f7f;
    }
    .price-information{
      display: flex;
      flex-direction: row;
      color: #cf4444;
      .tobuy-image{
        width: 50rpx;
        height: 50rpx;
      }
    }
  }
}
</style>
