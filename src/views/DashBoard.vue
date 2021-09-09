<template>
  <div style="padding-top: 40px">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover">
          <div class="block">
            <el-carousel trigger="click" height="300px">
              <el-carousel-item v-for="item in pic" :key="item">
                <el-image :src="item" fit="cover"></el-image>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-card>
        <el-card>
            <el-calendar v-model="value" >
            </el-calendar>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card shadow="hover">
          <el-timeline>
            <el-timeline-item size="20px" v-for="article in articles" :timestamp="article.createTime" placement="top">
              <el-card>
                <el-row :gutter="20">
                  <el-col :span="16"><div>{{article.category}}  《{{article.title}}》</div></el-col>
                  <el-col :span="8"><div style="text-align: right">{{article.author}} </div></el-col>
                </el-row>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    // import Schart from "vue-schart";
    export default {
        name: "dashboard",
        data() {
            return {

                pic: [
                    require('../assets/1.png'),
                    require('../assets/2.png'),
                    require('../assets/3.png'),
                    require('../assets/4.png'),
                ],
                name: localStorage.getItem("ms_username"),
                categories: [],
                articles: []
            };
        },
        components: {
            // Schart
        },
        computed: {
            role() {
                return this.name === "admin" ? "超级管理员" : "普通用户";
            }
        },
        methods: {
            changeDate() {
                const now = new Date().getTime();
                this.data.forEach((item, index) => {
                    const date = new Date(now - (6 - index) * 86400000);
                    item.name = `${date.getFullYear()}/${date.getMonth() +
                    1}/${date.getDate()}`;
                });
            }
        },
        created() {
            const _this = this
            axios.get('/api/api/v1/category/categories/1/100').then(function(resp) {
                console.log(resp)
                _this.categories = resp.data.data.records.name
            })
            console.log(this.categories)

            axios.get('/api/api/v1/article/articles/1/100').then(function(resp) {
                console.log(resp)
                _this.articles = resp.data.data.records
            })
            console.log(this.articles)
        }
    };
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .grid-content {
    display: flex;
    align-items: center;
    height: 100px;
  }
  .grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
  }
  .grid-num {
    font-size: 30px;
    font-weight: bold;
  }
  .grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
  }
  .grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
  }
  .grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
  }
  .grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
  }
  .grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
  }
  .grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
  }
  .grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
  }
  .user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
  }
  .user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  .user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
  }
  .user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
  }
  .user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
  }
  .user-info-list span {
    margin-left: 70px;
  }
  .mgb20 {
    margin-bottom: 20px;
  }
  .todo-item {
    font-size: 14px;
  }
  .todo-item-del {
    text-decoration: line-through;
    color: #999;
  }
  .schart {
    width: 100%;
    height: 300px;
  }
</style>