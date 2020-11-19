<template>
	<view>
		<view class="card" v-for="(item,index) in cardList" :key="index">
			<view class="card-item">
				<view class="item-left">
					<view class="left-title">{{item.title}}</view>
					<view class="left-icon">
						<image mode="aspectFill" src="/static/mb-rotate.svg"></image>
					</view>
				</view>
				<view class="item-center">
					<view class="center-img">
						<image mode="aspectFill" src="/static/img.png"></image>
					</view>
					<view class="center-title">有效期:<text style="margin-left: 10rpx;">{{item.time}}</text></view>
				</view>
				<view class="item-right">
					<view class="right-top">{{item.tip}}</view>
					<view class="item-footer" :class="item.isTrue?'select':'selects'">{{item.isTrue?"已使用":"未使用"}}</view>
				</view>
				<view class="item-posone">
					<image mode="aspectFill" src="/static/love.png"></image>
					<view class="posone-title">{{item.tips}}</view>
				</view>
				<view class="item-postwo">
					<image mode="aspectFill" src="/static/juan.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardList:[],
			};
		},
		onLoad(option) {
			if(option.data=="isTrue"){
				this.cardList=[
					{
						title:"举高高券",
						time:"2020.10.01-2020.11.20",
						tip:"今天你说啥都对",
						isTrue:false,
						tips:"LOVE"
					},{
						title:"公举抱券",
						time:"2020.10.04-2020.11.10",
						tip:"今天你是老大",
						isTrue:true,
						tips:"LIKE"
					},{
						title:"公举抱券",
						time:"2020.10.04-2020.11.10",
						tip:"今天你是说了算",
						isTrue:true,
						tips:"LIKE"
					},{
						title:"公举抱券",
						time:"2020.10.04-2020.11.10",
						tip:"想你了",
						isTrue:false,
						tips:"LIKE"
					}
				]
			}else{
				this.cardList=[
					{
						title:"举高高券",
						time:"2020.10.01-2020.11.20",
						tip:"今天你说啥都对",
						isTrue:true,
						tips:"LOVE"
					},{
						title:"公举抱券",
						time:"2020.10.04-2020.11.10",
						tip:"今天你是老大",
						isTrue:true,
						tips:"LIKE"
					},{
						title:"公举抱券",
						time:"2020.10.04-2020.11.10",
						tip:"今天你是说了算",
						isTrue:true,
						tips:"LIKE"
					},{
						title:"公举抱券",
						time:"2020.10.04-2020.11.10",
						tip:"想你了",
						isTrue:true,
						tips:"LIKE"
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #EEE5E0;
	}
	.card{
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		.card-item{
			margin-top: 20rpx;
			width: 750rpx;
			height: 450rpx;
			background-image:url('/static/Copy.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			position: relative;
			display: flex;
			align-items: center;
			.item-left{
				margin-left: 40rpx;
				.left-title{
					margin-top: 70rpx;
					margin-bottom: 44rpx;
					font-size: 36rpx;
					color: #101010;
					font-family: PingFangSC-regular;
					width: 36rpx;
					line-height: 56rpx;
					margin-left: 16rpx;
				}
				.left-icon{
					width: 60rpx;
					height: 60rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
			.item-center{
				margin-left: 20rpx;
				margin-right: 62rpx;
				.center-img{
					width: 380rpx;
					height: 286rpx;
					background-color: #F4EBEA;
					border-radius: 20rpx;
					border: 2rpx solid #BBBBBB;
					display: flex;
					justify-content: center;
					align-items: center;
					image{
						width: 330rpx;
						height: 210rpx;
					}
				}
				.center-title{
					font-size: 24rpx;
					color: #EA9518;
					margin-top: 10rpx;
				}
			}
			.item-right{
				margin-top: 90rpx;
				.right-top{
					box-sizing: border-box;
					width: 140rpx;
					height: 192rpx;
					font-size: 28rpx;
					padding: 20rpx;
					color: #888888;
					font-family: Microsoft Yahei;
					border: 2rpx solid #C0C0C0;
					border-radius: 10rpx;
					margin-bottom: 20rpx;
				}
				.item-footer{
					box-sizing: border-box;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 30rpx;
					color: #FFFFFF;
					width: 140rpx;
					height: 70rpx;
					border-radius: 10rpx;
					border: 2rpx solid #EA9518;
					&.select{
						background-color: #EEE5E0;
					}
					&.selects{
						background-color: #EA9518;
					}
				}
			}
			.item-posone{
				position: absolute;
				top: 0rpx;
				right: 150rpx;
				width: 140rpx;
				height: 152rpx;
				z-index: 999;
				image{
					width: 140rpx;
					height: 152rpx;
				}
				.posone-title{
					position: absolute;
					top: 48rpx;
					right: 30rpx;
					font-size: 24rpx;
					color: #EA9518;
					font-family: SFUIText-regular;
				}
			}
			.item-postwo{
				width: 112rpx;
				height: 124rpx;
				position: absolute;
				top: 18rpx;
				right: 40rpx;
				image{
					width: 112rpx;
					height: 124rpx;
				}
			}
		}
	}
</style>
