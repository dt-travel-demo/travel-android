<template>
	<view>
		<Title back='true'>编辑信息</Title>
		<!-- 头像 -->
		<view class="head">
			<image class="heads" src="../../static/shanghai.webp"></image>
			<image class="group" src="../../static/Group.png" mode=""></image>
		</view>
		<!-- 、、设置区 -->
		<ul>
			<li>
				姓名
				<input type="text" value="205256@qq.com">
			</li>
			<li>
				职业
				<input type="text" value="UX/UI 设计师">
			</li>
			<li style='border: none;'>
				性别
				<view class="box">
					<view class="sex">男</view>
					<view class="sex active">女</view>
				</view>
			</li>
			<li  style='border: none;'>
				帮助
				<view class="inp">关于我们<image class="jiantou" src="../../static/jiantou.png" mode=""></image>
				</view>
			</li>
			<view class="esc">退出账号</view>
		</ul>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	//头像
.head{
	display: block;
	width: 240rpx;
	height: 240rpx;
	border-radius: 40rpx;
	margin: 48rpx auto 52rpx;
	position: relative;
	.heads{
		width: 100%;
		height: 100%;
		border-radius: 40rpx;
	}
	.group{
		position: absolute;
		width: 84rpx;
		height: 84rpx;
		right: 0;
		bottom: -18%;
		
	}
}
//设置区
ul{
	width: 100%;
	padding: 0 50rpx;
	li{
		width: 100%;
		height: 123rpx;
		border-bottom: 2rpx solid #b1b1b1;
		font-size: 32rpx;
		color: #b1b1b1;
		margin-bottom: 63rpx;
		input,.inp{
			color: black;
			font-size: 40rpx;
			margin-top: 10rpx;
			.jiantou{
				width: 16rpx;
				height: 28rpx;
				float: right;
				margin-top: 18rpx;
			}
		}
		.sex{
			width: 174rpx;
			height: 68rpx;
			border: #b1b1b1 1rpx solid;
			border-radius: 20rpx;
			line-height: 68rpx;
			text-align: center;
			margin:20rpx 20rpx 0 0;
			float: left;
		}
		.active{
			color: white;
			border: none;
			background-color: rgb(0,105,239);
		}
	}
	.esc{
		margin-top: -20rpx;
		width: 100%;
		height: 110rpx;
		background-color: #F5F6F7;
		color: rgb(103,103,103);
		border-radius: 50rpx;
		text-align: center;
		line-height: 110rpx;
	}
}
</style>
