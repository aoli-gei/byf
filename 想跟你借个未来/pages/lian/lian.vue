<template>
	<view>
		<view class="content">
			<view class="content-title">真好</view>
			<view class="content-title">遇见你</view>
			<view class="content-title">恋爱小报</view>
			<view class="content-title">想跟你借个未来</view>
		</view>
		<view class="footer">
			<view class="footer-tip">所谓世间，不就是你吗</view>
			<navigator class="footer-title" url="/pages/lian/next">进入</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	page{
		background-image:url('http://47.114.75.140/doc/message/image/18b8b543-9ad7-11e8-aebe-1368d4ec24eb/1606019954585.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.content{
		box-sizing: border-box;
		width: 100vw;
		height: 45vh;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding:0 20rpx;
		padding-top: 20rpx;
		.content-title{
			writing-mode: vertical-lr;
			color: #F4F2F2;
		}
		view:nth-child(1){
			font-size: 48rpx;
			height:160rpx;
			width: 75rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			letter-spacing: 20rpx;
		}
		view:nth-child(2){
			font-size: 48rpx;
			height: 425rpx;
			width: 75rpx;
			letter-spacing: 25rpx;
			display: flex;
			align-items: center;
			justify-content: flex-start;
		}
		view:nth-child(3){
			font-size: 28rpx;
			height: 220rpx;
			width: 75rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			letter-spacing: 25rpx;
		}
		view:nth-child(4){
			font-size: 36rpx;
			height: 440rpx;
			width: 75rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			letter-spacing:25rpx;
		}
	}
	.footer{
		width: 100vw;
		height:55vh;
		display: flex;
		align-items: center;
		position: relative;
		.footer-tip{
			writing-mode: vertical-lr;
			color: #F4F2F2;
			font-size: 40rpx;
			font-family: PingFangSC-regular;
			letter-spacing: 15rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 140rpx;
		}
		.footer-title{
			font-size: 56rpx;
			color: #FAF7F7 ;
			position: absolute;
			bottom: 150rpx;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>
