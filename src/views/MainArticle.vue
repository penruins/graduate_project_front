<template>
  <el-row>
    <el-col :span="20" :offset="2">

      <el-card>
        <h1>{{article.title}}</h1>
        <article v-html="content" style="text-align: left"></article>
      </el-card>

    </el-col>
  </el-row>
</template>

<script>
    import marked from 'marked'
    export default {
        name: "MainArticle",
        data() {
            return {
                article: {},
                content: ''

            };
        },
        created() {
            const _this = this
            axios.get('/api/api/v1/article/article/1385491165113085954').then(function(resp) {
                console.log(resp)
                _this.article = resp.data.data
                _this.content = marked(_this.article.content)
            })
        }
    };
</script>

<style scoped>
  @import "https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css";
  .el-card {
    margin-top: 15px;
    padding: 20px;
  }
</style>