<script setup lang="ts">
import { OrderState } from '@/services/constants'
import { orderStateList } from '@/services/constants'
import { putMemberOrderReceiptByIdAPI } from '@/services/order'
import { deleteMemberOrderAPI } from '@/services/order'
import { getMemberOrderAPI } from '@/services/order'
import { getPayMockAPI, getPayWxPayMiniPayAPI } from '@/services/pay'
import type { OrderItem } from '@/types/order'
import type { OrderListParams } from '@/types/order'
import { onMounted, ref } from 'vue'

//模拟数据
const memberStore = ref([
  {
    id: 1,
    type: 0, // 日租:0,月租:1,购买:2
    count: 10,
    payment: 1000,
    nunmber: 5555555,
    name: '随便',
    images:
        'https://img0.baidu.com/it/u=2341097482,2639203366&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067',
    selected: false, //是否选中
  },
  {
    id: 2,
    type: 2, // 日租:0,月租:1,购买:2
    count: 10,
    payment: 1,
    nunmber: 5555555,
    name: '随便',
    images:
        'https://img0.baidu.com/it/u=2341097482,2639203366&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067',
    selected: false, //是否选中
  },
])
</script>

<template>
  <!-- 购物车列表 -->
  <scroll-view enable-back-to-top scroll-y class="scroll-view">
    <view
        class="list"
        v-for="item in memberStore"
        :key="item.id"
    >
      <view class="list-item">
        <view class="list-img">
          <image :src="item.images" mode="aspectFill"></image>
        </view>
        <view class="list-info">
          <view class="list-top">
            <text>{{ item.name }}</text>
            <text v-if="item.type === 2">待付款</text>
            <text v-else>租赁中</text>
          </view>
          <view class="list-mid">单号{{item.id}}</view>
          <view class="list-price">付款{{item.payment}}</view>
        </view>
      </view>
    </view>

  </scroll-view>

</template>

<style lang="scss">

</style>
