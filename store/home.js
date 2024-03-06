import { defineStore } from 'pinia'
import { getHomeMultiData, getHomeData } from '@/service/home.js'

export const types = ['pop','new', 'sell']

function getDefaultGoodsListData() {
	let goodsListOrigin = {}
	types.forEach((type) => {
		goodsListOrigin[type] = { page: 0, list: []}
	})
	return goodsListOrigin
}

export const useHomeStore = defineStore('home', {
	state: () => {
		return {
			banners: [],
			recommends: [],
			goodsList: getDefaultGoodsListData(),
			currentType: 'pop'
		}
	},
	actions: {
		setCurrentType(type) {
			this.currentType = type
		},
		// 获取首页轮播图和推荐栏的数据(异步的action)
		async fetchHomeMultiData() {
			const res = await getHomeMultiData()
			this.banners = res.data.banner.list || []
			this.recommends = res.data.recommend.list || []
		},
		
		// 获取列表的数据
		async fetchHomeData(type, page) {
			const res = await getHomeData(type, page)
			this.goodsList[type].list.push(...res.data.list)
			this.goodsList[type].page = page
		}
	}
})