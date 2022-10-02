<template>
	<view class="content">
		<button @click="fn">引导页</button>
		<button @click="qq">qq</button>
		{{title}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			async qq(){
				let str=await this.$request('/qqtx/api.php',{data:{qq:2052596033}})
				this.title=str
			},
			fn(){
				uni.navigateTo({
					url:'/pages/guide/guide'
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
