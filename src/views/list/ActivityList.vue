<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="font-weight: bold;font-size: 20px">活动列表</span>
            <!--<el-button style="float: right; padding: 3px 0" type="text">修改</el-button>-->
        </div>
        <div class="block">
            <el-timeline>
                <el-timeline-item v-for="article in articles" :timestamp="article.createTime" placement="top">
                    <el-card>
                        <el-row :gutter="24">
                            <el-col :span="16"><div>
                                <h3>{{article.title}}</h3>
                                {{article.content}} <br>
                                <h4>{{article.datee}}</h4>
                                <el-button type="success" @click="dialogVisible = true">参加活动</el-button>
                                <el-dialog
                                  title="参加活动"
                                  :visible.sync="dialogVisible"
                                  width="30%"
                                  :before-close="handleClose">
                                    <span>你确认要参加活动吗？</span>
                                    <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                                </span>
                                </el-dialog>
                            </div></el-col>
                            <el-col :span="8">
                                <div style="text-align: right">
                                </div>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: 'ArticleList',
        data() {
            return {
                dialogVisible: false,
                categories: [],
                articles: [
                    {
                        'title':'"社区邻里文化"普法活动',
                        'content':'活动现场，队员们通过发放宣传资料、现场提供法律咨询等方式，向群众讲解法律法规知识。对于群众感兴趣的城市管理热点问题，如占道经营、露天烧烤、噪音扰民、乱搭乱建等与社区居民生活息息相关的，队员们一一进行耐心、细致地解答，号召大家共同遵守市容管理法律法规，从自身做起、从小事做起，共同参与，共同维护，全力营造市民参与城市管理、社会关注城市管理的良好氛围。',
                        'datee':'报名结束时间：2021年6月5日',
                        'ac':'参加活动'
                    },
                    {
                        'title':'"我为群众办实事"之社区义诊活动',
                        'content':'为践行为人民服务的宗旨，不忘初心、牢记使命，深入推进 " 我为群众办实事 " 实践活动，关注社区居民身体健康，倡导健康生活方式，2021 年 5 月 20 日，在水湾社区党委的领导下，水湾社区党支部、前海蛇口自贸区医院党支部进行共驻共建活动，在水湾社区安心驿站开展 " 我为群众办实事之水湾社区义诊活动 "，让水湾居民在家门口就能享受便民服务。',
                        'datee':'报名结束时间：2021年7月3日',
                        'ac':'参加活动'
                    },
                    {
                        'title':'为群众办实事系列活动',
                        'content':'明通巷社区结合党史教育"我为群众办实事"工作要求，以党建引领社区治理，发挥党员干部先进性，用一系列行之有效的活动，引导党员干部争做文明行为的践行者、示范者，让大家切身感受 "党有号召、我有行动、民有所呼、我有所应"，用实际行动践行初心和使命。',
                        'datee':'报名结束时间：2021年8月2日',
                        'ac':'参加活动'
                    },
                    {
                        'title':'"近邻胜远亲 社区一家亲" 邻居节活动',
                        'content':'',
                        'datee':'报名结束时间：2021年9月5日',
                        'ac':'参加活动'
                    },
                ]

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
    }
</script>

<style scoped>
    .box-card {
        margin: 0 auto;
        width: 988px;
        height: 1050px;
        text-align: left;
    }
</style>