<template>
	<view>
		<swiper :indicator-dots="true" :duration="500" indicator-active-color="rgb(109,97,242)">
			<swiper-item>
				<!-- <text>跳过</text> -->
				<image src="../../static/guide/guide1.png" mode=""></image>
				<!-- <button @click="next">下一页</button> -->
			</swiper-item>
			<swiper-item>
				<!-- <text>跳过</text> -->
				<image src="../../static/guide/guide2.png" mode=""></image>
				<!-- <button @click="next">下一页</button> -->
			</swiper-item>
			<swiper-item>
				<image src="../../static/guide/guide3.png" mode=""></image>
				<button @click="gotoIndex">进入主页</button>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			next(){
				console.log('下一页')
			},
			async gotoIndex() {
				uni.setStorageSync('first','true')
				uni.switchTab({
					url: "/pages/index/index"
				})
			}
		}
	}
</script>

<style lang="less">
	swiper {
		width: 100vw;
		height: 100vh;
		background-color: rgb(149, 150, 150);

		swiper-item {
			background-color: white;
			overflow: hidden;
			position: relative;

			text {
				display: block;
				margin: 150rpx 0 0 600rpx;
				font-size: 32rpx;
				color: rgb(110, 128, 176);
			}

			image {
				position: absolute;
				top: 30vw;
				left: 0;
				width: 100vw;
				height: 120vw;
			}

			button {
				position: absolute;
				bottom: 10%;
				width: 700rpx;
				background-color: rgb(109,97,242);
				border-radius: 30rpx;
				color: white;
				border: none;
				left: 50%;
				transform: translateX(-50%);
			}
		}

	}
</style>
