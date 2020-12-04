
<template>
	<view>
		<view class="content">
			<view class="header">
				<view class="header-item">
					<view class="item-birthday">
						TA的生日:<text style="margin-left: 20rpx;">2002年11月3日</text>
					</view>
					<view class="item-color">
						<view class="color-title">TA喜欢的颜色:<text style="margin-left: 20rpx;">紫色</text></view>
						<view class="color-right">
							<image src="/static/right.svg"></image>
						</view>
					</view>
					<view class="item-color">
						<view class="color-title">TA喜欢的明星:<text style="margin-left: 20rpx;">{{message.fan}}</text></view>
						<view class="color-right">
							<image src="/static/right.svg"></image>
						</view>
					</view>
					<view class="item-shiwu">
						<view class="shiwu-left">TA喜欢的食物</view>
						<view class="shiwu-right">1.蛋黄酥    2.番茄炒蛋    3.麻薯     4.拔丝芋头   5.巧克力味的冰淇淋  </view>
					</view>
				</view>
			</view>
			<view class="add-tip" url="/pages/index/abouts" @click= jump()>修改</view>
			<view class="submit">
				<view class="submit-title" @click="jump1">点击查看在一起时间</view>
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
		onLoad() {
		    this.begin1()
			
		},
		methods:{
			begin1(){
				try {
				    const value = uni.getStorageSync('_id');
				    if (value) {
				        console.log(value);
				    }
					uniCloud.callFunction({
						name:"getu",
						data:{
							_id:value
						}
					}).then((res)=>{
						this.message=res.result.data["0"].message
					})
				} catch (e) {
				    // error
				}
			},
			jump(){
				uni.redirectTo({
				    url: '/pages/index/abouts'
				});
			},
			jump1(){
				uni.navigateTo({
					url:'/pages/lian/displayday'
				})
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
					.color-title{
						flex: 1;
					}
					.color-right{
						width: 48rpx;
						height: 48rpx;
						image{
							width: 100%;
							height: 100%;
						}
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
						border-right: 2rpx solid #E5E5E5;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					.shiwu-right{
						flex: 1;
						min-height: 200rpx;
						line-height: 50rpx;
						padding-left: 10rpx;
						padding-top: 10rpx;
					}
				}
			}
			
		}
		.add-tip{
			width: 150rpx;
			height: 150rpx;
			background-color: #007AFF;
			border-radius: 50%;
			color: #FFFFFF;
			font-size: 40rpx;
			overflow: hidden;
			display: flex;
			align-items: center;
			justify-content: center;
			position: fixed;
			right: 28rpx;
			bottom: 256rpx;
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
				background-color: rgb(254,232,159);
				color: #75763f;
				height: 80rpx;
				width: 340rpx;
				border-radius: 10rpx;
				margin-top: 60rpx;
			}
		}
	}
</style>
