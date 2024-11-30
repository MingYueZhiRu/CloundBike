<script setup lang="ts">
import { ref } from 'vue'
import OrderList from './components/OrderList.vue'

// 获取页面参数
const query = defineProps<{
  type: string
}>()

// tabs 数据
const orderTabs = ref([
  { orderState: 0, title: '全部', isRender: false },
  { orderState: 1, title: '待付款', isRender: false },
  { orderState: 2, title: '待提车', isRender: false },
  { orderState: 3, title: '租赁中', isRender: false },
  { orderState: 4, title: '已完成', isRender: false },
])

// 高亮下标
const activeIndex = ref(orderTabs.value.findIndex((v) => v.orderState === Number(query.type)))
// 默认渲染容器
orderTabs.value[activeIndex.value].isRender = true
</script>

<template>
  <view class="viewport">
    <view class="search">

    </view>
    <!-- tabs -->
    <view class="tabs">
      <text
        class="item"
        v-for="(item, index) in orderTabs"
        :key="item.title"
        @tap="
          () => {
            activeIndex = index
            item.isRender = true
          }
        "
      >
        {{ item.title }}
      </text>
      <!-- 游标 -->
      <view class="cursor" :style="{ left: activeIndex * 20 + '%' }"></view>
    </view>
    <!-- 滑动容器 -->
    <swiper class="swiper" :current="activeIndex" @change="activeIndex = $event.detail.current">
      <!-- 滑动项 -->
      <swiper-item v-for="item in orderTabs" :key="item.title">
        <!-- 订单列表 -->
        <OrderList v-if="item.isRender" :order-state="item.orderState" />
      </swiper-item>
    </swiper>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

.viewport::before{
  content:"";
  position: absolute;
  top:0;
  left:0;
  right:0;
  height:34%;
  background: linear-gradient(to bottom, rgba(189, 17, 78,0.8), rgba(255, 255, 255, 0));
  z-index:1;
  pointer-events: none;
}


// tabs
.tabs {
  display: flex;
  justify-content: space-around;
  line-height: 60rpx;
  margin: 0 10rpx;
  position: relative;
  z-index: 9;

  .item {
    flex: 1;
    text-align: center;
    padding: 10rpx;
    font-size: 25rpx;
    font-weight: bold;
    color: #999;
    border-bottom: 2px solid #fff;
    transition: all 0.4s;
  }
    color: #262626;
  }

  .cursor {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20%;
    height: 6rpx;
    padding: 0 50rpx;
    background-color: #cd4d79;
    /* 过渡效果 */
    transition: all 0.4s;
  }
}

// swiper
.swiper {
  background-color: #f7f7f8;
}
</style>
