<template>
	<view class="content">
		<!-- 头像 -->
		<view class="avtor">
			<view class="avtor-img">
				<image mode="aspectFill" :src="avtor.img"></image>
			</view>
			<view class="avtor-title">
				<view class="title-name">{{avtor.title}}</view>
				<view class="title-number">邀请码:{{avtor.number}}</view>
			</view>
		</view>
		
		<!-- 使用的导航 -->
		<view class="navgat-funct"> 
			<block v-for="(item,index) in navgatList" :key="index">
				<navigator class="funct-item" :url="item.url">
					<view class="item-title">{{item.title}}</view>
					<view class="item-right">
						<image src="/static/right.svg"></image>
					</view>
				</navigator>
			</block>
		</view>
		
		<!-- 退出登录 -->
		<view class="logout">
			<view class="logout-title">退出登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avtor:{
					img:"/static/autor.jpg",
					title:"MR.X",
					number:"123456"
				},
				navgatList:[
					{
						title:"收到的卷",
						url:"/pages/index/card?data=isTrue",
					},{
						title:"送出的卷",
						url:"/pages/index/card?data=isFalse",
					},{
						title:"关于 TA",
						url:"/pages/index/about",
					},{
						title:"系统设置",
						url:"/pages/index/site",
					},{
						title:"关系绑定",
						url:"/pages/index/bind",
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			paste() {
				
				uni.setClipboardData({
					data: this.avtor.number
				});
				uni.showToast({
					title:"复制成功！",
					icon:"none"
				});
			},
			test(title,url1){
				if(this.state==''){
					if(title=="关系绑定"){
						uni.navigateTo({
						    url: url1
						});
					}
					else {
						uni.showModal({
							content: "请先绑定关系",
							showCancel: false
						});
					}
				}
				else {
					if(title!="关系绑定"){
						uni.navigateTo({
						    url: url1
						});
					}
					else {
						uni.showModal({
							content: "你已绑定了关系",
							showCancel: false
						});
					}
				}
			},
			begin1(){
				try {
				    this.avtor.number = uni.getStorageSync('_id');
					this.avtor.title=uni.getStorageSync('username')
					if(uni.getStorageSync('pic')){
						this.avtor.img=uni.getStorageSync('pic')
					}
					
					uniCloud.callFunction({
						name:"getu",
						data:{
							_id:this.avtor.number
						}
					}).then((res)=>{
						uni.setStorageSync('lover_id',res.result.data["0"].lover_id)
						this.state=res.result.data["0"].lover_id
						if(res.result.data["0"].pic){
							this.avtor.img=res.result.data["0"].pic
						}
						this.avtor.number=uni.getStorageSync('_id')
					})
				} catch (e) {
				    // error
				}
			},
			out(){
				uni.showModal({
					title:"退出登录",
					content:"确定退出登录吗?再想想吧",
					success:(res)=>{
						console.log(res)
						if(res.confirm==true){
							uni.setStorageSync('status1',0);
							uni.clearStorageSync();
							uni.reLaunch({
							    url: '/pages/test/test'
							});
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss" >
	page{
		background-image:url('http://47.114.75.140/doc/message/image/18b8b543-9ad7-11e8-aebe-1368d4ec24eb/1605771093595.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.content{
		height: 100vh;
		width: 100vw;
		
		.avtor{
			height: 300rpx;
			display: flex;
			align-items: center;
			padding:0 30rpx;
			.avtor-img{
				width: 200rpx;
				height: 200rpx;
				border-radius: 50%;
				overflow: hidden;
				.image{
					width: 100%;
					height: 100%;
				}
			}
			.avtor-title{
				flex: 1;
				margin-left: 30rpx;
				max-width: 360rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				.title-name{
					font-size: 36rpx;
					font-weight: bold;
					color: #333333;
					line-height: 70rpx;
				}
				.title-number{
					font-size: 30rpx;
					color: #666666;
				}
			}
		}
		.navgat-funct{
			width: 100vw;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			margin-top: 20rpx;
			.funct-item{
				margin-top: 30rpx;
				width: 690rpx;
				height: 85rpx;
				background-color: #FFFFFF;
				border-radius: 10rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.item-title{
					font-size: 34rpx;
					color: #000000;
					font-family: PingFangSC-regular;
					margin-left: 30rpx;
				}
				.item-right{
					width: 48rpx;
					height: 48rpx;
					margin-right: 10rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
			
		}
		.logout{
			width: 100vw;
			display: flex;
			align-items: center;
			justify-content: center;
			.logout-title{
				margin-top: 100rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 268rpx;
				height: 88rpx;
				border-radius: 44rpx;
				background-color: #ffac00;
				color: #FFFFFF;
				font-size: 34rpx;
			}
		}
	}
</style>
