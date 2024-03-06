<template>
	<view class="tab-control">
		<template v-for='(title, index) in titles' :key='title'>
			<view :class="['tab-item', currentIndex === index ? 'active' : '']"
				  @click="handleItemClick(index)"
			>
				<text class="title">{{ title }}</text>
			</view>
		</template>
	</view>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ 
	titles: {
		type: Array,
		default: () => []
	}
})

const emits = defineEmits(['tabItemClick'])
const currentIndex = ref(0)

function handleItemClick(index) {
	currentIndex.value = index
	emits('tabItemClick', index)
}
</script>

<style lang="scss">
	.tab-control {
		@include normalFlex();
		padding: 10rpx;
		margin-top: 10rpx;
		text-align: center;
		
		.tab-item {
			flex: 1;
			
			.title {
				display: inline-block;
				padding: 16rpx;
				border-bottom: 6rpx solid #f5f5f5;
			}
			
			&.active {
				.title {
					color: $gPriceColor;
					border-bottom: 6rpx solid $gPriceColor;
				}
		}

		}
	}
</style>