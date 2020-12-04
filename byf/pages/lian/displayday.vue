<template>
	<view >
		<view class="content-time" v-if="nextDate=='one'">
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
				day:520,
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
