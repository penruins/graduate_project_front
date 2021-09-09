<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column fixed prop="userId" label="用户编号" width="150"></el-table-column>
            <el-table-column fixed prop="username" label="用户名" width="150"></el-table-column>
            <el-table-column fixed prop="waterBalance" label="水费余额" width="150"></el-table-column>
            <el-table-column fixed prop="electricityBalance" label="电费余额" width="150"></el-table-column>
            <el-table-column fixed prop="gasBalance" label="气费余额" width="150"></el-table-column>
            <el-table-column fixed prop="housingFundBalance" label="住房公积金余额" width="180"></el-table-column>
            <el-table-column
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
            update() {
                const _this = this
                axios.put('/api/api/v1/user/auth/user/'+this.id, this.selectedUser).then(function(resp) {
                    if (resp.statusText == 'OK') {
                        _this.showDialog = false
                        _this.$router.go(0)
                    }
                })
            },
            page(currentPage) {
                const _this = this
                axios.get('/api/api/v1/finance/finances/'+currentPage+'/10').then(function(resp) {
                    console.log(resp)
                    _this.tableData = resp.data.data.records
                    _this.total = resp.data.data.total
                    _this.size = resp.data.data.size
                })
            }

        },
        created() {
            // this.page(1)
        },
        data() {
            return {
                total: null,
                size: null,
                tableData: [
                    {
                        "userId":"34355223421",
                        "username":"penruins",
                        "waterBalance":"345",
                        "electricityBalance":"35",
                        "gasBalance":"55",
                        "housingFundBalance":"3425"
                    },
                    {
                        "userId":"55223421",
                        "username":"张恩博",
                        "waterBalance":"335",
                        "electricityBalance":"35",
                        "gasBalance":"33",
                        "housingFundBalance":"2225"
                    },
                    {
                        "userId":"34355223421",
                        "username":"梁斌",
                        "waterBalance":"45",
                        "electricityBalance":"35",
                        "gasBalance":"77",
                        "housingFundBalance":"8825"
                    },
                    {
                        "userId":"34355223421",
                        "username":"杨利峰",
                        "waterBalance":"325",
                        "electricityBalance":"35",
                        "gasBalance":"88",
                        "housingFundBalance":"4625"
                    },
                    {
                        "userId":"34355223421",
                        "username":"penruins",
                        "waterBalance":"345",
                        "electricityBalance":"35",
                        "gasBalance":"55",
                        "housingFundBalance":"3425"
                    },
                    {
                        "userId":"55223421",
                        "username":"张恩博",
                        "waterBalance":"335",
                        "electricityBalance":"35",
                        "gasBalance":"33",
                        "housingFundBalance":"2225"
                    },
                    {
                        "userId":"34355223421",
                        "username":"梁斌",
                        "waterBalance":"45",
                        "electricityBalance":"35",
                        "gasBalance":"77",
                        "housingFundBalance":"8825"
                    },
                    {
                        "userId":"34355223421",
                        "username":"杨利峰",
                        "waterBalance":"325",
                        "electricityBalance":"35",
                        "gasBalance":"88",
                        "housingFundBalance":"4625"
                    },
                    {
                        "userId":"34355223421",
                        "username":"penruins",
                        "waterBalance":"345",
                        "electricityBalance":"35",
                        "gasBalance":"55",
                        "housingFundBalance":"3425"
                    },
                    {
                        "userId":"55223421",
                        "username":"张恩博",
                        "waterBalance":"335",
                        "electricityBalance":"35",
                        "gasBalance":"33",
                        "housingFundBalance":"2225"
                    },
                    {
                        "userId":"34355223421",
                        "username":"梁斌",
                        "waterBalance":"45",
                        "electricityBalance":"35",
                        "gasBalance":"77",
                        "housingFundBalance":"8825"
                    },
                    {
                        "userId":"34355223421",
                        "username":"杨利峰",
                        "waterBalance":"325",
                        "electricityBalance":"35",
                        "gasBalance":"88",
                        "housingFundBalance":"4625"
                    },
                    {
                        "userId":"34355223421",
                        "username":"penruins",
                        "waterBalance":"345",
                        "electricityBalance":"35",
                        "gasBalance":"55",
                        "housingFundBalance":"3425"
                    },
                    {
                        "userId":"55223421",
                        "username":"张恩博",
                        "waterBalance":"335",
                        "electricityBalance":"35",
                        "gasBalance":"33",
                        "housingFundBalance":"2225"
                    },
                    {
                        "userId":"34355223421",
                        "username":"梁斌",
                        "waterBalance":"45",
                        "electricityBalance":"35",
                        "gasBalance":"77",
                        "housingFundBalance":"8825"
                    },
                    {
                        "userId":"34355223421",
                        "username":"杨利峰",
                        "waterBalance":"325",
                        "electricityBalance":"35",
                        "gasBalance":"88",
                        "housingFundBalance":"4625"
                    },
                ]
                // "userId" label="user
                // "username" label="us
                // "waterBalance" label
                // "electricityBalance"
                // "gasBalance" label="
                // "housingFundBalance"
            }
        }
    }
</script>
