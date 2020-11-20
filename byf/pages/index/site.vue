<template>
	<view>
		<view class="content">
			<!-- 头部 -->
			<view class="header">
				<view class="header-title">啊界面微信</view>
				<view class="header-tip">
					<navigator class="tip-title" url="/pages/index/index">开溜</navigator>
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
			};
		},
		methods:{
			isRelationship(){
				uni.showModal({
					title:"解除关系",
					content:"确定解除关系吗?再想想吧",
					success:(res)=>{
						console.log(res)
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
										uni.showModal({
											content: "解除绑定成功！",
											showCancel: false,
											success:(res)=>{
												uni.redirectTo({
												    url: '/pages/index/index'
												});
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
			.header-title{
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 72rpx;
				color: #666666;
				font-family: PingFangSC-regular;
				padding-top: 200rpx;
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
