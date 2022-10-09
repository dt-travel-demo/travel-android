<template>
	<view>
		<Title>订单</Title>
		<view class="nav">
			<view class="item" v-for="(item,index) in navs" :class="status==index?'active':''" @click="status=index">
				{{item}}</view>
		</view>
		<view class="list">
			
			<!-- 每一张票 -->
			<view class="ticket" v-for="item in activeList" :key="item.id" @click="goToDD">
				<!-- 票上面的盒子 -->
			<view class="box-top">
				<image :src="item.type=='train'?'../../static/huoche.png':'../../static/feiji.png'" mode=""></image>
				<view class="left-b">
					<view class="shang">从</view>
					<h3>{{item.startName}}</h3>
					<view class="english">{{item.startEnglish}}</view>
				</view>
				<view class="line"></view>
				<view class="right-b">
					<view class="shang">到</view>
					<h3>{{item.endName}}</h3>
					<view class="english">{{item.endEnglish}}</view>
				</view>
				
				<!-- 路程时间 -->
				<view class="time" v-if="item.status!=3"
				:style="item.status==2?'color: rgb(121,72,234);':''">
				约{{item.time}}</view>
			</view>
			<!-- 票下面的盒子 -->
			<view class="box-bottom">
				状态:{{navs[item.status]}}
				<view class="btn">{{getText(item.status)}}</view>
			</view>
			</view>
			
			
			
			
			<view class="bombox"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navs: ['全部', '未开始', '已开始', '已完成'],
				status: 0,
				list: [{
					id:'001',             //id号
					startName:'上海',       //到达地址名
					startEnglish:'sahnghai',  //到达地址英文名
					endName:'北京',         //到达地址名
					endEnglish:'beijin',   //到达地址英文名
					time:'2小时',   //旅途时间
					status:1,      //行程状态
					type:'plane',  //飞机(票的类型)
				},{
					id:'002',
					startName:'成都',
					startEnglish:'chegndu',
					endName:'广州',
					endEnglish:'广州',
					time:'4小时',
					status:2,
					type:'train',  //火车
				},{
					id:'003',
					startName:'黑龙江',
					startEnglish:'黑龙江',
					endName:'北京',
					endEnglish:'beijin',
					time:'6小时',
					status:3,
					type:'plane'
				}],
			};
		},
		methods:{
			getText(i){
				switch(i){
					case 1:
					return '退订';
					case 2:
					return '遇到问题';
					case 3:
					return '评价';
				}
			},
			goToDD(){
				uni.navigateTo({
					url:'/pages/dd/dd'
				})
			}
		},
		computed:{
			activeList(){
				if(this.status==0){
					return this.list
				}else{
					return this.list.filter(v=>v.status==this.status)
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	//头部
	.nav {
		width: 100vw;
		display: flex;
		padding: 0 20rpx;
		justify-content: space-evenly;

		.item {
			text-align: center;
			width: 160rpx;
			padding: 16rpx 0;
			font-size: 32rpx;
			color: rgb(170, 170, 170);
		}

		.active {
			background-color: #0069EF;
			border-radius: 50rpx;
			color: white;
			font-weight: 600;
		}
	}

	//票列表
	.list {
		width: 100vw;
		padding: 0 40rpx;

		.ticket {
			margin-top: 32rpx;
			width: 100%;
			height: 280rpx;
			border: 4rpx solid #E5E5E5;
			border-radius: 20rpx;
			//<!-- 票上面的盒子 -->
			.box-top{
				padding: 0 45rpx;
				width:100% ;
				height: 218rpx;
				border-bottom: #E5E5E5  4rpx solid;
				display: flex;
				justify-content: space-between;
				position: relative;
				image{
					width: 68rpx;
					height: 68rpx;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-60%);
				}
				.line{
					background-color: #E5E5E5;
					width: 2rpx;
					height: 90%;
				}
				.shang,.english,h3{
					width: 240rpx;
					color: rgb(94,94,94);
					font-size: 26rpx;
					height: 60rpx;
					line-height: 60rpx;
				}
				h3{
					color: rgb(0, 0, 0);
					font-size: 40rpx;
				}
				.english{
					font-size: 24rpx;
				}
				.right-b{
					text-align: right;
				}
				
				.time{
					font-size: 18rpx;
					color: rgb(2,218,152);
					position: absolute;
					bottom: 10rpx;
					right: 20rpx;
				}
			}
			//票下面的盒子
			.box-bottom{
				width: 100%;
				font-size: 24rpx;
				color: rgb(166,166,166);
				display: flex;
				padding:0 20rpx;
				justify-content: space-between;
				line-height: 59rpx;
				.btn{
					margin-top: 10rpx;
					line-height: 35rpx;
					display: inline-block;
					height: 40rpx;
					padding:0 10rpx;
					border: 4rpx solid #E5E5E5;
					border-radius: 30rpx;
				}
			}
		}
	}
</style>
