<template>
	<view>
		<view class="content">
			<view class="header">
				<view class="header-tip">
					<view class="tip-title">输入邀请码:</view>
					<input placeholder="请输入邀请码" v-model="inviteCode" />
				</view>
				<view class="header-true">
					<view class="true-title" type="default" @click="link">确定</view>
				</view>
			</view>
			<view class="add-tip">+</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inviteCode:'',
				number:''
			};
		},
		methods:{
			link(){
				try {
				    const value = uni.getStorageSync('_id');
				    if (value) {
				        console.log(value);
				    };
					uniCloud.callFunction({
						name:'getu',
						data:{
							_id:this.inviteCode
						}
					}).then((res)=>{
						console.log(res)
						this.number=res.result.affectedDocs
						console.log('人数：',this.number,res.result.data["0"].lover_id)
						if(this.number>0&&value!=this.inviteCode&&res.result.data['0'].lover_id==''){
							uniCloud.callFunction({
								name:'updateu',
								data:{
									_id:value,
									lover_id:this.inviteCode
								}
							})
							uniCloud.callFunction({
								name:'updateu',
								data:{
									_id:this.inviteCode,
									lover_id:value
								}
							}).then((res)=>{
								uni.hideLoading()
								uni.showModal({
									content: "绑定成功！",
									showCancel: false
								})
							})
						}
						else if(this.number==0||value==this.inviteCode){
							uni.showModal({
								content: "绑定失败，该邀请码无效",
								showCancel: false
							})
						}
						else {
							uni.showModal({
								content: "绑定失败，此人已绑定了关系",
								showCancel: false
							})
						}
					}).catch((err)=>{
						uni.hideLoading()
						uni.showModal({
							content: `绑定错误`,
							showCancel: false
						})
						console.error(err)
					})
				} catch (e) {
				    // error
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		height: 100vh;
		width: 100vw;
		background-image:url('http://47.114.75.140/doc/message/image/18b8b543-9ad7-11e8-aebe-1368d4ec24eb/1605771209571.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		.header{
			padding-top: 144rpx;
			.header-tip{
				padding: 0 30rpx;
				height: 88rpx;
				background-color: #FFFFFF;
				font-size: 34rpx;
				color: #000000;
				display: flex;
				align-items: center;
				input{
					flex: 1;
					height: 100%;
					line-height: 88rpx;
					margin-left: 20rpx;
				}
			}
			.header-true{
				width: 100vw;
				margin-top: 120rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.true-title{
					width: 400rpx;
					height: 122rpx;
					background-color: #fbe6ad;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #333333;
					font-size: 32rpx;
					border-radius: 4rpx;
					border: 2rpx solid #BBBBBB;
				}
			}
		}
		.add-tip{
			width: 110rpx;
			height: 110rpx;
			background-color: #007AFF;
			border-radius: 50%;
			color: #FFFFFF;
			font-size: 40rpx;
			overflow: hidden;
			display: flex;
			align-items: center;
			justify-content: center;
			position: fixed;
			right: 28rpx;
			bottom: 136rpx;
		}
	}
</style>
