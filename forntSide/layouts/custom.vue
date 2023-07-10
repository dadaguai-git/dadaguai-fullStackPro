<template>
  <el-container>
    <el-header>
      <slot name="header"> Default header content </slot>
    </el-header>
    <el-main>
      <slot name="content"> Default content content </slot>
    </el-main>
    <el-footer>
      <slot name="footer"> Default footer content </slot>
    </el-footer>
  </el-container>
</template>

<style lang="scss" scoped>
  .el-container {
    height: 100%;
    .el-main {
      height: 100%;
    }
  }
</style>
