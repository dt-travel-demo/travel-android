<template>
	<view id="box">
		<Title back='back'><h5>订单详情</h5></Title>
		<view class="xx"></view>
		<view class="am"></view>
		<view class="jp"></view>
	</view>
</template>

<script>
		import Title from '../../component/title/title.vue'
	export default {
		data() {
			return {
				Components:{Title}
			};
		}
	}
</script>

<style lang="less">
	#box{
		.xx{
			width: 670rpx;
			height: 220rpx;
			background: url('../../static/Card1.png')no-repeat;
			background-size: cover;
			margin: 80rpx 40rpx 0;
		}
		.am{
			width: 598rpx;
			height: 70rpx;
			background: url('../../static/c2.png')no-repeat center center;
			background-size: cover;
			margin: 40rpx 70rpx 48rpx 82rpx;
		}
		.jp{
			width: 568rpx;
			height: 954rpx;
			background: url('../../static/c3.png')no-repeat center center;
			background-size: cover;
			margin: 0 89rpx 60rpx 93rpx;
		}
	}
</style>
