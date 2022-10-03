<template>
	<view>
		<view class="bg"></view>
		<image class="return" src="../../static/return.png" mode=""
		@click="goToBack"></image>
		<view class="title">
			<image src="../../static/logo.png" mode=""></image>
			Travel
		</view>
		<view class="content">
			<h3>登录到 Travel</h3>
			<h4>邮箱</h4>
			<input type="text" value="12595422@qq.com">
			<h4>密码</h4>
			<view class="pass">
				<input :type="passInfo?'text':'password'" name="" id="pass">
				<image :src="passInfo?'../../static/eye1.png':'../../static/eye0.png'"
				 @click="passInfo=!passInfo"
				 mode=""></image>
			</view>
			<view class="check-pass">
				<label>
					<checkbox value="123" style="transform: scale(0.7);margin-right: 10rpx;" />
					<text>记住密码</text>
				</label>
				<text>忘记密码？</text>
			</view>
			<button class="login">登录<image src="../../static/login》.png" mode=""></image></button>
			<text class="h5"  @click="goToSign">没有账户?去注册</text>
		</view>
		<text class="qita">——  其他登录方式  ——</text>
		<image class="wei" src="../../static/wei.webp" mode="" @click="info"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				passInfo:false
			};
		},
		methods:{
			goToBack(){
				uni.navigateBack()
			},
			goToSign(){
				uni.navigateTo({
					url:'/pages/login/sign'
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
		// padding-bottom: 10rpx;

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

		#pass {
			letter-spacing: 20rpx;
		}
		.pass{
			position: relative;
			image{
				width: 60rpx;
				height: 60rpx;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: 3%;
			}
		}
		.check-pass {
			margin: 40rpx 0;
			font-size: 28rpx;

			>text {
				color: rgb(125, 133, 147);
				float: right;
			}
		}

		.login {
			width: 100%;
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
		.h5{
			margin: 30rpx 0;
			display: block;
			width: 100%;
			font-size: 32rpx;
			color: #3F8CFF;
			text-align: center;
		}
	}
	.qita{
		display: block;
		width: 100%;
		text-align: center;
		font-size: 28rpx;
		color: #7e828c;
		margin:30rpx 0;
	}
	.wei{
		width: 150rpx;
		height: 150rpx;
		border-radius: 50rpx;
		box-shadow: #D8E0F0;
		margin:  0 auto;
		display: block;
	}
</style>
