<template>
	<view>
		<view class="content">
			<view class="header">
				<view class="header-item">
					<view class="item-birthday">
						TA的生日:<text style="margin-left: 20rpx;">2002年11月3日</text>
					</view>
					<view class="item-color">
						<view class="color-title">TA喜欢的颜色:</view>
						<input placeholder="请输入喜欢的颜色"  v-model="likeColor"/>
					</view>
					<view class="item-color">
						<view class="color-title">TA喜欢的明星:</view>
						<input placeholder="请输入喜欢的明星"  v-model="message.fan"/>
					</view>
					<view class="item-shiwu">
						<view class="shiwu-left">TA喜欢的食物</view>
						<view class="shiwu-right">
							<textarea placeholder="请输入喜欢的食物"  v-model="likeShiwu"/>
						</view>
					</view>
				</view>
			</view>
			<view class="submit">
				<view class="submit-title" @click="submit">提交</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mingxing:"",
				likeColor:"",
				likeShiwu:""
			};
		},
		methods:{
			submit(){
				uni.showToast({
					title:this.mingxing+"-"+this.likeColor+"-"+this.likeShiwu,
					icon:"none"
				});
				console.log(this.mingxing+"-"+this.likeColor+"-"+this.likeShiwu)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		height: 100vh;
		width: 100vw;
		background-image:url('http://47.114.75.140/doc/message/image/18b8b543-9ad7-11e8-aebe-1368d4ec24eb/1605771209571.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		.header{
			.header-item{
				font-size: 34rpx;
				color: #000000;
				font-family: PingFangSC-regular;
				.item-birthday{
					height: 88rpx;
					line-height: 88rpx;
					padding: 0 30rpx;
					background-color: #FFFFFF;
					border-top: 2rpx solid #E5E5E5;
				}
				.item-color{
					height: 88rpx;
					padding: 0 30rpx;
					background-color: #FFFFFF;
					border-top: 2rpx solid #E5E5E5;
					display: flex;
					align-items: center;
					justify-content: space-between;
					input{
						flex: 1;
						margin-left: 20rpx;
					}

				}
				.item-shiwu{
					border-top: 2rpx solid #E5E5E5;
					border-bottom: 2rpx solid #E5E5E5;
					display: flex;
					align-items: center;
					padding: 0 30rpx;
					background-color: #FFFFFF;
					.shiwu-left{
						min-width: 260rpx;
						min-height: 200rpx;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					.shiwu-right{
						border-left: 2rpx solid #E5E5E5;
						flex: 1;
						min-height: 200rpx;
						line-height: 50rpx;
						padding-left: 10rpx;
						padding-top: 10rpx;
					}
				}
			}

		}
		.submit{

			display: flex;
			justify-content: center;
			align-items: center;
			width: 100vw;
			.submit-title{
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 32rpx;
				background-color: #007AFF;
				color: #FFFFFF;
				height: 70rpx;
				width: 140rpx;
				border-radius: 10rpx;
				margin-top: 60rpx;
			}

		}
	}
</style>
