<template>
    <div>

        <el-button @click="showDialog2=true">添加分类</el-button>
        <el-dialog title="添加用户" :visible.sync="showDialog2" width="40%">
            <el-form label-position="left" label-width="150px">
                <el-form-item label="Name: ">
                    <el-input type="text" v-model="newCategory.name"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer">
                <el-button @click="insertCancel">取 消</el-button>
                <el-button type="primary" @click="insertNewCategory">添加</el-button>
            </span>
        </el-dialog>
        <el-dialog title="修改用户信息" :visible.sync="showDialog" width="40%">
            <el-form label-position="left" label-width="150px">
                <el-form-item label="Name: ">
                    <el-input type="text" v-model="selectedCategory.name"></el-input>
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
            <el-table-column fixed prop="id" label="id" width="150"></el-table-column>
            <el-table-column fixed prop="name" label="name" width="170"></el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
                    <el-button @click="deleteCategory(scope.row)" type="text" size="small">删除</el-button>
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
            updateCancel() {
                this.showDialog = false;
                this.id = ''
                this.selectedCategory.name = ''
            },
            insertCancel() {
                this.showDialog2 = false;
                this.newCategory.name = ''
            },
            insertNewCategory() {
                const _this = this
                axios.post('/api/api/v1/category/auth/category', this.newCategory).then(function(resp){
                    if(resp.statusText == 'OK') {
                        // _this.$message('添加成功')
                        _this.showDialog2 = false
                        _this.$router.go(0)
                    }
                })
            },
            update() {
                const _this = this
                axios.put('/api/api/v1/category/auth/category/'+this.id, this.selectedCategory).then(function(resp) {
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
                this.selectedCategory.name = row.name
                this.showDialog = true
                //this.$router.push('/update')

            },
            deleteCategory(row) {
                const _this = this
                axios.delete('/api/api/v1/category/auth/category/' + row.id).then(function (resp) {
                    if (resp.statusText == 'OK') {
                        _this.$router.go(0)
                    }
                })


            },
            page(currentPage) {
                const _this = this
                axios.get('/api/api/v1/category/categories/'+currentPage+'/10').then(function(resp) {
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
                selectedCategory: {
                    name: ''
                },
                newCategory: {
                    name: ''
                },
                total: null,
                size: null,
                tableData: []
            }
        }
    }
</script>
