<template>
  <div style="padding-top: 40px">
    <el-row :gutter="20">
      <el-col :span="1">
<!--        <el-card shadow="hover">-->
<!--          <div class="block">-->
<!--            <el-carousel trigger="click" height="300px">-->
<!--              <el-carousel-item v-for="item in pic" :key="item">-->
<!--                <el-image :src="item" fit="cover"></el-image>-->
<!--              </el-carousel-item>-->
<!--            </el-carousel>-->
<!--          </div>-->
<!--        </el-card>-->
<!--        <el-card>-->
<!--            <el-calendar v-model="value" >-->
<!--            </el-calendar>-->
<!--        </el-card>-->
      </el-col>
      <el-col :span="24">

        <h3>发布留言</h3>
          <div style="margin: 20px;"></div>
          <el-form label-width="80px">
            <el-form-item label="留言内容">
              <el-input v-model="userid" type="text"></el-input>
            </el-form-item>
            <el-button type="primary">发布</el-button>
            <el-button>重置</el-button>
          </el-form>
        <h3>留言版</h3>
        <el-timeline>
          <el-timeline-item size="20px" v-for="article in articles" :timestamp="article.createTime" placement="top">
            <el-card>
              <el-row :gutter="20">
                <el-col :span="16"><div>{{article.i1}}</div></el-col>
                <el-col :span="8"><div style="text-align: right">{{article.i2}} </div></el-col>
              </el-row>
            </el-card>
          </el-timeline-item>
        </el-timeline>
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
                    /*
                    require('../assets/1.png'),
                    require('../assets/2.png'),
                    require('../assets/3.png'),
                    require('../assets/4.png'),
                     */
                ],
                name: localStorage.getItem("ms_username"),
                categories: [],
                userid: '',
                articles: [
                    {
                        'i1':'目前在合肥集体供地当中6月18号肥西仅一块地还是商业用地，肥西现在都是严重的缺少土地供应跟新房市场，二手房市场的行情逐步上升，请问肥西今年预计供地多少亩居住用地，什么时候开始供应以缓解新房紧缺。',
                        'i2':'用户342553',
                    },
                    {
                        'i1':'本人在美好上院买了住宅一套 今年9月份小孩要上2年级 县教育局说9月份1年级开班 但我去了现场 学校脚手架尚未拆除 咨询项目部说 9月份肯定不行 所以想问下 学校9月份到底能顺利开学',
                        'i2':'用户343552',
                    },
                    {
                        'i1':'领导您好，我是在肥西花世界丹桂弯购买住房，小区大门位于北侧，面对土堆，且门口内部道路较窄，影响正常出入，小区门口规划的翡翠路南延段至杭埠河大道对小区出行至关重要，请问翡翠路南延段至杭埠河大道具体什么时候开始动工和完工，望领导回复，谢谢。',
                        'i2':'用户9887233',
                    },
                    {
                        'i1':'地点：合肥市经开区海恒社区海恒街停车楼 海恒社区海恒街停车楼前道路存在大量乱停车情况，早晚上下班高峰时期，非常拥堵。该停车楼前为双向车道，但由于路两旁全部被停上车辆，导致路面宽度仅能容纳一辆车通行，高峰时期双向来车无法会车，造成大量拥堵。此外，如此狭窄道路无法通过大型消防车，存在阻塞消防道路情况，对周边居民小区带来安全隐患。 海恒街停车楼如果能够投入使用能够缓解这样乱停车问题，但迟迟没有投入使用，请问该停车楼有具体投入运营的时间吗？对于现阶段存在的乱停车问题如何解决？',
                        'i2':'用户343552',
                    },
                ],
                tableData: [
                    {
                        'i1':'4',
                        'i2':'2021年5月1日',
                        'i3':'￥85',
                        'i4':'￥92',
                    },
                    {
                        'i1':'3',
                        'i2':'2021年4月1日',
                        'i3':'￥77',
                        'i4':'￥106',
                    },
                    {
                        'i1':'2',
                        'i2':'2021年3月1日',
                        'i3':'￥200',
                        'i4':'￥25',
                    },
                    {
                        'i1':'1',
                        'i2':'2021年2月1日',
                        'i3':'￥78',
                        'i4':'￥32',
                    },

                ]
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
            /*
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
             */
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