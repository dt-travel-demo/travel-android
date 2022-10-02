//这是封装的一个发送请求的方法
const DOMAINS = 'https://api.oick.cn'
export default function(url, {
	method = 'GET',
	data = {}
} = {}) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: DOMAINS + url,
			method,
			data,
			success(res) {
				resolve(res.data)
			},
			fail(err) {
				reject(err)
			}
		})

	})
}
