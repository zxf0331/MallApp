<template>
	<view class="recommend">
		<template v-for='(item) in recommends' :key='item'>
			<view class="recommend-item" @click="recommendItemClick(item)">
				<image class="image" :src="item.image" mode="widthFix"></image>
				<view class="title">{{item.title}}</view>
			</view>
		</template>
	</view>
</template>

<script setup>
	defineProps({
		recommends: {
			type: Array,
			default: () => []
		}
	})
	
	const emits = defineEmits(['recommendItemClick'])
	
	function recommendItemClick(item) {
		emits('recommendItemClick', item)
	}
</script>

<style  lang='scss'>
	.recommend {
		@include normalFlex();
		padding: 20rpx;
		
		.recommend-item {
			@include normalFlex(column);
			align-items: center;
			font-size: $gFontSize;
			.image {
				width: 150rpx;
				height: 150rpx;
			}
			.title {
				margin-top: 10rpx;
			}
			
		}
	}
</style>