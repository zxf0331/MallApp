<template>
	<view class="goods-item" @click="handleItemClick">
		<!-- #ifdef H5 -->
		<img class="image" :src="itemInfo.show.img" />
		<!-- #endif -->
		<!-- #ifndef H5 -->
		<image class="image" :lazy-load="true" :src="itemInfo.show.img" mode="widthFix"></image>
		<!-- #endif -->
		<view class="desc">
			<view class="title">{{ itemInfo.title }}</view>
			<view class="info">
				<view class="price">￥{{ itemInfo.price}}</view>
				<image class="icon" src="@/static/images/common/favor.png"></image>
				<text class="fav">{{ itemInfo.cfav }}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	itemInfo: {
		type: Object,
		default: () => {}
	}
})

const emits = defineEmits(['itemClick'])

function handleItemClick() {
	emits('itemClick', props.itemInfo)
}

</script>

<style lang="scss">
	.goods-item{
		box-sizing: border-box;
		padding: 10rpx;
		color: #333;
		.image{
			width: 100%;
			border-radius: 10rpx;
		}
		
		.desc{
			margin-top: 6rpx;
			.title{
				// 一行显示
				@include textEllipsis;
				
				font-size: $gFontSize;
			}
			.info{
				font-size: 26rpx;
				text-align: center;
				
				.price{
					display: inline-block;
					color: $gPrimaryColor;
				}
				.icon{
					width: 30rpx;
					height: 30rpx;
					padding-left: 6rpx;
					padding-right: 10rpx;
					position: relative;
					top: 6rpx;
					
				}
				.fav{
					position: relative;
					top: 2rpx;
				}
			}
		}
	}
</style>