<template>
	<view id='box'>
		<view class="title">
			<view class="dw">
				<image src="../../static/dw.png" alt="">
					<h1>扎金索斯</h1>
			</view>
			<h1>你想去哪里？</h1>
			<view class="search">
				<input type="text" placeholder="请输入你想去的地方">
				<view class="recommend">
					<view class="r-h">
						<view></view>
						<h1>推荐</h1>
						<view></view>
					</view>
					<view class="r-n-hide">
						<view class="r-n">
							<view>
								中国香港
							</view>
							<view>
								中国香港
							</view>
							<view>
								中国香港
							</view>
							<view>
								中国香港
							</view>
							<view>
								中国香港
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="nav">
			<view class="n-box" v-for="item in 8">
				<image src="../../static/logo.png" mode=""></image>
				<h1>景点</h1>
			</view>
		</view>
		<view class="lass">
			<view class="l-nav-hide">
				<view class="l-nav">
					<view :class="c==0?'cl':''" @tap='cl(0)'>热门推荐</view>
					<view :class="c==1?'cl':''" @tap='cl(1)'>热门推荐</view>
					<view :class="c==2?'cl':''" @tap='cl(2)'>热门推荐</view>
					<view :class="c==3?'cl':''" @tap='cl(3)'>热门推荐</view>
					<view :class="c==4?'cl':''" @tap='cl(4)'>热门推荐</view>
				</view>
			</view>
			<view class="l-img-hide">
				<view class="l-img-box">
					<view class="l-img" @click="gotoyd">
						<image src="../../static/ld.png" mode=""></image>
						<h1>伦敦塔桥</h1>
						<h1>英国,伦敦</h1>
					</view>
					<view class="l-img" @click="gotoyd">
						<image src="../../static/ld.png" mode=""></image>
						<h1>伦敦塔桥</h1>
						<h1>英国,伦敦</h1>
					</view>
				</view>
			</view>
		</view>
		<view class="jd">
			<view class="j-title">
				<h1>最热景点</h1>
				<image src="../../static/d.png" mode=""></image>
			</view>
			<view class="j-box" @tap="gotoyd">
				<image src="../../static/ls.png" mode=""></image>
				<view class="txt">
					<h1>南圣托里尼岛</h1>
					<h1>基克拉德斯,希腊</h1>
				</view>
				<view>￥4380<h1>/人</h1></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				c: 0
			}
		},
		onLoad() {
			let str=uni.getStorageSync('first')
			if(!str){
				uni.redirectTo({
					url:'/pages/guide/guide'
				})
			}
		},
		methods: {
			cl(i) {
				this.c = i
			},
			gotoyd(){
				uni.navigateTo({
					url:'/pages/detail/detail'
				})
			}
		}
	}
</script>

<style lang="less">
	view {
		box-sizing: border-box;
	}

	#box {
		width: 100%;
		padding: 100rpx 48rpx 104rpx;
		// background-color: azure;

		.title {
			width: 100%;
			margin-bottom: 16rpx;

			.dw {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;

				&>image {
					width: 16rpx;
					height: 22rpx;
					margin-right: 6rpx;
				}

				&>h1 {
					font-size: 32rpx;
					font-weight: 400;
					color: rgba(18, 18, 18, 1);
				}
			}

			&>h1 {
				font-size: 48rpx;
				font-weight: 400;
				color: rgba(18, 18, 18, 1);
				margin-bottom: 16rpx;
			}

			.search {
				width: 100%;

				&>input {
					width: 654rpx;
					height: 96rpx;
					background: rgba(255, 255, 255, 1);
					border: 2rpx solid rgba(231, 234, 240, 1);
					border-radius: 20rpx;
					font-size: 28rpx;
					font-weight: 400;
					color: rgba(170, 170, 170, 1);
					padding-left: 16rpx;
				}

				.recommend {
					width: 100%;
					margin-top: 18rpx;

					.r-h {
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 6rpx;

						view {
							width: 178rpx;
							border-bottom: 4rpx solid rgba(166, 166, 166, 1);
						}

						h1 {
							font-size: 24rpx;
							font-weight: 700;
							color: rgba(166, 166, 166, 1);
						}
					}

					.r-n-hide {
						height: 50rpx;
						overflow: hidden;

						.r-n {
							width: 100%;
							padding-bottom: 14rpx;
							display: flex;
							overflow: auto;

							view {
								margin-right: 24rpx;
								border-radius: 40rpx;
								border: 2rpx solid rgba(229, 229, 229, 1);
								white-space: nowrap;
								padding: 8rpx 14rpx;
								font-size: 24rpx;
								font-weight: 400;
								color: rgba(166, 166, 166, 1);
							}
						}
					}
				}
			}
		}

		.nav {
			width: 654rpx;
			height: 328rpx;
			border-radius: 20rpx;
			border: 10rpx solid rgba(229, 229, 229, 1);
			box-shadow: inset -2rpx 0rpx 12rpx 12rpx rgba(229, 229, 229, 1);
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 20rpx;

			.n-box {
				width: 25%;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: center;

				image {
					width: 80rpx;
					height: 80rpx;
					margin-bottom: 4rpx;
				}

				h1 {
					font-size: 20rpx;
					font-weight: 400;
					color: rgba(0, 0, 0, 1);
				}
			}
		}

		.lass {
			width: 100%;
			margin-bottom: 48rpx;

			.l-nav-hide {
				height: 80rpx;
				overflow: hidden;
				margin-bottom: 48rpx;

				.l-nav {
					overflow: auto;
					display: flex;
					padding-bottom: 20rpx;

					view {
						white-space: nowrap;
						padding: 20rpx 40rpx;
						color: rgba(170, 170, 170, 1);
						font-size: 28rpx;
						font-weight: 400;
						border-radius: 40rpx;
						margin-right: 24rpx;
					}

					.cl {
						background: rgba(0, 105, 239, 1);
						color: rgba(255, 255, 255, 1);
					}
				}
			}

			.l-img-hide {
				height: 464rpx;
				overflow: hidden;

				.l-img-box {
					display: flex;
					overflow: auto;
					padding-bottom: 16rpx;

					.l-img {
						display: flex;
						flex-direction: column;
						width: 500rpx;
						height: 464rpx;
						background: rgba(255, 255, 255, 1);
						box-shadow: 20rpx 48rpx 108rpx 0px rgba(0, 0, 0, 0.04);
						margin-right: 32rpx;
						padding: 16rpx 16rpx 0;
						border-radius: 40rpx;

						image {
							width: 468rpx;
							height: 300rpx;
							margin-bottom: 28rpx;
						}

						h1 {
							margin-left: 40rpx;
						}

						h1:nth-child(2) {
							font-size: 32rpx;
							font-weight: 400;
							color: rgba(18, 18, 18, 1);
							margin-bottom: 10rpx;
						}

						h1:last-child {
							font-size: 28rpx;
							font-weight: 400;
							color: rgba(170, 170, 170, 1);
						}
					}
				}

			}
		}
		.jd{
			width: 100%;
			.j-title{
				width: 100%;
				display: flex;
				justify-content: space-between;
				h1{
					font-size: 32rpx;
					font-weight: 400;
					color: rgba(18, 18, 18, 1);
				}
				image{
					width: 8rpx;
					height: 36rpx;
				}
			}
			.j-box{
				display: flex;
				// justify-content: space-between;
				align-items: center;
				width: 654rpx;
				height: 160rpx;
				background: rgba(255, 255, 255, 1);
				border: 4rpx solid rgba(231, 234, 240, 1); 
				border-radius: 30rpx;
				margin-top: 26rpx;
				image{
					margin: 0 32rpx 0 36rpx;
					width: 120rpx;
					height: 120rpx;
				}
				.txt{
					margin-right: 120rpx;
					h1:first-child{
						font-size: 28rpx;
						font-weight: 400;
						color: rgba(18, 18, 18, 1);
						margin-bottom: 10rpx;
					}
					h1:last-child{
						font-size: 24rpx;
						font-weight: 400;
						color: rgba(170, 170, 170, 1);
					}
				}
				view:last-child{
					font-size: 32rpx;
					font-weight: 400;
					color: rgba(0, 105, 239, 1);
					display: flex;
					align-items: center;
					h1{
						margin-top: 18rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: rgba(170, 170, 170, 1);
					}
				}
			}
		}
	}
</style>
