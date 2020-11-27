<template>
	<view style="padding-top: 20rpx;">
		<!-- 添加 -->
		<view class="card" @click="jump">
			<view class="card-item">
				<view class="item-add">
					<view class="add-img" >
						<image mode="aspectFill" src="/static/add.png"></image>
					</view>
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
				<!-- <view class="item-right"  v-if="item.isBack">
					<view class="item-footer selects">删除</view>
				</view> -->
				<!-- <view class="item-footer selects">使用</view> -->
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
		onPullDownRefresh(){
			uni.reLaunch({
				url:'/pages/diy/diy'
			})
		},
		onLoad() {
			// this.cardList=[
			// 	{
			// 		title:"举高高券",
			// 		src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/f87bafd0-2c0b-11eb-b997-9918a5dda011.jpg",
			// 		time:"2020.10.01-2020.11.20",
			// 		tip:"今天你说啥都对",
			// 		isTrue:false, //是否使用
			// 		tips:"LOVE",
			// 		content:"我的房间梵蒂冈丰东股份打算考教辅的讽德诵功风光大嫁个饭点击覆盖电视剧发",//背面的内容
			// 		isBack:false,//是否显示背面
			// 	},{
			// 		title:"公举抱券",
			// 		src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/fc779590-2c0b-11eb-899d-733ae62bed2f.gif",
			// 		time:"2020.10.04-2020.11.10",
			// 		tip:"今天你是老大",
			// 		isTrue:true,
			// 		tips:"LIKE",
			// 		content:"我的房间梵蒂冈丰东股份打算考教辅的讽德诵功风光大嫁个饭点击覆盖电视剧发",//背面的内容
			// 		isBack:false,//是否显示背面
			// 	},{
			// 		title:"公举抱券",
			// 		src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/fd2d7810-2c0b-11eb-97b7-0dc4655d6e68.gif",
			// 		time:"2020.10.04-2020.11.10",
			// 		tip:"今天你是说了算",
			// 		isTrue:true,
			// 		tips:"LIKE",
			// 		content:"我的房间梵蒂冈丰东股份打算考教辅的讽德诵功风光大嫁个饭点击覆盖电视剧发",//背面的内容
			// 		isBack:false,//是否显示背面
			// 	},{
			// 		title:"公举抱券",
			// 		src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/fa7fbd30-2c0b-11eb-97b7-0dc4655d6e68.jpg",
			// 		time:"2020.10.04-2020.11.10",
			// 		tip:"想你了",
			// 		isTrue:false,
			// 		tips:"LIKE",
			// 		content:"我的房间梵蒂冈丰东股份打算考教辅的讽德诵功风光大嫁个饭点击覆盖电视剧发",//背面的内容
			// 		isBack:false,//是否显示背面
			// 	}
			// ]
			this.begin1()
		},
		methods:{
			clickBack(index){
				this.cardList[index].isBack=!this.cardList[index].isBack
			},
			jump(){
				if(uni.getStorageSync('lover_id')){
					uni.navigateTo({
					    url: '/pages/diy/addcrad'
					});
				}
				else {
					uni.showModal({
						content: "请先绑定关系",
						showCancel: false
					})
				}
			},
			begin1(){
				var cardList=[]
				uniCloud.callFunction({
					name:'gett',
					data:{
						_id:uni.getStorageSync('_id')
					},
					// success(res) {
					// 	console.log("查询券结果：",res)
					// 	// this.cardList=res.result.data
					// 	console.log("查询券：",res.result.data.length)
					// 	var i=0
					// 	for(i in res.result.data){
					// 		console.log("当前元素：",i)
					// 		console.log("当前元素：",res.result.data[i])
					// 		this.cardList.push(res.result.data[i])
					// 	}
					// 	console.log("查询券结果2：")
					// 	console.log("查询券结果2：",this.cardList)
					// }
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
			},
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
										uni.reLaunch({
										    url: '/pages/diy/diy'
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
