<template>
	<view>
		<Title back='true'>景点详情</Title>
		<view class="big-box">
			<image class="big-img" src="../../static/shanghai.webp" mode=""></image>
			<h3>南圣托里尼岛 </h3>
			<view class="money">￥4380
				<text> /人</text>
			</view>
			<view class="fen">
				<image src="../../static/xing.png" mode=""></image>
				4.5 ( 15K+ 浏览 )
			</view>
			<h4>旅程描述	<image src="../../static/jiantou.png" mode=""></image></h4>
			<view class="centent">
				圣托里尼是在希腊大陆东南200公里的爱琴海上由一群火山组成的岛环，圣托
				里尼岛环上最大的一个岛也叫圣托里尼岛，别名锡拉岛。圣托里..  
			</view>
			<h4>景点照片</h4>
			<view class="imgs">
				<image src="../../static/shanghai.webp" mode=""></image>
				<image src="../../static/shanghai.webp" mode=""></image>
				<image src="../../static/shanghai.webp" mode=""></image>
				<view class="more">18+</view>
			</view>
			<button class="btn" @click="goToReserve">预定旅程</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			goToReserve()
			{
				uni.navigateTo({
					url:'/pages/reserve/reserve'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.big-box {
		width: 650rpx;
		margin: 0 auto;

		.big-img {
			width: 100%;
			height: 440rpx;
			border-radius: 50rpx;
			margin-bottom: 50rpx;
		}

		h3 {
			font-size: 40rpx;
		}
		.money{
			margin-top: 15rpx;
			font-size: 32rpx;
			color: rgb(0,105,239);
			text{
				display: inline-block;
				font-size: 24rpx;
				color: rgb(170,170,170);
				text-indent: 10rpx;
			}
		}
		.fen{
			margin-top: 15rpx;
			font-size: 24rpx;
			color: rgb(170,170,170);
			display: flex;
			align-items: center;
			text-indent: 20rpx;
			image{
				width: 24rpx;
				height: 24rpx;
			}
		}
		h4{
			margin-top: 36rpx;
			width: 100%;
			height: 48rpx;
			font-size: 32rpx;
			line-height: 48rpx;
			color: rgba(18, 18, 18, 1);
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 15rpx;
			image{
				width: 16rpx;
				height: 28rpx;
			}
		}
		.centent{
			width: 100%;
			font-size: 28rpx;
			line-height: 48rpx;
			color: rgba(18, 18, 18, 0.6);
		}
		.imgs{
			width: 100%;
			display: flex;
			justify-content: space-between;
			image,.more{
				width: 136rpx;
				height: 136rpx;
				border-radius: 20rpx;
			}
			.more{
				background-color: rgb(92,92,92);
				color: white;
				font-size: 28rpx;
				line-height: 136rpx;
				text-align: center;
			}
			
		}
		.btn{
			width: 100%;
			height: 104rpx;
			background-color: #02DA98;
			font-size: 32rpx;
			border-radius: 20rpx;
			color: white;
			margin-top: 50rpx;
			line-height: 104rpx;
		}
	}
</style>
