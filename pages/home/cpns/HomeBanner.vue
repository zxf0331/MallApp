<template>
	<swiper class="banner" :indicator-dots="true" indicator-active-color="#ff8198" :autoplay="true" :interval="3000" :duration="1000">
		<template v-for='item in banners' :key='item'>
			<swiper-item @click="handleItemClick(item)">
				<image class="swiper-item" :src='item.image' mode='widthFix'></image>
			</swiper-item>
		</template>
	</swiper>
</template>

<script setup>
	const props = defineProps({
		banners: {
			type: Array,
			default: () => []
		}
	})
	
	const emits = defineEmits(['bannerItemClick'])
	
	function handleItemClick(item) {
		emits('bannerItemClick', item.link)
	}
</script>

<style lang='scss'>
	.banner {
		.swiper-item {
			width: 100%;
		}
	}
</style>