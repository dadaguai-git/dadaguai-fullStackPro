<template>
  <div class="container mx-auto flex mt-5 max-w-7xl h-full">
    <!-- 左侧内容栏 -->
    <NavigationSideNavigationLeft></NavigationSideNavigationLeft>
    <!-- 中间内容区域 -->
    <div class="w-3/5 px-4 py-8 bg-white mt-0 rounded-md h-auto">
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
    <NavigationSideNavigationRight></NavigationSideNavigationRight>
  </div>
</template>

<script setup lang="ts">
  import { Response } from "@/interface";

  let articleList = reactive({} as Response);
  const { data: articleInfo } = await useFetch("api/article");
  articleList = articleInfo.value as Response;
</script>
