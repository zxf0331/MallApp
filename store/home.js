import { defineStore } from 'pinia'
import { getHomeMultiData, getHomeData } from '@/service/home.js'

export const useHomeStore = defineStore('home', {
	state: () => {
		return {
			banners: [],
			recommends: []
		}
	},
	actions: {
		// 获取首页轮播图和推荐栏的数据(异步的action)
		async fetchHomeMultiData() {
			const res = await getHomeMultiData()
			this.banners = res.data.banner.list || []
			this.recommends = res.data.recommend.list || []
		},
		
		// 获取列表的数据
		async fetchHomeData(type, page) {
			const res = await getHomeData(type, page)
			// console.log(res);
			
		}
	}
})