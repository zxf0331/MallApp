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
		/>
		<!-- 宫格组件 -->
		<uni-grid :column="2" :show-border="false" :square="false" :highlight="true ">
			<template v-for="(itemInfo) in goodsList[currentType].list" :key="itemInfo.iid">
				<uni-grid-item>
					<list-view :itemInfo='itemInfo' @itemClick='handleItemClick'></list-view>
				</uni-grid-item>
			</template>
		</uni-grid>
	</view>
</template>

<script setup>
	import { onLoad, onReachBottom } from '@dcloudio/uni-app'
	import { useHomeStore, types } from '@/store/home.js'
	import { storeToRefs } from 'pinia'
	import { ref } from 'vue'
	import HomeBanner from './cpns/HomeBanner.vue'
	import HomeRecommend from './cpns/HomeRecommend.vue'
	import HomePopular from './cpns/home-popular.vue'
	
	const homeStore = useHomeStore()
	const { banners, recommends, goodsList, currentType } = storeToRefs(homeStore)
	
	onLoad(() => {
		homeStore.fetchHomeMultiData()
		homeStore.fetchHomeData('pop', 1)
		homeStore.fetchHomeData('new', 1)
		homeStore.fetchHomeData('sell', 1)
	})
	
	// 监听页面滚动到底部
	onReachBottom(() => {
		// console.log('onReachBottom'); // 加载对应分类的下一页数据
		homeStore.fetchHomeData(currentType.value, goodsList.value[currentType.value].page + 1)
		
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
		homeStore.setCurrentType(types[index])
	}
	
	// 点击商品跳转到详情页
	function handleItemClick(itemInfo) {
		uni.navigateTo({
			url: '/pages/detail/detail?iid=' + itemInfo.iid
		})
	}
</script>

<style lang="scss">

</style>
