<template>
  <div class="affix-container mx-auto flex mt-5 max-w-7xl relative">
    <!-- 左侧内容栏 -->
    <!-- <HomeSideNavigationLeft></HomeSideNavigationLeft> -->
    <el-affix :offset="101">
      <leftLayouts>
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
    </el-affix>

    <!-- 中间内容区域 -->
    <div class="w-3/5 px-4 py-8 bg-white mt-0 rounded-md h-full">
      <div class="bg-white flex-1">
        <h2 class="text-2xl font-bold mb-4">中间内容区域</h2>
        <p class="text-gray-800 leading-relaxed mb-2">
          <CommonDaCard
            :articleInfo="item"
            v-for="item in articleList.data.data"
          ></CommonDaCard>
        </p>
      </div>
    </div>

    <!-- 右侧内容栏 -->
    <rightLayouts></rightLayouts>
    <!-- <HomeSideNavigationRight></HomeSideNavigationRight> -->
  </div>
</template>

<script setup lang="ts">
  import { Response } from "@/interface";

  let articleList = reactive({} as Response);
  const { data: articleInfo } = await useFetch("api/article");
  articleList = articleInfo.value as Response;
</script>

<style lang="scss" scoped>
  .affix-container {
    height: 100%;
    position: relative;
    overflow: auto; /* 添加滚动条以支持内容溢出 */
  }
</style>
