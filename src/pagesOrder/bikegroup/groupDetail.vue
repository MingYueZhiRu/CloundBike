<script setup lang="ts">
import {onLoad} from "@dcloudio/uni-app";

//传入的参数
onLoad((options)=>{
  var id = options.id;
})

//api接口请求数据部分


//模拟数据部分
const data = {
  id: 1, // 活动编号
  username: 'Kobe',
  phone: '11451419191',
  name: '洛杉矶之旅',
  departureTime: '2022/11/29 8:30am',
  meetingPoint: '洛杉矶',
  maxPeople: '10',
  UserImage: '/static/img/join.png',
  groupImage: '/static/test/test.jpg',
  description: '扫码进群谢谢,扫码进群谢谢,扫码进群谢谢',
  status: '1', //审核状态
}
</script>

<template>



</template>

<style scoped lang="scss"></style>
