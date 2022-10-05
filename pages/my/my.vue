<template>
	<view>
		<Title>个人中心</Title>
		<image class="head" src="../../static/shanghai.webp"></image>
		<h3 class="name">林留真</h3>
		<view class="job">UI/UX 设计师</view>
		<!-- 信息展示 -->
		<view class="lists">
			<view class="item">
				<h4>145</h4>
				景点
			</view>
			<view class="line"></view>
			<view class="item">
				<h4>34</h4>
				国家
			</view>
			<view class="line"></view>
			<view class="item">
				<h4>100+KM</h4>
				距离
			</view>
		</view>
		<!-- 按钮 -->
		<view class="btns">
			<button class="add">添加足迹</button>
			<button class="set"><image src="../../static/set.png" mode=""></image></button>
		</view>
		<!-- 图片流 -->
		<view class="imgs">
			<view class="left-imgs">
				<image v-if="index%2!=0" :style='{height:item.height}' v-for="(item,index) in images" :key="item.id" :src="item.url" mode=""></image>
			</view>
			<view class="right-imgs">
				<image v-if="index%2==0" :style='{height:item.height}' v-for="(item,index) in images" :key="item.id" :src="item.url" mode=""></image>
			</view>
		</view>
		<view class="bombox"><!-- 底部占位 --></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgs:['../../static/mmao.webp',
				'../../static/duitang.webp',
					'../../static/shanghai.webp',
				'../../static/mmao.webp',
				'../../static/duitang.webp',
				'../../static/shanghai.webp',
				],
				images:[]
			};
		},
		onLoad() {
			this.imgH()
		},
		methods:{
			imgH(){
			let arr=[]
				this.imgs.forEach(async (s,i)=>{
					let obj=await this.$getImgH(310,s)
					obj.id=i+1
					arr.push(obj)
					
					if(arr.length==this.imgs.length){
						//由于测试时图片过少，相同的图片会排在一起，所以加个乱序
						this.images=arr.sort(()=>Math.random()-0.5)
					}
				})

			}
		},
		computed:{
			
		}
	}
</script>

<style lang="less">
.head{
	display: block;
	width: 240rpx;
	height: 240rpx;
	border-radius: 40rpx;
	margin: 48rpx auto 32rpx;
}
.name{
	font-size: 32rpx;
	width: 100vw;
	text-align: center;
}
.job{
	margin-top: 20rpx;
	font-size: 28rpx;
	color: #afafaf;
	text-align: center;
}
//信息展示
.lists{
	margin-top: 20rpx;
	width: 100vw;
	height: 100rpx;
	display: flex;
	font-size: 28rpx;
	color: #afafaf;
	justify-content: space-evenly;
	align-items: center;
	text-align: center;
	h4{
		font-size: 44rpx;
		color: black;
	}
	.line{
		border: 1rpx solid #E7EAF0;
		border-radius: 5rpx;
		width: 0;
		height: 60%;
		background-color:#E7EAF0 ;
	}
}
//按钮
.btns{
	margin: 50rpx 0;
	width: 100vw;
	padding: 0 20rpx;
	display: flex;
	justify-content: space-between;
	.add{
		width: 456rpx;
		background-color: #02DA98;
		border-radius: 25rpx;
		border: none;
		color: white;
	}
	.set{
		width: 160rpx;
		border: 1rpx solid #8a8a8a;
		border-radius: 25rpx;
		background-color: white;
		image{
			width: 50rpx;
			height: 50rpx;
		}
	}
	
}
//图片流
.imgs{
	width: 100vw;
	padding: 0 10rpx;
	display: flex;
	justify-content: space-evenly;
	view{
		width: 310rpx;
		display:inline-block;
		image{
			display:inline-block;
			width: 100%;
			
			height: 174.375rpx;
			margin-bottom: 30rpx;
			border-radius: 30rpx;
		}
	}
}

</style>
