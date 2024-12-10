<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 表单数据
const form = ref({
  title: '', //活动标题
  position: '', //集合地点
  time: '', //开始时间
  number: '', //活动人数
  description: '', //活动描述

})

//定义校验规则
const rules = {
  title: {
    rules: [
      {
        required: true,
        errorMessage: '请输入活动标题',
      },
    ],
  },
  position: {
    rules: [
      {
        required: true,
        errorMessage: '请输入集合地点',
      },
    ],
  },
  time: {
    rules: [
      {
        required: true,
        errorMessage: '请输入开始时间',
      },
    ],
  },
  number: {
    rules: [
      {
        required: true,
        errorMessage: '请输入活动人数',
      },
    ],
  },
}
// 表单组件实例
const formRef = ref<UniHelper.UniFormsInstance>()

// 提交表单
const commit = async () => {
  //表单校验
  try {
    await formRef.value?.validate()
    console.log('提交成功', form.value)

    setTimeout(() => {
      uni.navigateBack()
    }, 400)
  } catch (err) {
    uni.showToast({ icon: 'error', title: '请填写完整信息' })
  }
}

//api 接口
</script>

<template>
  <!-- 表单内容 -->
  <view class="content">
    <uni-forms :rules="rules" :model="form" ref="formRef">
      <uni-forms-item name="title" class="form-item">
        <textarea class="input" placeholder="添加活动标题" v-model="form.title" />
      </uni-forms-item>
      <uni-forms-item name="position" class="form-item">
        <textarea class="input" placeholder="添加集合地点" v-model="form.position" />
      </uni-forms-item>
      <uni-forms-item name="time" class="form-item">
        <textarea class="input" placeholder="活动开始时间" v-model="form.time" />
      </uni-forms-item>
      <uni-forms-item name="number" class="form-item">
        <textarea class="input" placeholder="活动限制人数" v-model="form.number" />
      </uni-forms-item>
      <uni-forms-item name="description" class="form-item">
        <textarea class="input description" placeholder="描述一下活动" v-model="form.description" />
      </uni-forms-item>
    </uni-forms>
  </view>

  <view class="commit-images">

  </view>
  <!-- 提交按钮 -->
  <view class="commit">
    <text class="commit-label">活动将由管理员审核通过后发布,活动期间请遵守骑行规则</text>
    <button @tap="commit" class="button">申请发布</button>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.content {
  background: #fff;
  margin: 20rpx 20rpx;
  border-radius: 20rpx;
  .uni-forms-item {
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
    padding: 10rpx 10rpx;
    border-bottom: 2rpx solid #ddd;
  }
  .input {
    padding: 10rpx 10rpx;
    height: 60rpx;
  }
  .description {
    height: 200rpx;
  }
}
.commit {
  display: flex;
  flex-direction: row;
  background: #fff;
  height: 120rpx;
  margin: 600rpx 20rpx;
  border-radius: 20rpx;
  border: 2rpx solid #ababab;
  .commit-label {
    font-size: 25rpx;
    font-weight: bold;
    color: #7f7f7f;
    margin: 30rpx 0 0 20rpx;
  }
  .button {
    color: #fff;
    border-radius: 50rpx;
    background-color: #d53b70;
    font-size: 28rpx;
    height: 60rpx;
    width: 280rpx;
    font-weight: bold;
    text-align: center;
    line-height: 60rpx;
    margin: 30rpx 15rpx 0 50rpx;
  }
}
</style>
