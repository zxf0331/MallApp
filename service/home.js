import hyRequest from './index.js'


export const getHomeMultiData = () => {
	return hyRequest.get('/home/multidata', {})
}

export const getHomeData = (type, page) => {
	return hyRequest.get('/home/data', {
		type,
		page
	})
}