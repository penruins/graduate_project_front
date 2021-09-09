<template>
  <div>
    用户名:<input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>
    <br><br>
    密码： <input type="password" v-model="loginForm.password" placeholder="请输入密码"/>
    <br><br>
    <button v-on:click="login">登录</button>
  </div>
</template>

<script>

    export default {
        name: 'Login',
        data () {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                responseResult: []
            }
        },
        methods: {
            login () {
                var _this = this
                console.log(this.$store.state)
                this.$axios
                    .post('/api/api/v1/user/login', {
                        username: this.loginForm.username,
                        password: this.loginForm.password
                    })
                    .then(successResponse => {
                        if (successResponse.data.data.isSuccess) {
                            _this.$store.commit('login', _this.loginForm)
                            alert('登录成功')
                            this.$router.push('/writeArticle')
                        }
                    })
                    .catch(failResponse => {
                    })
            }
        }
    }
</script>