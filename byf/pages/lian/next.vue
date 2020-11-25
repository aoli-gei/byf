<template>
	<view>
		<view class="content-one" v-if="nextDate=='one'">
			<view class="one-title">
				<view>这一年里</view>
				<view>你一共送出了 1314 张甜蜜券</view>
				<view>一共收到了 520 张甜蜜券</view>
				<view>山长水阔</view>
				<view>最后是你</view>
			</view>
			<view @click="nextDate='two'" class="one-next"></view>
		</view>
		<!-- two -->
		<view class="content-two" v-if="nextDate=='two'">
			<view class="two-title">
				<view class="title">
					<view>在2020年5月20日</view>
					<view>你收到了 说的对 券</view>
				</view>
				<view class="title">
					<view>你们留下了</view>
					<view>珍贵的回忆</view>
				</view>
				<view class="title">在我入职保安的那天，队长问我：“你知道你要保护谁吗？” 我嘴上说的是业主，心里想的却是你</view>
			</view>
			<view class="one-next" @click="nextDate='three'"></view>
		</view>
		<!-- three -->
		<view class="content-three" v-if="nextDate=='three'">
			<view class="three-title">
				<view class="title-img">
					<view>
						<image mode="aspectFit" src="/static/imgs.png"></image>
					</view>
				</view>
				<view class="title-footer">
					<view class="title-left">
						<view>
							最近的我们<br/>
							闹了一点点矛盾<br/>
							我知道<br/>
							我们都属于强势的人<br/>
							我也明白<br/>
							讲道理<br/>
							是最没有道理的事<br/>
							我会慢慢改正的<br/>
							以后你说的都对!<br/>
						</view>
						<view style="margin-top: 120rpx;">
							我们今天<br/>
							去吃你最爱的东北菜馆吧<br/>
							好吗？<br/>
						</view>
					</view>
					<view class="footer-right">
						对了<br/>
						给你买了<br/>
						蛋黄酥<br/>
						放你宿舍门口了<br/>
						记得拿！<br/>
					</view>
				</view>
			</view>
			<view class="one-next" @click="nextDate='four'"></view>
		</view>
		<!-- four -->
		<view class="content-four" v-if="nextDate=='four'">
			<view class="four-title">
				<view>一券一念</view>
				<view>难得一面</view>
				<view>世当珍惜</view>
			</view>
			<view class="four-next" @click="nextDate='time'">去找TA</view>
		</view>
		<!-- time -->
		<view class="content-time" v-if="nextDate=='time'">
			<view class="time-title">
				<view class="title-yiqi">在一起</view>
				<view class="title-date">
					<text>520</text>
					<text style="margin-left: 10rpx;">天</text>
				</view>
				<view class="title-brt">距离TA的生日还有：25 天</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nextDate:"one",
			};
		}
	}
</script>

<style lang="scss">
	.content-one{
		// http://47.114.75.140/doc/message/image/18b8b543-9ad7-11e8-aebe-1368d4ec24eb/1606023480453.jpg
		background-image:url('http://47.114.75.140/doc/message/image/18b8b543-9ad7-11e8-aebe-1368d4ec24eb/1606023527242.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 100vw;
		height: 100vh;
		position: relative;
		.one-title{
			box-sizing: border-box;
			width: 100vw;
			height: 50vh;
			padding: 40rpx;
			display: flex;
			justify-content: center;
			align-items: flex-end;
			flex-direction: column;
			view{
				width: 475rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 36rpx;
				color: #FCF9F9;
				font-family: PingFangSC-regular;
				line-height: 80rpx;
			}
		}
	}
	.one-next{
		position: absolute;
		top:85%;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 0;
		border-left: 48rpx solid transparent;
		border-right: 48rpx solid transparent;
		border-top: 90rpx solid #102CAC;
	}
	.content-two{
		box-sizing: border-box;
		background-image:url('http://47.114.75.140/doc/message/image/18b8b543-9ad7-11e8-aebe-1368d4ec24eb/1606025115583.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 100vw;
		height: 100vh;
		position: relative;
		.two-title{
			width: 100vw;
			display: flex;
			align-items: center;
			flex-direction: column;
			color: #f8f7f7;
			font-family: PingFangSC-regular;
			font-size: 36rpx;
			.title:nth-child(1){
				margin-top: 68rpx;
				width: 400rpx;
				line-height: 60rpx;
			}
			.title:nth-child(2){
				margin-top: 68rpx;
				width: 400rpx;
				line-height: 60rpx;
			}
			.title:nth-child(3){
				margin-top: 50rpx;
				width: 600rpx;
				line-height: 60rpx;
				text-indent: 2em;
			}
		}
	}
	.content-three{
		box-sizing: border-box;
		background-image:url('http://47.114.75.140/doc/message/image/18b8b543-9ad7-11e8-aebe-1368d4ec24eb/1606036456562.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 100vw;
		height: 100vh;
		position: relative;
		.three-title{
			width: 100vw;
			.title-img{
				height: 23vh;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				padding: 30rpx;
				padding-bottom: 0;
				view{
					width: 536rpx;
					height: 360rpx;
					border-radius: 10rpx;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
					}
				}
				
			}
			.title-footer{
				height: 73vh;
				display: flex;
				align-items: center;
				color: #FCFCFC;
				font-family: 方正准圆-undefined;
				.title-left{
					margin-left: 20rpx;
					font-size: 36rpx;
					height: 73vh;
				}
				.footer-right{
					font-size: 36rpx;
					margin-left: 20rpx;
				}
			}
		}
	}
	.content-four{
		box-sizing: border-box;
		background-image:url('http://47.114.75.140/doc/message/image/18b8b543-9ad7-11e8-aebe-1368d4ec24eb/1606037992917.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 100vw;
		height: 100vh;
		position: relative;
		display: flex;
		justify-content: flex-end;
		.four-title{
			width: 330rpx;
			font-size: 50rpx;
			color: #f8f7f7;
			margin-top: 56rpx;
			view{
				line-height: 100rpx;
			}
		}
		.four-next{
			position: absolute;
			bottom: 100rpx;
			left: 50%;
			transform: translateX(-50%);
			color: #f8f7f7;
			font-size: 50rpx;
		}
	}
	.content-time{
		box-sizing: border-box;
		background-image:url('http://47.114.75.140/doc/message/image/18b8b543-9ad7-11e8-aebe-1368d4ec24eb/1606038700810.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 100vw;
		height: 100vh;
		position: relative;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		.time-title{
			height: 470rpx;
			width: 100vw;
			display: flex;
			align-items: center;
			font-family: PingFangSC-regular;
			flex-direction: column;
			color: #101010;
			.title-yiqi{
				font-size: 50rpx;
				margin-top: 20rpx;
				line-height: 90rpx;
			}
			.title-date{
				display: flex;
				align-items: center;
				justify-content: center;
				text:nth-child(1){
					font-size: 172rpx;
				}
				text:nth-child(2){
					font-size: 36rpx;
				}
			}
			.title-brt{
				font-size: 40rpx;
				letter-spacing: 2rpx;
			}
		}
	}
</style>
