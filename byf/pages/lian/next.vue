<template>
	<view>
		<view class="content-one" v-if="nextDate=='one'">
			<view class="one-title">
				<view>这一年里</view>
				<view>你一共送出了 {{p1}} 张甜蜜券</view>
				<view>一共收到了 {{p2}} 张甜蜜券</view>
				<view>山长水阔</view>
				<view>最后是你</view>
			</view>
			<view @click="nextDate='two'" class="one-next"></view>
		</view>
		<!-- two -->
		<view class="content-two" v-if="nextDate=='two'">
			<view class="two-title">
				<view class="title" v-if="find">
					<view>在{{date}}</view>
					<view>你收到了{{ticket}}券</view>
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
				<view class="title-yiqi">已在一起</view>
				<view class="title-date">
					<text>{{day}}</text>
					<text style="margin-left: 10rpx;">天</text>
				</view>
				<!-- <view class="title-brt">距离TA的生日还有：25 天</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				find:0,
				p1:1314,
				p2:520,
				day:521,
				nextDate:"one",
				date:'2020年5月20日',
				ticket:'说的对'
			};
		},
		onLoad(){
			this.begin1()
		},
		methods:{
			begin1(){
				uniCloud.callFunction({
					name:'getu',
					data:{
						_id:uni.getStorageSync('_id')
					},
				}).then((res)=>{
					var kk=res.result.data[0].create_time
					console.log('现在1： ',kk)
					this.day=this.formatDate(kk)
					console.log('现在2： ',this.day)
				})
				uniCloud.callFunction({
					name:'gett1',
					data:{
						_id:uni.getStorageSync('_id')
					},
				}).then((res)=>{
					var kk=res.result.affectedDocs
					console.log('券数目：',kk)
					this.p1=kk
				})
				uniCloud.callFunction({
					name:'gett1',
					data:{
						_id:uni.getStorageSync('lover_id')
					},
				}).then((res)=>{
					var kk=res.result.affectedDocs
					console.log('券数目：',kk)
					if(kk){
						this.find=1
						this.date=this.happenTimeFun(res.result.data[0].create_time)
						this.ticket=res.result.data[0].title
					}
					this.p2=kk
				})
			},
			formatDate(nowTimer){
				let formats = {
					'year': '几 年前',
					'month': '几 月前',
					'day': '几 天前',
					'hour': '几 小时前',
					'minute': '几 分钟前',
					'second': '几 秒前',
				};
				//获取当前时间戳
				let now = Date.now();
				// let seconds = Math.floor((now - parseInt(nowTimer)) / 1000);
				let seconds = Math.floor((now - nowTimer) / 1000);
				let minutes = Math.floor(seconds / 60);
				let hours = Math.floor(minutes / 60);
				let days = Math.floor(hours / 24);
				let months = Math.floor(days / 30);
				let years = Math.floor(months / 12);
				let oldType = '';
				let oldValue = 0;
				if (days > 0) {
					//几天前
					oldType = 'day';
					oldValue = days;
				}
				// if (years > 0) {
				// 	//几年前
				// 	oldType = 'year';
				// 	oldValue = years;
				// } else {
				// 	if (months > 0) {
				// 		//几个月前
				// 		oldType = 'month';
				// 		oldValue = months;
				// 	} else {
				// 		if (days > 0) {
				// 			//几天前
				// 			oldType = 'day';
				// 			oldValue = days;
				// 		} else {
				// 			if (hours > 0) {
				// 				//几小时前
				// 				oldType = 'hour';
				// 				oldValue = hours;
				// 			} else {
				// 				//这里  您可以处理一个  刚刚  比如时间小于30分钟
				// 				if (minutes > 0) {
				// 					//几分钟前   
				// 					oldType = 'minute';
				// 					oldValue = minutes;
				// 				} else {
				// 					//几秒前 
				// 					oldType = 'second';
				// 					oldValue = seconds === 0 ? (seconds = 1) : seconds;
				// 				}
				// 			}
				// 		}
				// 	}
				// }
				console.log('day2: ',days)
				// return formats[oldType].replace('几', oldValue);
				return days
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
			 }
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
		background-image:url('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-svbclng3di3bbd5e41/02e0ec90-3546-11eb-899d-733ae62bed2f.png');
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
