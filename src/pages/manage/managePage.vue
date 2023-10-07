<template>
  <div style="margin-left: -5px;margin-top: -10px">
    <el-container>
      <el-container>
        <el-aside width="200px">
          <el-menu
              :default-active="defaultActive"
              background-color="#324057"
              text-color="#fff"
              router
              :style="{height:menuHeight,'border-right-width': 0,width:300}"
          >
            <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-document"></i>信息管理</template>
              <el-menu-item index="info">个人信息</el-menu-item>
              <el-menu-item index="photos">我的照片</el-menu-item>
            </el-submenu>

          </el-menu>
        </el-aside>
        <el-container>
          <el-header>
            <headTop></headTop>
          </el-header>
          <el-main>
            <keep-alive>
              <!--  界面展示框 -->
              <router-view></router-view>
            </keep-alive>
          </el-main>
        </el-container>
      </el-container>
      <el-footer height="50px" style="background-color: #3190e8;">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>


</template>

<script>
import headTop from "@/components/header";
import Footer from "@/components/Footer";
//
import "@/style/myElementUi.less";

export default {
  data() {
    return {
      menuHeight: (window.innerHeight - 60) + "px"
    }
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '');
    },
  },
  components: {
    headTop,
    Footer
  },

  mounted() {
    window.onresize = () => {
      return this.menuHeight = (window.innerHeight - 60) + "px";
    }
  },
  beforeDestroy() {

  }
}


</script>


<style lang="less" scoped>
@import "../../style/layout";

.manage_page {

}


</style>
