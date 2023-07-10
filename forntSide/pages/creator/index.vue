<template>
  <div class="w-full rounded-lg h-28 mb-4 -mt-8 pl-5 flex bg-white">
    <el-avatar class="mt-4" :size="60" :src="circleUrl" />
    <div class="flex-col flex w-2/5 relative -top-5 mt-5 ml-10 justify-around">
      <span class="text-black text-start text-xl">满洲里有象</span>
      <div>
        <ul class="flex flex-row">
          <li class="basis-1/4">0 粉丝</li>
          <li class="basis-1/4">12 关注</li>
          <li class="basis-1/4">7 创作</li>
          <li class="basis-1/4">创作的12天</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="rounded-lg">
    <div class="bg-white">
      <div class="flex justify-between items-center border-b h-10">
        <div class="ml-4 text-lg">
          数据概览
          <el-tooltip
            class="box-item"
            effect="dark"
            content="每日中午12点左右更新昨日数据"
            placement="top-start"
          >
            <el-icon class="ml-1"><IconQuestion></IconQuestion></el-icon>
          </el-tooltip>
        </div>
        <div class="mr-4 text-sm cursor-pointer align-baseline text-[#86909c]">
          查看更多<el-icon class="mr-1 mt-1 text-xs"
            ><IconRightForward></IconRightForward
          ></el-icon>
        </div>
      </div>
      <div class="grid ml-5 mr-5 mt-5 mb-5 grid-cols-4">
        <div
          v-for="item in 8"
          class="bg-[#f7f8fa] mb-4 ml-2 mr-2 text-left tracking-widest flex flex-col w-[200]"
        >
          <div class="ml-4 pt-4 text-sm text-[#4e5969]">总粉丝数</div>
          <div class="ml-4 text-4xl font-bold text-[#1d2129]">0</div>
          <div class="ml-4 pb-4 text-xs text-[#4e5969]">较前日--</div>
        </div>
      </div>
    </div>
    <div class="mt-4 bg-white">
      <div
        class="flex justify-between items-center h-10 border-b text-lg text-[#1d2129] text-left"
      >
        <div class="ml-5">近期发布</div>
      </div>
      <CommonEmpty></CommonEmpty>
    </div>
  </div>
</template>

<script setup lang="ts">
  let circleUrl =
    "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
</script>
