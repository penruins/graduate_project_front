<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="font-weight: bold;font-size: 20px">文章列表</span>
            <!--<el-button style="float: right; padding: 3px 0" type="text">修改</el-button>-->
        </div>
            <el-timeline>
                <el-timeline-item v-for="article in articles" :timestamp="article.createTime" placement="top">
                    <el-card>
                        <el-row :gutter="24">
                            <el-col :span="16"><div>
                                {{article.category}}  <a href="/post">《{{article.title}}》</a><br><br>
                            </div></el-col>
                            <el-col :span="8">
                                <div style="text-align: right">
                                    {{article.author}}
                                </div>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
    </el-card>
</template>

<script>
    export default {
        name: 'ArticleList',
        data() {
            return {
                categories: [],
                articles: [
                    {
                        "category":"时事新闻",
                        "title":"《安徽省党政代表团赴浙江学习考察对接合作》",
                        "author":"合肥日报"
                    },
                    {
                        "category":"时事新闻",
                        "title":"《高标准推进安徽自贸试验区建设》",
                        "author":"合肥日报"
                    },
                    {
                        "category":"政务公开",
                        "title":"《合肥市人民政府办公室关于加快推进现代种业发展打造种业之都的实施意见》",
                        "author":"合肥市人民政府（政府办公室）"
                    },
                    {
                        "category":"学习园地",
                        "title":"《诵读经典学党史 不忘初心担使命》",
                        "author":"合肥日报"
                    },
                    {
                        "category":"时事新闻",
                        "title":"《安徽省党政代表团赴浙江学习考察对接合作》",
                        "author":"合肥日报"
                    },
                    {
                        "category":"时事新闻",
                        "title":"《高标准推进安徽自贸试验区建设》",
                        "author":"合肥日报"
                    },
                    {
                        "category":"政务公开",
                        "title":"《合肥市人民政府办公室关于加快推进现代种业发展打造种业之都的实施意见》",
                        "author":"合肥市人民政府（政府办公室）"
                    },
                    {
                        "category":"学习园地",
                        "title":"《诵读经典学党史 不忘初心担使命》",
                        "author":"合肥日报"
                    },
                    {
                        "category":"时事新闻",
                        "title":"《安徽省党政代表团赴浙江学习考察对接合作》",
                        "author":"合肥日报"
                    },
                    {
                        "category":"时事新闻",
                        "title":"《高标准推进安徽自贸试验区建设》",
                        "author":"合肥日报"
                    },
                    {
                        "category":"政务公开",
                        "title":"《合肥市人民政府办公室关于加快推进现代种业发展打造种业之都的实施意见》",
                        "author":"合肥市人民政府（政府办公室）"
                    },
                    {
                        "category":"学习园地",
                        "title":"《诵读经典学党史 不忘初心担使命》",
                        "author":"合肥日报"
                    },
                    {
                        "category":"时事新闻",
                        "title":"《安徽省党政代表团赴浙江学习考察对接合作》",
                        "author":"合肥日报"
                    },
                    {
                        "category":"时事新闻",
                        "title":"《高标准推进安徽自贸试验区建设》",
                        "author":"合肥日报"
                    },
                    {
                        "category":"政务公开",
                        "title":"《合肥市人民政府办公室关于加快推进现代种业发展打造种业之都的实施意见》",
                        "author":"合肥市人民政府（政府办公室）"
                    },
                    {
                        "category":"学习园地",
                        "title":"《诵读经典学党史 不忘初心担使命》",
                        "author":"合肥日报"
                    },
                    {
                        "category":"时事新闻",
                        "title":"《安徽省党政代表团赴浙江学习考察对接合作》",
                        "author":"合肥日报"
                    },
                    {
                        "category":"时事新闻",
                        "title":"《高标准推进安徽自贸试验区建设》",
                        "author":"合肥日报"
                    },
                    {
                        "category":"政务公开",
                        "title":"《合肥市人民政府办公室关于加快推进现代种业发展打造种业之都的实施意见》",
                        "author":"合肥市人民政府（政府办公室）"
                    },
                    {
                        "category":"学习园地",
                        "title":"《诵读经典学党史 不忘初心担使命》",
                        "author":"合肥日报"
                    },
                ]

            }
        },
        // created() {
        //     const _this = this
        //     axios.get('/api/api/v1/category/categories/1/100').then(function(resp) {
        //         console.log(resp)
        //         _this.categories = resp.data.data.records.name
        //     })
        //     console.log(this.categories)
        //
        //     axios.get('/api/api/v1/article/articles/1/100').then(function(resp) {
        //         console.log(resp)
        //         _this.articles = resp.data.data.records
        //     })
        //     console.log(this.articles)
        // }
    }
</script>

<style scoped>
    .box-card {
        margin: 0 auto;
        width: 988px;
        /*height: 1050px;*/
        text-align: left;
    }

    a:link {color: #000000;}      /* 未访问链接*/
    a:visited {color:  #000000;}  /* 已访问链接 */
    a:hover {color: #000000;}  /* 鼠标移动到链接上 */
    a:active {color: #000000;}  /* 鼠标点击时 */
    a{text-decoration:none}

</style>