<template>
  <div id="app">
    <h1 style="font-size: 50px">社区综合服务信息系统</h1>

    <el-row>
      <el-col :span="3">
        <el-menu background-color="#00318B" text-color="#FFFFFF" active-text-color="#FFFFFF" :default-active="activeIndex"  class="el-menu-demo" mode="vertical" @select="handleSelect" router>
<!--        <el-menu-item index="/dashboard"><span style="font-size: 23px">首页</span></el-menu-item>-->
          <el-menu-item index="/userList"><span style="font-size: 23px">账号管理</span></el-menu-item>

        <el-submenu index="2" >
          <template slot="title"><span style="font-size: 23px">便民服务</span></template>
          <el-menu-item index="financeList"><span style="font-size: 17px">财务信息管理</span></el-menu-item>
          <el-menu-item index="2-2"><span style="font-size: 17px">缴费信息管理</span></el-menu-item>
          <!--
          <el-menu-item index="2-3"><span style="font-size: 17px">气费查询</span></el-menu-item>
          <el-menu-item index="2-4"><span style="font-size: 17px">社保查询</span></el-menu-item>
          <el-menu-item index="2-5"><span style="font-size: 17px">住房公积金</span></el-menu-item>
          <el-menu-item index="2-6"><span style="font-size: 17px">机动车违章查询</span></el-menu-item>
          <el-menu-item index="2-7"><span style="font-size: 17px">地铁违章查询</span></el-menu-item>
          <el-menu-item index="2-8"><span style="font-size: 17px">地铁时刻</span></el-menu-item>
          <el-menu-item index="2-9"><span style="font-size: 17px">火车购票</span></el-menu-item>
          <el-menu-item index="2-10"><span style="font-size: 17px">公交查询</span></el-menu-item>
          -->
        </el-submenu>


        <el-submenu index="3">
          <template slot="title" style="font-size: large"><span style="font-size: 23px">交流反馈</span></template>
          <el-menu-item index="3-1"><span style="font-size: 17px">投诉反馈处理</span></el-menu-item>
          <el-menu-item index="3-2"><span style="font-size: 17px">事务申请处理</span></el-menu-item>
          <el-menu-item index="/messageList"><span style="font-size: 17px">留言管理</span></el-menu-item>
          <el-menu-item index="3-4"><span style="font-size: 17px">活动参与管理</span></el-menu-item>
        </el-submenu>

          <el-menu-item index="/articleList"><span style="font-size: 23px">文章管理</span></el-menu-item>
          <el-menu-item index="/writeArticle"><span style="font-size: 23px">撰写文章</span></el-menu-item>



        <!--
        <el-submenu index="5">
          <template slot="title"><span style="font-size: 23px">事务申请</span></template>
          <el-menu-item index="5-1"><span style="font-size: 17px">申请志愿者服务</span></el-menu-item>
          <el-menu-item index="5-2"><span style="font-size: 17px">组织社区文化体育活动</span></el-menu-item>
        </el-submenu>


        <el-submenu index="6">
          <template slot="title"><span style="font-size: 23px">交流互动</span></template>
          <el-menu-item index="6-1"><span style="font-size: 17px">网上调查</span></el-menu-item>
          <el-menu-item index="6-2"><span style="font-size: 17px">民意征集</span></el-menu-item>
        </el-submenu>

        <el-submenu index="7">
          <template slot="title"><span style="font-size: 23px">账户管理</span></template>
          <el-menu-item index="7-1"><span style="font-size: 17px">修改头像</span></el-menu-item>
          <el-menu-item index="7-2"><span style="font-size: 17px">修改密码</span></el-menu-item>
          <el-menu-item index="7-3"><span style="font-size: 17px">退出登录</span></el-menu-item>
        </el-submenu>


        <el-submenu index="8">
          <template slot="title"><span style="font-size: 23px">其他功能</span></template>
          <el-menu-item index="/writeArticle"><span style="font-size: 17px">撰写文章</span></el-menu-item>
          <el-submenu index="9">
            <template slot="title"><span style="font-size: 17px">列表</span></template>
            <el-menu-item index="/userList"><span style="font-size: 17px">用户列表</span></el-menu-item>
            <el-menu-item index="/categoryList"><span style="font-size: 17px">分类列表</span></el-menu-item>
            <el-menu-item index="/articleList"><span style="font-size: 17px">文章列表</span></el-menu-item>
            <el-menu-item index="/financeList"><span style="font-size: 17px">用户财务信息列表</span></el-menu-item>
          </el-submenu>
        </el-submenu>
        -->




      </el-menu>
      </el-col>
      <el-col :span="21">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
