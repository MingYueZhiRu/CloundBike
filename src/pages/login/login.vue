<script setup lang="ts">
import { postLoginWxMinAPI } from '@/services/login'
import { useMemberStore } from '@/stores'
import type { LoginResult } from '@/types/member'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const memberStore = useMemberStore()
let code = '' // 存储微信登录凭证

// 获取 code
onLoad(async () => {
  try {
    const res = await wx.login()
    code = res.code
    console.log('获取登录凭证 code:', code)
  } catch (error) {
    uni.showToast({ icon: 'none', title: '获取登录凭证失败' })
  }
})

// 处理微信登录（弹出授权窗口）
const handleWxLogin = async () => {
  if (!code) {
    uni.showToast({ icon: 'none', title: '登录凭证失效，请重新进入' })
    return
  }

  // 获取用户头像和昵称
  try {
    const profileRes = await wx.getUserProfile({
      desc: '我需要头像和昵称来完善你的资料', // 必填，弹窗展示用途说明
    })
    console.log('用户信息6666:', profileRes.userInfo)

    // 登录请求，携带 code 和用户信息
    const result = await postLoginWxMinAPI({
      code,
      ...profileRes.userInfo, // 可传用户信息到后台
    })
    console.log('后端返回结果:', result)

    if (result && result.code === 1) {
      const userData = result.data
      memberStore.setProfile(userData) // 保存用户信息
      uni.showToast({ icon: 'success', title: '登录成功' })
      setTimeout(() => {
        uni.navigateBack()
      }, 500)
    } else {
      uni.showToast({ icon: 'none', title: result.msg || '登录失败' })
    }
  } catch (error) {
    console.error('授权或登录失败:', error)
    uni.showToast({ icon: 'none', title: '授权失败，请重试' })
  }
}
</script>

<template>
  <view class="viewport">
    <view class="logo">
      <image src="/public/logo.png"></image>
    </view>
    <view class="login">
      <!-- 微信登录按钮 -->
      <button class="button phone" @click="handleWxLogin">
        <text class="icon icon-phone"></text>
        微信登录
      </button>
      <view class="tips"> 登录/注册即视为你同意《服务条款》和《深大云百客隐私协议》 </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.page {
  height: 100%;
  background-color: rgb(253, 242, 247);
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20rpx 40rpx;
}

.logo {
  flex: 1;
  text-align: center;
  image {
    width: 420rpx;
    height: 220rpx;
    margin-top: 15vh;
  }
}

.login {
  display: flex;
  flex-direction: column;
  height: 60vh;
  padding: 40rpx 20rpx 20rpx;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    color: #fff;
    background-color: rgb(81, 168, 68);
  }
}

.tips {
  position: absolute;
  bottom: 80rpx;
  left: 20rpx;
  right: 20rpx;
  font-size: 22rpx;
  color: #999;
  text-align: center;
}
</style>
