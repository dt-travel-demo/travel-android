<template>
	<view>
		<view class="bg"></view>
		<image class="return" src="../../static/return.png" mode="" @click="goToBack"></image>
		<view class="title">
			<image src="../../static/logo.png" mode=""></image>
			Travel
		</view>
		<view class="content">
			<h3>验证你的邮箱</h3>
			<h4>邮箱</h4>
			<input type="text" value="12595422@qq.com">
			
			<view class="yanz">
				<view class="warn">
					<image src="../../static/warn.png" mode=""></image>
					验证码已发送到你的邮箱
				</view>
				<h4>验证码</h4>
				<view class="warn-box">
					<view class="item"></view>
					<view class="item"></view>
					<view class="item"></view>
					<view class="item"></view>
					<input type="text" value="1314" maxlength="4">
				</view>
			</view>
			
			<h4>创建密码</h4>
			<view class="pass">
				<input :type="passInfo?'text':'password'" name="" id="pass">
				<image :src="passInfo?'../../static/eye1.png':'../../static/eye0.png'" @click="passInfo=!passInfo"
					mode=""></image>
			</view>
			<h4>确认密码</h4>
			<view class="pass">
				<input :type="passInfo?'text':'password'" name="" id="pass">
				<image :src="passInfo?'../../static/eye1.png':'../../static/eye0.png'" @click="passInfo=!passInfo"
					mode=""></image>
			</view>
		
		</view>
		<button class="login" @click="goToIndex">去登录<image src="../../static/login》.png" mode=""></image></button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				passInfo: false
			};
		},
		methods: {
			goToBack() {
				uni.navigateBack()
			},
			goToIndex(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.bg {
		width: 100vw;
		height: 100vh;
		background-color: rgb(232, 241, 253);
		z-index: -1;
		position: fixed;
		top: 0;
		left: 0;
	}

	.return {
		position: fixed;
		top: 25rpx;
		left: 40rpx;
		width: 60rpx;
		height: 60rpx;
	}

	.title {
		margin-top: 100rpx;
		width: 100vw;
		height: 80rpx;
		text-align: center;
		color: rgb(58, 137, 255);
		font-size: 40rpx;

		image {
			vertical-align: middle;
			width: 80rpx;
			height: 80rpx;
			margin-left: -50rpx;
			margin-right: 30rpx;
		}
	}

	.content {
		margin: 50rpx auto 0;
		width: 640rpx;
		background-color: white;
		border-radius: 50rpx;
		overflow: hidden;
		padding: 0 40rpx;
		font-size: 28rpx;
		padding-bottom: 30rpx;

		h3 {
			font-size: 36rpx;
			text-align: center;
			margin: 50rpx 0;
		}

		h4 {
			margin-top: 50rpx;
			color: rgb(125, 133, 146);
		}

		input {
			width: 100%;
			height: 96rpx;
			border: 1px solid #D8E0F0;
			border-radius: 30rpx;
			color: rgb(125, 133, 146);
			text-indent: 28rpx;
			margin: 14rpx 0;
		}
		
		.yanz{
			width: 100%;
			.warn{
				width: 100%;
				height: 100rpx;
				background-color: rgb(228, 241, 253);
				border-radius: 30rpx;
				margin-top: 30rpx;
				line-height: 100rpx;
				display: flex;
				align-items: center;
				color: #8b99f0;
				image{
					margin: 0 20rpx;
					width: 48rpx;
					height: 48rpx;
				}
			}
			.warn-box{
				margin-top: 20rpx;
				width: 100%;
				height: 100rpx;
				display: flex;
				justify-content: space-evenly;
				position: relative;
				.item{
					width: 100rpx;
					height: 100rpx;
					border-radius: 30rpx;
					border: 1rpx solid #D8E0F0;
				}
				input{
					width: 150%;
					margin: 0;
					position: absolute;
					top: 0;
					left: 0;
					border: none;
					font-size: 50rpx;
					text-indent: 70rpx;
					letter-spacing: 102rpx;  //字符间距
				}
			}
		}
		
		

		#pass {
			letter-spacing: 20rpx;  //字符间距
		}

		.pass {
			position: relative;

			image {
				width: 60rpx;
				height: 60rpx;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: 3%;
			}
		}

		
	}
	.login {
		float: right;
		margin: 50rpx;
		width: 290rpx;
		height: 96rpx;
		background-color: #3F8CFF;
		color: white;
		border-radius: 30rpx;
		font-size: 32rpx;
		line-height: 96rpx;
		font-weight: 600;
		image {
			vertical-align: middle;
			width: 48rpx;
			height: 48rpx;
			position: relative;
			left: 10rpx;
		}
	}
</style>
