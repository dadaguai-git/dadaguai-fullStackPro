<template>
  <div
    class="affix-container mx-auto flex mt-5 max-w-7xl  relative"
  >
    <!-- 左侧内容栏 -->
    <!-- <HomeSideNavigationLeft></HomeSideNavigationLeft> -->
    <el-affix :offset="101">
      <leftLayouts >
        <h1>11231223</h1>
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

  let scrollNum = ref<number>(101)

  onMounted(() => {
    window.addEventListener("scroll",function(e:Event){
      console.log(e)
      scrollNum.value = 102
      console.log(scrollNum.value)
    })
  })
  let handleWatchScroll = (e: Event) => {
    console.log(e);
  };
</script>

<style lang="scss" scoped>
  .affix-container {
    height: 100%;
    position: relative;
    overflow: auto; /* 添加滚动条以支持内容溢出 */
  }
</style>
