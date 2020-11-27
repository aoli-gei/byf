<template>
	<view style="padding-top: 60rpx;">
		<!-- 添加 -->
		<view class="card">
			<view class="card-item">
				<view class="item-add">
					<view class="time">
						<view class="time-title">券名称 : </view>
						<input class="time-start" placeholder="如公主抱券" v-model="name" />
					</view>
					<view class="add" @click="isSelectImg=!isSelectImg">
						<view v-if="!selectSrcImg" class="add-img" >
							<image mode="aspectFill" src="/static/addimg.svg"></image>
						</view>
						<view v-if="!selectSrcImg" class="img-title">上传图片</view>
						<image v-if="selectSrcImg" class="add-select" mode="aspectFit" :src="selectSrcImg"></image>
					</view>
					<view class="time">
						<view class="time-title">有效期:</view>
						<input class="time-start" placeholder="如2020.11.12" v-model="StartTime" />
						-
						<input class="time-start" placeholder="如2020.11.20" v-model="endTime" />
					</view>
				</view>
				<view class="item-right">
					<textarea v-model="textDescription" placeholder="请输入券说明..." class="right-top" />
					<view class="item-footer selects" @click="submit" >赠送</view>
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
		
		<view class="title">可以在背面记录此刻噢！</view>
		
		<!-- 背面 -->
		<view class="card">
			<view class="card-item">
				<view class="item-posone">
					<image mode="aspectFill" src="/static/love.png"></image>
					<view class="posone-title">LOVE</view>
				</view>
				<textarea placeholder="券的记录..." v-model="textContent" class="item-content" ></textarea>
			</view>
		</view>
		
		<!-- 表情包 -->
		<view class="biaoqin" v-show="isSelectImg">
			<scroll-view scroll-y="true">
				<view class="biaoqin-item">
					<view class="item-img" @click="selectImg(item)" v-for="(item,index) in picData" :key="index">
						<image mode="aspectFill" :src="item"></image>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import picData from "../pic.js"
	export default {
		data() {
			return {
				name:'',
				cardList:[],
				textDescription:"",
				StartTime:"",
				endTime:"",
				textContent:"",
				selectSrcImg:"",
				picData:picData,
				isSelectImg:false,
			};
		},
		onLoad() {
			
		},
		methods:{
			selectImg(item){
				this.selectSrcImg=item;
				this.isSelectImg=false;
			},
			submit(){
				uni.showModal({
					title:"赠送",
					content:"确定赠送给TA此券吗?",
					success:(res)=>{
						uni.showToast({
							title:"赠送中...",
							icon:"none",
							mask:true,
							duration: 2000
						});
						console.log("message: ",this.textDescription)
						console.log("detail: ",this.textContent)
						console.log("pic: ",this.selectSrcImg)
						console.log("name: ",this.name)
						if(this.name==''){
							uni.showToast({
								title:"赠送失败，请填写券名称",
								icon:"none",
							});
						}
						else{
							uniCloud.callFunction({
								name:'addt',
								data:{
									title:this.name,
									tip:this.textDescription,
									content:this.textContent,
									from_id:uni.getStorageSync('_id'),
									to_id:uni.getStorageSync('lover_id'),
									src:this.selectSrcImg,
									starttime:this.StartTime,
									endtime:this.endTime
								},
								success(res){
									uni.showToast({
										title:"赠送成功！",
										icon:"none",
										mask:true,
										success:(res)=>{
											setTimeout(function(){
												// uni.redirectTo({
											 //    url: '/pages/index/about'
												// });
												uni.reLaunch({
												    url: '/pages/diy/diy'
												});
											},1000)
										}
									});
								}
							})
						}
					}
				});
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
					border: 2rpx solid #C0C0C0;
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
			
			
			.item-add{
				width: 565rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				.add{
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					width: 426rpx;
					height: 258rpx;
					background-color: #fafafa;
					border: 2rpx solid #cccccc;
					.add-img{
						width: 100rpx;
						height: 100rpx;
						image{
							width: 100%;
							height: 100%;
						}
					}
					.add-title{
						font-size: 28rpx;
						color: #666;
						font-family: PingFangSC-regular;
						margin-top: 12rpx;
					}
					.add-select{
						width: 380rpx;
						height: 230rpx;
					}
				}
				.time{
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 20rpx;
					.time-title{
						font-size: 24rpx;
						color: #EA9518;
						line-height: 40rpx;
					}
					input{
						text-align: center;
						font-size: 24rpx;
						width: 164rpx;
						height: 40rpx;
						border: 2rpx solid #C0C0C0;
					}
				}
			}
		}
		.item-content{
			box-sizing: border-box;
			width: 470rpx;
			height: 280rpx;
			border: 2rpx solid #C0C0C0;
			border-radius: 10rpx;
			margin-left: 50rpx;
			padding: 10rpx;
			font-size: 34rpx;
			color: #333333;
		}
	}
	.title{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		font-size:36rpx ;
		color: #101010;
		height: 100rpx;
		margin-top: 40rpx;
		margin-bottom: 20rpx;
	}
	.biaoqin{
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;
		height: 530rpx;
		background-color: #eee;
		z-index: 999;
		scroll-view{
			height: 530rpx;
			width: 100vw;
			.biaoqin-item{
				display: flex;
				justify-content: space-between;
				padding: 20rpx;
				flex-wrap: wrap;
				.item-img{
					margin-top: 20rpx;
					width: 160rpx;
					height: 160rpx;
					background-color: #FFFFFF;
					border-radius: 10rpx;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>