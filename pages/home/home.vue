<template>
	<view class="container">
		<!-- 轮播图组件 -->
		<home-banner :banners='banners' @bannerItemClick='handleBannerItemClick'></home-banner>
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { useHomeStore } from '@/store/home.js'
	import { storeToRefs } from 'pinia'
	import { ref } from 'vue'
	import HomeBanner from './cpns/HomeBanner.vue'
	
	const homeStore = useHomeStore()
	const { banners, recommends } = storeToRefs(homeStore)
	
	onLoad(() => {
		homeStore.fetchHomeMultiData()
	})
	
	function handleBannerItemClick(link) {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + link
		})
		// console.log(link);
	}
</script>

<style>

</style>
