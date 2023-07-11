<template>
  <div class="container mx-auto flex mt-5 max-w-7xl h-full">
    <!-- 左侧内容栏 -->
    <!-- <LazyCreatorLeft></LazyCreatorLeft> -->
    <leftLayouts>
      <el-button type="primary" size="large" plain class="w-4/5 mt-3 mb-3"
        >写文章</el-button
      >
      <el-menu
        default-active="home"
        style="border-right: 0px"
        class="el-menu-vertical-demo h-auto border-r-0 w-[200px]"
      >
        <el-menu-item index="home">
          <template #title>
            <span>首页</span>
          </template>
        </el-menu-item>
        <el-sub-menu index="contentManager">
          <template #title>
            <el-icon><IconArticle></IconArticle></el-icon>
            <span>内容管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="articleManager">文章管理</el-menu-item>
            <el-menu-item index="columnManager">专栏管理</el-menu-item>
            <el-menu-item index="commentManager">评论管理</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="dataCenter">
          <template #title>
            <el-icon><IconDatabaseOutlined></IconDatabaseOutlined></el-icon>
            <span>数据中心</span>
          </template>
          <el-menu-item index="contentData">内容数据</el-menu-item>
          <el-menu-item index="fanData">粉丝数据</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="createCenter">
          <span>创作中心</span>
        </el-menu-item>
        <el-menu-item index="helpCenter">
          <span>帮助中心</span>
        </el-menu-item>
      </el-menu>
    </leftLayouts>
    <!-- 中间内容区域 -->
    <div class="w-3/5 px-4 py-8 bg-white mt-0 rounded-md h-auto">
      <div class="flex-1">
        <NuxtPage></NuxtPage>
      </div>
    </div>
    <!-- 右侧内容栏 -->
    <rightLayouts></rightLayouts>
    <!-- <LazyCreatorRight></LazyCreatorRight> -->
  </div>
</template>
