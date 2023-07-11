<template>
  <div class="affix-container mx-auto flex mt-5 max-w-7xl relative">
    <!-- 左侧内容栏 -->
    <leftLayouts class="fixed h-[340px] mr-8">
      <div class="flex flex-col justify-center items-center">
        <el-menu
          @select="handleMenuSelect"
          default-active="1"
          style="border-right: 0px"
          class="el-menu-vertical-demo h-auto border-r-0 w-[200px]"
        >
          <el-menu-item index="1">
            <template #title>
              <el-icon> <Edit /></el-icon>
              <span>综合</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <template #title>
              <el-icon> <DataLine /></el-icon>
              <span>前端</span>
            </template>
          </el-menu-item>
          <el-menu-item index="3">
            <template #title>
              <el-icon><DataAnalysis /></el-icon>
              <span>后端</span>
            </template>
          </el-menu-item>
          <el-menu-item index="4">
            <template #title>
              <el-icon><Help /></el-icon>
              <span>开发工具</span>
            </template>
          </el-menu-item>
        </el-menu>
      </div>
    </leftLayouts>

    <!-- 中间内容区域 -->
    <div class="w-3/5 px-4 py-8 bg-white mt-0 rounded-md h-full ml-[246px]">
      <!-- Your main content... -->
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
  </div>
</template>

<script setup lang="ts">
  import { Response } from "@/interface";

  let articleList = reactive({} as Response);
  const { data: articleInfo } = await useFetch("api/article");
  articleList = articleInfo.value as Response;

  let handleMenuSelect = (index: number, indexPath: string[]) => {
    console.log(index);
  };
</script>

<style lang="scss" scoped>
  .affix-container {
    height: 100%;
    position: relative;
    overflow: auto; /* 添加滚动条以支持内容溢出 */
  }
</style>
