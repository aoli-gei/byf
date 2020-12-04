<template>
	<view>
		<view class="content">
			
			<!-- 头部 -->
			<view class="header">
				<view class="header-title">与我绑定关系的人</view>
				<view class="avtor">
					<view class="avtor-img">
						<image mode="aspectFill" :src="avtor.img"></image>
					</view>
					<view class="avtor-title">
						<view class="title-name">{{avtor.title}}</view>
					</view>
				</view>
			</view>
			<!-- 尾部 -->
			<view class="footer">
				<view class="footer-title">
					<view class="title-left">星星最终还是要归还给宇宙的啊</view>
					<view class="title-right">对不起，我想把借的未来还给你</view>
				</view>
				<view class="footer-tip">
					<view class="tip-title" @click="isRelationship">解除关系</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avtor:{
					img:"/static/autor.jpg",
					title:"加载中....",
					number:"加载中...."
				},
			};
		},
		onLoad() {
			this.begin1();
			
		},
		methods:{
			begin1(){
				try {
				    this.avtor.number = uni.getStorageSync('lover_id');
					uniCloud.callFunction({
						name:"getu",
						data:{
							_id:uni.getStorageSync('lover_id')
						}
					}).then((res)=>{
						this.avtor.title = res.result.data["0"].username
						if(res.result.data["0"].pic){
							this.avtor.img=res.result.data["0"].pic
						}
					})
				} catch (e) {
				    // error
				}
			},
			isRelationship(){
				uni.showModal({
					title:"解除关系",
					content:"确定解除关系吗?再想想吧",
					success:(res)=>{
						console.log(res)
						if(res.confirm==true){
							try {
							    const value = uni.getStorageSync('_id');
							    if (value) {
							        console.log(value);
							    }
								uniCloud.callFunction({
									name:'getu',
									data:{
										_id:value
									}
								}).then((res)=>{
									uniCloud.callFunction({
										name:'delrelation',
										data:{
											_id:value,
											lover_id:res.result.data["0"].lover_id
										},
										success(res){
											uniCloud.callFunction({
												name:'delt',
												data:{
													_id:value
												}
											})
											uni.showModal({
												content: "解除绑定成功！",
												showCancel: false,
												success:(res)=>{
													console.log(res)
													if(res.confirm==true){
														uni.reLaunch({
														    url: '/pages/index/index'
														});
													}
												}
											})
											
										}
									})
								})
							} catch (e) {
							    // error
								uni.showModal({
									content: "解除绑定失败！",
									showCancel: false
								})
							}
						}
						
						
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		height: 100vh;
		width: 100vw;
		background-image:url('http://47.114.75.140/doc/message/image/18b8b543-9ad7-11e8-aebe-1368d4ec24eb/1605771188509.jpg');
		background-repeat: no-repeat;
		background-size:100% 100%;
		.header{
			width: 100vw;
			height: 40vh;
			border-bottom: 8rpx solid #FFAC00;
			.avtor{
				height: 300rpx;
				display: flex;
				align-items: center;
				padding:0 30rpx;
				padding-top: 30rpx;
				.avtor-img{
					display: flex;
					justify-content: center;
					align-items: center;
					// margin-left: 30rpx;
					width: 240rpx;
					height: 240rpx;
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
			.header-title{
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 72rpx;
				color: #666666;
				font-family: PingFangSC-regular;
				padding-top: 20rpx;
			}
			.header-tip{
				width: 100vw;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 100rpx;
				.tip-title{
					width: 160rpx;
					height: 68rpx;
					color: #101010;
					text-align: center;
					line-height: 68rpx;
					background-color: #FFFFFF;
					border: 2rpx solid #BBBBBB;
					border-radius: 4rpx;
					font-size: 30rpx;
				}
			}
		}
		.footer{
			width: 100vw;
			height: 59vh;
			.footer-title{
				padding: 330rpx 30rpx 0 30rpx;
				font-family: PingFangSC-regular;
				font-size: 36rpx;
				color: #333333;
				.title-left{
					line-height: 70rpx;
					text-align: left;
				}
				.title-right{
					line-height: 70rpx;
					text-align: right;
				}
			}
			.footer-tip{
				width: 100vw;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 44rpx;
				.tip-title{
					width: 204rpx;
					height: 68rpx;
					color: #101010;
					text-align: center;
					line-height: 68rpx;
					background-color: #FFFFFF;
					border: 2rpx solid #BBBBBB;
					border-radius: 4rpx;
					font-size: 30rpx;
				}
			}
		}
	}
</style>
