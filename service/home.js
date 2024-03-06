import hyRequest from './index.js'


export const getHomeMultiData = () => {
	return hyRequest.get('/home/multidata', {})
}