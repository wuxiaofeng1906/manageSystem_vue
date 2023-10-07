<template>
  <div class="header_container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/manage' }">header</el-breadcrumb-item>
    </el-breadcrumb>

  </div>
</template>

<script>

</script>

<style lang="less">
@import '../style/layout';
.header_container{
  background-color: #EFF2F7;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 70px;
}
.avator{
  .wh(36px, 36px);
  border-radius: 50%;
  margin-right: 37px;
}
.el-dropdown-menu__item{
  text-align: center;
}
</style>
