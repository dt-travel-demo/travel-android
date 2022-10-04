<template>
	<view class="bigbox">
		<view class="title">
			<view class="box"></view>
			<view class="text">
				<slot></slot>
			</view>
		</view>
		<view class="bg"></view>
		
	</view>
</template>

<script>
	export default {
		name:'Title',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
.bigbox{
	position: relative;
	z-index: 99;
	width: 100vw;
	.title{
		position: fixed;
		top: 0;
		width: 100vw;
		background-color: white;
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
		}
	}
	.bg{
		width: 100%;
		height: 140rpx;
	}
}
</style>
