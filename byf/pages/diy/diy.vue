<template>
	<view style="padding-top: 20rpx;">
		<!-- 添加 -->
		<view class="card">
			<view class="card-item">
				<view class="item-add">
					<navigator class="add-img" url="/pages/diy/addcrad">
						<image mode="aspectFill" src="/static/add.png"></image>
					</navigator>
					<view class="add-title">给心爱的TA定制一张专属的券吧~</view>
				</view>
				<view class="item-right">
					<view class="right-top"></view>
					<view class="item-footer selects" >赠送</view>
				</view>
				<view class="item-posone">
					<image mode="aspectFill" src="/static/love.png"></image>
					<view class="posone-title">Love</view>
				</view>
				<view class="item-postwo"  >
					<image mode="aspectFill" src="/static/juan.png"></image>
				</view>
			</view>
		</view>
		<!-- 列表 -->
		<view class="card" v-for="(item,index) in cardList" :key="index">
			<view class="card-item">
				<view class="item-left" v-if="!item.isBack">
					<view class="left-title">{{item.title}}</view>
				</view>
				<view class="item-center"  v-if="!item.isBack">
					<view class="center-img">
						<image mode="aspectFill" :src="item.src"></image>
					</view>
					<view class="center-title">有效期:<text style="margin-left: 10rpx;">{{item.time}}</text></view>
				</view>
				<view class="item-right"  v-if="!item.isBack">
					<view class="right-top">{{item.tip}}</view>
					<view class="item-footer selects">赠送</view>
				</view>
				<view class="item-posone">
					<image mode="aspectFill" src="/static/love.png"></image>
					<view class="posone-title">{{item.tips}}</view>
				</view>
				<view class="item-postwo"  v-if="!item.isBack">
					<image mode="aspectFill" src="/static/juan.png"></image>
				</view>
				<view class="item-icon" @click="clickBack(index)">
					<image mode="aspectFill" src="/static/mb-rotate.svg"></image>
				</view>
				<view class="item-content"  v-if="item.isBack">
					{{item.content}}
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
		onLoad() {
			this.cardList=[
				{
					title:"举高高券",
					src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/f87bafd0-2c0b-11eb-b997-9918a5dda011.jpg",
					time:"2020.10.01-2020.11.20",
					tip:"今天你说啥都对",
					isTrue:false, //是否使用
					tips:"LOVE",
					content:"我的房间梵蒂冈丰东股份打算考教辅的讽德诵功风光大嫁个饭点击覆盖电视剧发",//背面的内容
					isBack:false,//是否显示背面
				},{
					title:"公举抱券",
					src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/fc779590-2c0b-11eb-899d-733ae62bed2f.gif",
					time:"2020.10.04-2020.11.10",
					tip:"今天你是老大",
					isTrue:true,
					tips:"LIKE",
					content:"我的房间梵蒂冈丰东股份打算考教辅的讽德诵功风光大嫁个饭点击覆盖电视剧发",//背面的内容
					isBack:false,//是否显示背面
				},{
					title:"公举抱券",
					src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/fd2d7810-2c0b-11eb-97b7-0dc4655d6e68.gif",
					time:"2020.10.04-2020.11.10",
					tip:"今天你是说了算",
					isTrue:true,
					tips:"LIKE",
					content:"我的房间梵蒂冈丰东股份打算考教辅的讽德诵功风光大嫁个饭点击覆盖电视剧发",//背面的内容
					isBack:false,//是否显示背面
				},{
					title:"公举抱券",
					src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/fa7fbd30-2c0b-11eb-97b7-0dc4655d6e68.jpg",
					time:"2020.10.04-2020.11.10",
					tip:"想你了",
					isTrue:false,
					tips:"LIKE",
					content:"我的房间梵蒂冈丰东股份打算考教辅的讽德诵功风光大嫁个饭点击覆盖电视剧发",//背面的内容
					isBack:false,//是否显示背面
				}
			]
		},
		methods:{
			clickBack(index){
				this.cardList[index].isBack=!this.cardList[index].isBack
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f0e5e0;
	}
	.card{
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		.card-item{
			width: 750rpx;
			height: 450rpx;
			background-image:url('/static/Copy.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			position: relative;
			display: flex;
			align-items: center;
			.item-left{
				margin-left: 53rpx;
				.left-title{
					font-size: 36rpx;
					color: #101010;
					font-family: PingFangSC-regular;
					width: 36rpx;
					height: 300rpx;
					line-height: 56rpx;
					margin-right: 16rpx;
				}
			}
			.item-center{
				margin-left: 20rpx;
				margin-right: 52rpx;
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
				top: 17rpx;
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
					transform: rotate(-18deg);
					letter-spacing: 4rpx;
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
			.item-icon{
				position: absolute;
				bottom: 64rpx;
				left: 44rpx;
				width: 50rpx;
				height: 50rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.item-content{
				box-sizing:border-box;
				padding: 20rpx;
				width: 380rpx;
				height: 286rpx;
				position: absolute;
				top: 62rpx;
				left: 127rpx;
				font-size: 32rpx;
				line-height: 45rpx;
				text-indent: 2em;
				word-break: break-all;
				text-overflow: ellipsis;
				display: -webkit-box; 
				-webkit-box-orient: vertical; 
				-webkit-line-clamp: 6; 
				overflow: hidden; 
			}
			.item-add{
				margin-left: 50rpx;
				margin-right: 30rpx;
				display: flex;
				align-items: center;
				flex-direction: column;
				width: 486rpx;
				.add-img{
					width: 150rpx;
					height: 150rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.add-title{
					font-size: 32rpx;
					color: #EA9518;
					font-family: 方正准圆-undefined;
					margin-top: 40rpx;
				}
			}
		}
	}
</style>
