<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="username" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="id2" prop="id2">
        <el-input v-model="ruleForm.id2"></el-input>
      </el-form-item>
      <el-form-item label="telephone" prop="telephone">
        <el-input v-model="ruleForm.telephone"></el-input>
      </el-form-item>
      <el-form-item label="address" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>


</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          username: '',
          password: '',
          id2: '',
          telephone: '',
          address: ''
        },
        rules: {
          username: [
            { required: true, message: '用户名称不能为空', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      test() {
        console.log(this.ruleForm)
      },
      submitForm(formName) {
        const _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post('/api/api/v1/user/auth/users', this.ruleForm).then(function(resp){
              if(resp.statusText == 'OK') {
                // _this.$message('添加成功')
                this.showDialog = false
                _this.$router.push('/userList')
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>