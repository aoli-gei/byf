<template>
	<view style="padding-top: 20rpx;">
		<!-- 卷的列表 -->
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
					<view class="item-footer" :class="item.isTrue?'select':'selects'">{{item.isTrue?"已使用":"未使用"}}</view>
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
		onLoad(option) {
			if(option.data=="isTrue"){
				this.cardList=[
					{
						title:"举高高券",
						time:"2020.10.01-2020.11.20",
						src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/fdca7b60-2c0b-11eb-899d-733ae62bed2f.gif",
						tip:"今天你说啥都对",
						isTrue:false, //是否使用
						tips:"LOVE",
						content:"我的房间梵蒂冈丰东股份打算考教辅的讽德诵功风光大嫁个饭点击覆盖电视剧发",//背面的内容
						isBack:false,//是否显示背面
					},{
						title:"公举抱券",
						time:"2020.10.04-2020.11.10",
						src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/ffd629e0-2c0b-11eb-899d-733ae62bed2f.gif",
						tip:"今天你是老大",
						isTrue:true,
						tips:"LIKE",
						content:"我的房间梵蒂冈丰东股份打算考教辅的讽德诵功风光大嫁个饭点击覆盖电视剧发",//背面的内容
						isBack:false,//是否显示背面
					},{
						title:"公举抱券",
						time:"2020.10.04-2020.11.10",
						src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/027b3230-2c0c-11eb-8a36-ebb87efcf8c0.gif",
						tip:"今天你是说了算",
						isTrue:true,
						tips:"LIKE",
						content:"我的房间梵蒂冈丰东股份打算考教辅的讽德诵功风光大嫁个饭点击覆盖电视剧发",//背面的内容
						isBack:false,//是否显示背面
					},{
						title:"公举抱券",
						time:"2020.10.04-2020.11.10",
						src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/f571cb30-2c0b-11eb-bd01-97bc1429a9ff.gif",
						tip:"想你了",
						isTrue:false,
						tips:"LIKE",
						content:"我的房间梵蒂冈丰东股份打算考教辅的讽德诵功风光大嫁个饭点击覆盖电视剧发",//背面的内容
						isBack:false,//是否显示背面
					}
				]
			}else{
				this.cardList=[
					{
						title:"举高高券",
						time:"2020.10.01-2020.11.20",
						src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/f62340e0-2c0b-11eb-899d-733ae62bed2f.jpg",
						tip:"今天你说啥都对",
						isTrue:true,
						tips:"LOVE",
						content:"我的房间梵蒂冈丰东股份打算考教辅的讽德诵功风光大嫁个饭点击覆盖电视剧发",//背面的内容
						isBack:false,//是否显示背面
					},{
						title:"公举抱券",
						time:"2020.10.04-2020.11.10",
						src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/f571cb30-2c0b-11eb-bd01-97bc1429a9ff.gif",
						tip:"今天你是老大",
						isTrue:true,
						tips:"LIKE",
						content:"我的房间梵蒂冈丰东股份打算考教辅的讽德诵功风光大嫁个饭点击覆盖电视剧发",//背面的内容
						isBack:false,//是否显示背面
					},{
						title:"公举抱券",
						time:"2020.10.04-2020.11.10",
						src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/f7928850-2c0b-11eb-899d-733ae62bed2f.jpg",
						tip:"今天你是说了算",
						isTrue:true,
						tips:"LIKE",
						content:"我的房间梵蒂冈丰东股份打算考教辅的讽德诵功风光大嫁个饭点击覆盖电视剧发",//背面的内容
						isBack:false,//是否显示背面  false 不显示   true显示
					},{
						title:"公举抱券",
						time:"2020.10.04-2020.11.10",
						src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/f6eece40-2c0b-11eb-899d-733ae62bed2f.jpg",
						tip:"想你了",
						isTrue:true,
						tips:"LIKE",
						content:"我的房间梵蒂冈丰东股份打算考教辅的讽德诵功风光大嫁个饭点击覆盖电视剧发",//背面的内容
						isBack:false,//是否显示背面
					}
				]
			}
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
		}
	}
</style>