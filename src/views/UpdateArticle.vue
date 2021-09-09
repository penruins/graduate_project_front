<template>
    <div class="app-container">
        <div class="title-box">
            <input type="text" class="title" v-model="article.title" placeholder="请输入标题..." />
        </div>

        <el-form label-position="left" label-width="80px">
            <el-form-item label="分类：">
                <el-select v-model="article.category" placeholder="请选择">
                    <el-option
                            v-for="(category,index) in categories"
                            :key="index"
                            :label="category.name"
                            :value="category.id"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="作者：">
                <el-input type="text" v-model="article.author"></el-input>
            </el-form-item>
        </el-form>



        <el-dialog :title="`发布文章：${article.title}`" :visible.sync="showDialog" width="30%">
            <el-form label-position="left" label-width="80px">
                <el-form-item label="分类：">
                    <el-select v-model="article.category" placeholder="请选择">
                        <el-option
                                v-for="(category,index) in categories"
                                :key="index"
                                :label="category.name"
                                :value="category.id"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="作者：">
                    <el-input type="text" v-model="article.author"></el-input>
                </el-form-item>
            </el-form>
        </el-dialog>
        <mavon-editor v-model="article.content" class="editor"></mavon-editor>
        <br>
        <br>
        <span slot="footer">
            <el-button @click="showDialog=false">取 消</el-button>
            <el-button type="primary" @click="handleSubmit">提交修改</el-button>
        </span>

    </div>
    
</template>

<script>
    export default {
        name: "WriteArticle",
        data() {
            return {
                showDialog: false,
                categories: [],
                inputTag: "",
                inputTagVisible: false,
                showAddCategoryInput: false,
                article: {
                    title: "",
                    content: "",
                    category: "",
                    author: "",
                }
            }
        },
        methods: {
            // 断言 target 为非空
            assertNotEmpty(target, msg) {
                if (!target) {
                    this.$message({
                        message: msg,
                        type: "warning",
                    });
                    return false;
                }
                return true;
            },
            // 打开文章信息填写框
            openDialog() {
                if (
                    this.assertNotEmpty(this.article.title, "请填写文章标题") &&
                    this.assertNotEmpty(this.article.content, "请填写文章内容")
                ) {
                    this.showDialog = true;
                }
            },
            handleSubmit() {
                const _this = this
                if (
                    this.assertNotEmpty(this.article.title, "请填写文章标题") &&
                    this.assertNotEmpty(this.article.content, "请填写文章内容") &&
                    this.assertNotEmpty(this.article.category, "请填写文章分类") &&
                    this.assertNotEmpty(this.article.author, "请填写文章作者")
                ) {
                    axios.post('/api/api/v1/article/auth/articles', this.article).then(function(resp){
                        if(resp.statusText == 'OK') {
                            // _this.$message('添加成功')
                            _this.showDialog = false
                            _this.$router.go(0)
                        }
                    })
                }
            }
        },
        created() {
            const _this = this
            axios.get('/api/api/v1/category/categories/1/100').then(function(resp) {
                console.log(resp)
                _this.categories = resp.data.data.records
            })
        }

    }
</script>

<style scoped>
    .editor {
        height: 650px;
    }
    .title-box {
        display: grid;
        grid-template-columns: 22fr 2fr;
    }
    .title {
        background: none;
        color: #303133;
        text-indent: 0px;
        outline: none;
        font-size: 16px;
        font-weight: bold;
        display: block;

        border: none;
        border-bottom: 1px solid #e0e0e0;
        border-radius: 0;
        line-height: 1;
        overflow: visible;
        margin-bottom: 15px;
        padding: 4px;
    }
    .title:focus {
        border-color: #409eff;
    }
</style>