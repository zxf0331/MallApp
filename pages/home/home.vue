<template>
	<view class="container">
		<!-- 轮播图组件 -->
		<home-banner :banners='banners' @bannerItemClick='handleBannerItemClick'></home-banner>
		<!-- 推荐组件 -->
		<home-recommend :recommends=recommends></home-recommend>
		<!-- 本周热门 -->
		<home-popular></home-popular>
		<!-- tabbar组件 -->
		<tab-control 
			:titles="['流行','新款','精选']"
			@tabItemClick='handleTabItemClick'
		>
		</tab-control>
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { useHomeStore } from '@/store/home.js'
	import { storeToRefs } from 'pinia'
	import { ref } from 'vue'
	import HomeBanner from './cpns/HomeBanner.vue'
	import HomeRecommend from './cpns/HomeRecommend.vue'
	import HomePopular from './cpns/home-popular.vue'
	
	const homeStore = useHomeStore()
	const { banners, recommends } = storeToRefs(homeStore)
	
	onLoad(() => {
		homeStore.fetchHomeMultiData()
		homeStore.fetchHomeData('pop', 1)
	})
	
	// 轮播图点击事件
	function handleBannerItemClick(link) {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + link
		})
	}
	
	// tab-control点击事件
	function handleTabItemClick(index) {
		// console.log(index)
	}
</script>

<style lang="scss">

</style>
