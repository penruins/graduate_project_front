<template>
  <div>

<!--    <el-button @click="showDialog2=true">添加用户</el-button>-->
    <el-divider></el-divider>
    <h2>账户管理</h2>
    <el-dialog title="添加用户" :visible.sync="showDialog2" width="40%">
      <el-form label-position="left" label-width="150px">
        <el-form-item label="用户名: ">
          <el-input type="text" v-model="newUser.username" ></el-input>
        </el-form-item>
        <el-form-item label="密码: ">
          <el-input type="text" v-model="newUser.password"></el-input>
        </el-form-item>
        <el-form-item label="身份证号码: ">
          <el-input type="text" v-model="newUser.id2"></el-input>
        </el-form-item>
        <el-form-item label="电话号码: ">
          <el-input type="text" v-model="newUser.telephone"></el-input>
        </el-form-item>
        <el-form-item label="地址: ">
          <el-input type="text" v-model="newUser.address"></el-input>
        </el-form-item>
      </el-form>
      comprehensive community service information system
      <span slot="footer">
                <el-button @click="insertCancel">取 消</el-button>
                <el-button type="primary" @click="insertNewUser">添加</el-button>
            </span>
    </el-dialog>
    <el-dialog title="修改用户信息" :visible.sync="showDialog" width="40%">
      <el-form label-position="left" label-width="150px">
        <el-form-item label="用户名: ">
          <el-input type="text" v-model="selectedUser.username"></el-input>
        </el-form-item>
        <el-form-item label="密码: ">
          <el-input type="text" v-model="selectedUser.password"></el-input>
        </el-form-item>
        <el-form-item label="身份证号码: ">
          <el-input type="text" v-model="selectedUser.id2"></el-input>
        </el-form-item>
        <el-form-item label="电话号码: ">
          <el-input type="text" v-model="selectedUser.telephone"></el-input>
        </el-form-item>
        <el-form-item label="地址: ">
          <el-input type="text" v-model="selectedUser.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
                <el-button @click="updateCancel">取 消</el-button>
                <el-button type="primary" @click="update">修 改</el-button>
            </span>
    </el-dialog>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed prop="id" label="用户id" width="220">
      </el-table-column>
      <el-table-column
        fixed prop="id2" label="身份证号码" width="170">
      </el-table-column>
      <el-table-column
        fixed prop="isAdministrator" label="是否为管理员" width="150">
      </el-table-column>
      <el-table-column
        fixed prop="username" label="用户名" width="100">
      </el-table-column>
      <el-table-column
        fixed prop="password" label="密码" width="150">
      </el-table-column>
      <el-table-column
        fixed prop="balance" label="余额" width="150">
      </el-table-column>
      <el-table-column
        fixed prop="telephone" label="电话号码" width="120">
      </el-table-column>
      <el-table-column
        fixed prop="address" label="地址" width="220">
      </el-table-column>
      <el-table-column
        fixed prop="createTime" label="创建时间" width="150">
      </el-table-column>
      <el-table-column fixed prop="updateTime" label="修改时间" width="150">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button
            @click="edit(scope.row)" type="primary" size="small">
            修改
          </el-button>
          <el-button
            @click="deleteUser(scope.row)" type="danger" size="small">
            删除
          </el-button><br>
<!--          <el-button-->
<!--            @click="insertWaterTable(scope.row)" type="text" size="small">-->
<!--            添加水费记录-->
<!--          </el-button><br>-->
<!--          <el-button-->
<!--            @click="insertElectricityTable(scope.row)" type="text" size="small">-->
<!--            添加电费记录-->
<!--          </el-button><br>-->
<!--          <el-button-->
<!--            @click="insertGasTable(scope.row)" type="text" size="small">-->
<!--            添加气费记录-->
<!--          </el-button><br>-->
<!--          <el-button-->
<!--            @click="insertHousingFundTable(scope.row)" type="text" size="small">-->
<!--            添加住房公积金记录-->
<!--          </el-button><br>-->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="size"
      :total="total"
      @current-change="page">
    </el-pagination>
  </div>
</template>

<script>
    export default {
        methods: {
            insertWaterTable(row) {
                const _this = this
                axios.post('/api/api/v1/water/auth/water/'+row.id,)
                    .then(function(resp) {
                    if (resp.statusText == 'OK') {
                        alert('水费表添加成功')
                    }
                })

            },

            insertElectricityTable(row) {
                const _this = this
                axios.post('/api/api/v1/electricity/auth/electricity/'+row.id,)
                    .then(function(resp) {
                        if (resp.statusText == 'OK') {
                            alert('电费表添加成功')
                        }
                    })
            },
            insertGasTable(row) {
                const _this = this
                axios.post('/api/api/v1/gas/auth/gas/'+row.id,)
                    .then(function(resp) {
                        if (resp.statusText == 'OK') {
                            alert('气费表添加成功')
                        }
                    })
            },
            insertHousingFundTable(row) {
                const _this = this
                axios.post('/api/api/v1/housingfund/auth/housingfund/'+row.id,)
                    .then(function(resp) {
                        if (resp.statusText == 'OK') {
                            alert('住房公积金表添加成功')
                        }
                    })
            },
            updateCancel() {
                this.showDialog = false;
                this.id = ''
                this.selectedUser.username = ''
                this.selectedUser.password = ''
                this.selectedUser.id2 = ''
                this.selectedUser.telephone = ''
                this.selectedUser.address = ''
            },
            insertCancel() {
                this.showDialog2 = false;
                this.newUser.username = ''
                this.newUser.password = ''
                this.newUser.id2 = ''
                this.newUser.telephone = ''
                this.newUser.address = ''
            },
            insertNewUser() {
                const _this = this
                axios.post('/api/api/v1/user/auth/users', this.newUser).then(function(resp){
                    if(resp.statusText == 'OK') {
                        // _this.$message('添加成功')
                        _this.showDialog2 = false
                        _this.$router.go(0)
                    }
                })
            },
            update() {
                const _this = this
                axios.put('/api/api/v1/user/auth/user/'+this.id,
                    this.selectedUser).then(function(resp) {
                    if (resp.statusText == 'OK') {
                        // _this.$message('添加成功')
                        _this.showDialog = false
                        _this.$router.go(0)
                    }
                })
            },
            edit(row) {
                console.log(row)
                this.id = row.id
                this.selectedUser.username = row.username
                this.selectedUser.password = row.password
                this.selectedUser.id2 = row.id2
                this.selectedUser.telephone = row.telephone
                this.selectedUser.address = row.address
                this.showDialog = true
                //this.$router.push('/update')

            },
            deleteUser(row) {
                const _this = this
                axios.delete('/api/api/v1/user/auth/user/' + row.id).then(function(resp) {
                    if (resp.statusText == 'OK') {
                        // _this.$message('添加成功')
                        _this.$router.go(0)
                    }
                })
            },
            page(currentPage) {
                const _this = this
                axios.get('/api/api/v1/user/users/'+currentPage+'/10').then(function(resp) {
                    console.log(resp)
                    _this.tableData = resp.data.data.records
                    _this.total = resp.data.data.total
                    _this.size = resp.data.data.size
                })
            }

        },
        created() {
            this.page(1)
            /*
            const _this = this
            axios.get('/api/api/v1/user/users/1/10').then(function(resp) {
                console.log(resp)
                _this.tableData = resp.data.data.records
                _this.total = resp.data.total
                _this.size = resp.data.data.size
            })
             */
        },
        data() {
            return {
                showDialog: false,
                showDialog2: false,
                id: '',
                selectedUser: {
                    address: '',
                    id2: '',
                    password: '',
                    telephone: '',
                    username: ''
                },
                newUser: {
                    address: '',
                    id2: '',
                    password: '',
                    telephone: '',
                    username: ''
                },
                total: null,
                size: null,
                tableData: []
            }
        }
    }
</script>
