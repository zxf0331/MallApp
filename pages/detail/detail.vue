<template>
	<view class="detail">
		{{ iid }}
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'

// onLoad((options) => {
// 	console.log("页面传递过来的URL参数：", options);
// })
// 获取页面传递过来的URL参数 
const props = defineProps({
	iid: {
		type: String,
		default: ''
	}
})
</script>

<style lang="scss">

</style>
