<template>
    <view>
        <!-- 微信登录，获取微信相关用户信息 -->
        <button type="primary" open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">获取用户信息</button>
		<button type="primary" @click="store">游客登录</button>
		<button type="primary" @click="findu">找</button>
	</view>
</template>

<script>
    export default {
        data() {
            return {}
        },
        onLoad() {
            // 执行查看授权选项
            // this.getSettingMes();
        },
        methods: {
			store(){
				try {
				    uni.setStorageSync('_id', "5fb63caf48eb4300019c1d55");
					console.log("success");
					uni.reLaunch({
					    url: '/pages/index/index'
					})
				} catch (e) {
				   console.log(e); // error
				}
			},
			findu(){
				try {
				    const value = uni.getStorageSync('_id');
				    if (value) {
				        console.log(value);
				    }
				} catch (e) {
				    // error
				}
			},
            // 查看已授权选项
            getSettingMes() {
				console.log("获取用户信息中")
                let _this = this;
                uni.getSetting({
                    success(res) {
                        if (res.authSetting['scope.userInfo']) {
                            // 用户信息已授权，获取用户信息
                            uni.getUserInfo({
                                success(res) {
                                    console.log(res);
                                },
                                fail() {
                                    console.log("获取用户信息失败");
                                }
                            })
                        } else if (!res.authSetting['scope.userInfo']) {
                            console.log("需要点击按钮手动授权")
                        }
                    },
                    fail() {
                        console.log("获取已授权选项失败")
                    }
                })
            },
            // 手动授权方法
            onGotUserInfo(e) {
                // 获取用户信息
				console.log("获取授权信息中。。。。")
                uni.getUserInfo({
                    // 获取信息成功
                    success(res) {
                        console.log(res);
                        // 成功后进行登录,获取code
                        uni.login({
                          success (res) {
                             console.log(res);
                            if (res.code) {
								console.log('登录成功！')
                            } else {
                              console.log('登录失败！' + res.errMsg)
                            }
                          }
                        })
                    },
                    fail() {
                        console.log("获取用户信息失败");
                    }
                })
            }
        }
    }
</script>