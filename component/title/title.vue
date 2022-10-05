<template>
	<view class="bigbox">
		<view class="title">
			<view class="box"></view>
			<view class="text">
				<image @click="backs" v-if="back" class="return" src="../../static/return1.png" mode=""></image>
				<slot></slot>
			</view>
		</view>
		<view class="bg"></view>
	</view>
</template>

<script>
	export default {
		props:['back'],
		name:'Title',
		data() {
			return {
				
			};
		},
		methods:{
			backs(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="less" scoped>
.bigbox{
	position: relative;
	z-index: 99;
	width: 100vw;
	margin-bottom: 40rpx;
	.title{
		position: fixed;
		top: 0;
		width: 100vw;
		background-color: white;
		padding-bottom: 20rpx;
		border-bottom: 1rpx solid #d5d5d5;
		.box{
			width: 100%;
			height: 86rpx;
			
		}
		.text{
			width: 100%;
			height: 54rpx;
			line-height: 54rpx;
			font-size: 36rpx;
			text-align: center;
			font-weight: 600;
			position: relative;
			.return{
				width: 16rpx;
				height: 32rpx;
				position: absolute;
				top: 12rpx;
				left: 50rpx;
			}
		}
	}
	.bg{
		width: 100%;
		height: 140rpx;
	}
}
</style>
