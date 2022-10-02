<template>
	<view>
		<swiper :indicator-dots="true" :duration="500" indicator-active-color="#fff">
			<swiper-item>
				<image src="../../static/guide/guide1.webp" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/guide/guide2.webp" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/guide/guide3.webp" mode=""></image>
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
		methods:{
			gotoIndex(){
				uni.redirectTo({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style lang="less">
swiper{
	width: 100vw;
	height: 100vh;
	background-color: deeppink;
	swiper-item{
		position: relative;
		image{
		width: 100%;
		height: 100%;
	}
		button{
			position: absolute;
			top: 70%;
			left: 50%;
transform: translateX(-50%);
		}
	}
	
}
</style>

