<template>
	<view>
		<Title back='true'>预定旅程</Title>
		<view class="big-box">
			<view class="pos">
				<image src="../../static/shanghai.webp" mode=""></image>
				<view class="text-r">
					<h5>南圣托里尼岛</h5>
					<text>基克拉德斯, 希腊</text>
				</view>
			</view>
			<h4>选择日程</h4>
			<view class="rili">
				<uni-calendar :insert="true" :lunar="true" :start-date="'2019-3-2'" :end-date="'2019-5-20'" />
			</view>
			<h4>预约人数</h4>
			<view class="xial">
				      <uni-data-select
				        v-model="value"
				        :localdata="list"
				        :clear="false"
						@change="change"
						@focus='fn'
				      ></uni-data-select>
					  <image src="../../static/jiantou.png" mode=""></image>
			</view>
			<button class="btn">确定</button>
			<view class="bombox"></view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 1,
				list: [{
						value: 1,
						text: "1"
					},
					{
						value: 2,
						text: "2"
					},
					{
						value: 3,
						text: "3"
					}
				]
			};
		},
		methods:{
			change(e){
				console.log(e)
			},
			fn(){
				console.log(666)
			},
			goToReserve(){
				uni.navigateTo({
					url:'/pages/dd/dd'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.big-box {
		width: 654rpx;
		margin: 50rpx auto;

		.pos {
			width: 650rpx;
			height: 176rpx;
			background-color: rgb(247, 249, 253);
			border-radius: 20rpx;
			padding-left: 20rpx;
			display: flex;
			align-items: center;

			image {
				width: 128rpx;
				height: 128rpx;
				border-radius: 20rpx;
				margin-right: 30rpx;
			}

			h5 {
				font-size: 36rpx;
				line-height: 53.28rpx;
				color: rgba(18, 18, 18, 1);
			}

			text {
				display: block;
				font-size: 28rpx;
				line-height: 41.44rpx;
				color: rgba(170, 170, 170, 1);
				text-indent: 30rpx;
				background-image: url(../../static/dingwei.png);
				background-size: 28rpx 28rpx;
				background-repeat: no-repeat;
				background-position: 0 8rpx;
			}
		}

		h4 {
			margin: 50rpx 0 26rpx;
			font-size: 32rpx;
			line-height: 47.36rpx;
			color: rgba(18, 18, 18, 1);
		}

		.rili {
			margin-left: -48rpx;
			width: 750rpx;
			height: 672rpx;
			margin-bottom: 150rpx;
		}

		.xial {
			width: 100%;
			position: relative;
			image{
				position: absolute;
				width: 16rpx;
				height: 28rpx;
				top: 50%;
				transform: translateY(-50%);
				right: 5%;
			}
		}
		.btn{
			width: 100%;
			height: 104rpx;
			background-color: #02DA98;
			font-size: 32rpx;
			border-radius: 20rpx;
			color: white;
			margin: 100rpx 0;
			line-height: 104rpx;
		}
		.bombox{
			height: 10rpx;
		}
	}
</style>
