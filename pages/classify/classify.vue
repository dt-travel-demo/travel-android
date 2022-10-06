<template>
	<view>
		<!-- 头部 -->
		<view class="top">
			<view class="sou">
				<text>扎金索斯 <image src="../../static/三角.png" mode=""></image></text>
				
				<image src="../../static/sou.png" mode=""></image>
			</view>
			<h3><image src="../../static/icon_weather_sun.png" mode=""></image>16~22°C</h3>
			<h4>ZHAJINSUOSI</h4>
			<h4>对该城市景区简单描述</h4>
			<image src="../../static/rili.png" class="rili" mode=""></image>
		</view>
		<!-- 分类 -->
		<view class="cify">
			<view class="item">
				<image src="../../static/logo.png" mode=""></image>
				景点
			</view>
			<view class="item">
				<image src="../../static/guide/guide3.png" mode=""></image>
				酒店
			</view>
			<view class="item">
				<image src="../../static/guide/guide3.png" mode=""></image>
				机票
			</view>
			<view class="item">
				<image src="../../static/guide/guide3.png" mode=""></image>
				高铁
			</view>
		</view>
		<!-- 内容模块 -->
		<view class="content">
			<view class="conts" @click="goToDetail">
				<image src="../../static/shanghai.webp" mode=""></image>
				<h5>感受大自然的清凉<image src="../../static/Frame 2.png" mode=""></image></h5>
				<text>中国，上海</text>
			</view>
			
			<view class="conts">
				<image src="../../static/shanghai.webp" mode=""></image>
				<h5>感受大自然的清凉<image src="../../static/Frame 2.png" mode=""></image></h5>
				<text>中国，上海</text>
			</view>
			<view class="conts">
				<image src="../../static/shanghai.webp" mode=""></image>
				<h5>感受大自然的清凉<image src="../../static/Frame 2.png" mode=""></image></h5>
				<text>中国，上海</text>
			</view>
		</view>
		<view class="bombox"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goToDetail(){
				uni.navigateTo({
					url:'/pages/detail/detail'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	//头部圆弧区
	.top{
		position: relative;
		padding: 0 25rpx;
		overflow: hidden;
		width: 100vw;
		height: 360rpx;
		background-image: url(../../static/shanghai.webp);
		background-size: 100%;
		border-bottom-left-radius:100% 25%;
		border-bottom-right-radius: 100% 25%;
		.sou{
			
			width: 100%;
			display: flex;
			height: 48rpx;
			color: white;
			font-size: 32rpx;
			line-height: 48rpx;
			justify-content: space-between;
			margin-top: 20rpx;
			padding: 0 40rpx;
			text{
				display: flex;
				align-items: center;
				image{
					margin-left: 10rpx;
					width: 18rpx;
					height: 14rpx;
				}
			}
			image{
				width: 48rpx;
				height: 48rpx;
			}
			
		}
		h3{
			margin-top: 40rpx;
			font-size: 32rpx;
			color: white;
			display: flex;
			align-items: center;
			image{
				margin-right: 20rpx;
				display: inline-block;
				width: 60rpx;
				height: 60rpx;
			}
		}
		h4{
			font-weight: 300;
			margin-top: 20rpx;
			font-size: 24rpx;
			color: white;
		}
		.rili{
			width: 48rpx;
			height: 48rpx;
			position: absolute;
			right: 40rpx;
			bottom: 60rpx;
		}
	}
	//分类
	.cify{
		margin-top: 30rpx;
		width: 100vw;
		height: 120rpx;
		display: flex;
		justify-content: space-evenly;
		.item{
			// color: white;
			font-weight: 600;
			font-size: 24rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			image{
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
			}
		}
	}
	//内容模块
	.content{
		width: 650rpx;
		margin: 35rpx auto 0;
		.conts{
			margin-top: 30rpx;
			width: 100%;
			text-indent: 16rpx;
			line-height: 48rpx;
			font-size: 28rpx;
			color: rgb(170,170,170);
			image{
				width: 100%;
				height: 320rpx;
				border-radius: 30rpx;
				display: block;
				margin-bottom: 20rpx;
			}
			h5{
				color: black;
				font-size: 32rpx;
				font-weight: 550;
				image{
					width: 48rpx;
					height: 48rpx;
					float: right;
				}
			}
			text{
				text-indent: 16rpx;
				display: block;
			}
		}
	}
</style>
