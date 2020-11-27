<template>
	<view>
		<!-- <view class="card" v-for="(item,index) in cardList" :key="index">
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
		</view> -->
		<view class="card" v-for="(item,index) in cardList" :key="index">
			<view class="card-item">
				<view class="item-left" v-if="!item.isBack">
					<view class="left-title">{{item.title}}</view>
				</view>
				<view class="item-center"  v-if="!item.isBack">
					<view class="center-img">
						<image mode="aspectFill" :src="item.src"></image>
					</view>
					<view class="center-title">{{item.tips}}券日期:<text style="margin-left: 10rpx;">{{item.time}}</text></view>
				</view>
				<view class="item-right"  v-if="!item.isBack">
					<view class="right-top">{{item.tip}}</view>
					<!-- <view class="item-footer selects">使用</view> -->
					<view class="item-footer" :class="item.isTrue?'select':'selects'" @click="using(item.isTrue,item._id,item.from_id)">{{item.isTrue?"已使用":"使用"}}</view>
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
				// this.cardList=[
				// 	{
				// 		title:"举高搞高券",
				// 		time:"2020.10.01-2020.11.20",
				// 		tip:"今天你说啥都h1111111",
				// 		isTrue:false,
				// 		tips:"LOVE"
				// 	},{
				// 		title:"公举抱券",
				// 		time:"2020.10.04-2020.11.10",
				// 		tip:"今天你是老大",
				// 		isTrue:true,
				// 		tips:"LIKE"
				// 	},{
				// 		title:"公举抱券",
				// 		time:"2020.10.04-2020.11.10",
				// 		tip:"今天你是说了算",
				// 		isTrue:false,
				// 		tips:"LIKE"
				// 	},{
				// 		title:"公举抱券",
				// 		time:"2020.10.04-2020.11.10",
				// 		tip:"想你了",
				// 		isTrue:false,
				// 		tips:"LIKE"
				// 	}
				// ]
				var cardList=[]
				uniCloud.callFunction({
					name:'gett1',
					data:{
						_id:uni.getStorageSync('lover_id')
					},
					success: (res) => {
						console.log("查询券结果：",res)
						// this.cardList=res.result.data
						console.log("查询券：",res.result.data.length)
						var i
						
						for(i in res.result.data){
							console.log("当前元素：",res.result.data[i])
							if(res.result.data[i].from_id==uni.getStorageSync('_id')){
								res.result.data[i].tips="送出"
							}
							else{
								res.result.data[i].tips="收到"
							}
							res.result.data[i].time=this.happenTimeFun(res.result.data[0].create_time)
							res.result.data[i].isBack=false
							cardList.push(res.result.data[i])
						}
						console.log("查询券结果2：",cardList)
					}
				})
				this.cardList=cardList
			}else{
				// this.cardList=[
				// 	{
				// 		title:"举高高券",
				// 		time:"2020.10.01-2020.11.20",
				// 		tip:"今天你说啥都对2131",
				// 		isTrue:true,
				// 		tips:"LOVE"
				// 	},{
				// 		title:"公举抱券",
				// 		time:"2020.10.04-2020.11.10",
				// 		tip:"今天你是老大",
				// 		isTrue:true,
				// 		tips:"LIKE"
				// 	},{
				// 		title:"公举抱券",
				// 		time:"2020.10.04-2020.11.10",
				// 		tip:"今天你是说了算",
				// 		isTrue:false,
				// 		tips:"LIKE"
				// 	},{
				// 		title:"公举抱券",
				// 		time:"2020.10.04-2020.11.10",
				// 		tip:"想你了",
				// 		isTrue:true,
				// 		tips:"LIKE"
				// 	}
				// ]
				var cardList=[]
				uniCloud.callFunction({
					name:'gett1',
					data:{
						_id:uni.getStorageSync('_id')
					},
					success: (res) => {
						console.log("查询券结果：",res)
						// this.cardList=res.result.data
						console.log("查询券：",res.result.data.length)
						var i
						
						for(i in res.result.data){
							console.log("当前元素：",res.result.data[i])
							if(res.result.data[i].from_id==uni.getStorageSync('_id')){
								res.result.data[i].tips="送出"
							}
							else{
								res.result.data[i].tips="收到"
							}
							res.result.data[i].time=this.happenTimeFun(res.result.data[0].create_time)
							res.result.data[i].isBack=false
							cardList.push(res.result.data[i])
						}
						console.log("查询券结果2：",cardList)
					}
				})
				this.cardList=cardList
			}
		},
		methods:{
			happenTimeFun(num){//时间戳数据处理
				 //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				 // let date=Date.now()
				 let date = new Date(num)
				 console.log('1233: ',date)
				 console.log('123: ',Date.now())
				 let y = date.getFullYear();
				 let MM = date.getMonth() + 1;
				 MM = MM < 10 ? ('0' + MM) : MM;//月补0
				 let d = date.getDate();
				 d = d < 10 ? ('0' + d) : d;//天补0
				 let h = date.getHours();
				 h = h < 10 ? ('0' + h) : h;//小时补0
				 let m = date.getMinutes();
				 m = m < 10 ? ('0' + m) : m;//分钟补0
				 let s = date.getSeconds();
				 s = s < 10 ? ('0' + s) : s;//秒补0
				 console.log('现在时间为：',y + '-' + MM + '-' + d)
				 return y + '-' + MM + '-' + d; //年月日
				 //return y + '-' + MM + '-' + d + ' ' + h + ':' + m+ ':' + s; //年月日时分秒
			 },
			clickBack(index){
				this.cardList[index].isBack=!this.cardList[index].isBack
			},
			using(y,id,fid){
				if(y){
					uni.showToast({
						title:"券已经用过啦！",
						icon:"none"
					});
				}
				else if(fid==uni.getStorageSync('_id')){
					uni.showToast({
						title:"不能用自己送的券哦！",
						icon:"none"
					});
				}
				else{
					uni.showModal({
						title:"使用",
						content:"确定使用吗?再想想吧",
						success:(res)=>{
							console.log(res)
							uniCloud.callFunction({
								name:'updt',
								data:{
									_id:id
								},
								success(res) {
									setTimeout(function(){
										// uni.redirectTo({
									 //    url: '/pages/index/about'
										// });
										uni.redirectTo({
										    url: '/pages/index/card?data=isTrue'
										});
									},500)
								}
							})
						}
					});
					
				}
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