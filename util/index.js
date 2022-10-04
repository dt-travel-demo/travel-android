//这是封装的一个发送请求的方法
const DOMAINS = 'https://api.oick.cn'
export function $request(url, {
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

/* 获取图片高度
width:  被设置的高度
url : 图片路径 */
export function $getImgH(width,url){
	return new Promise((resolve,reject)=>{
		uni.getImageInfo({
			src:url,
			success(img) {
				let obj={
					url:img.path,
					height:width/img.width*img.height+'rpx'
				}
				resolve(obj)
			}
		})
	})
}
