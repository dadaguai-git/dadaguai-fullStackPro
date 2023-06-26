<template>
  <div class="w-full rounded-lg h-28  mb-4 -mt-8  pl-5 flex bg-white">
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
</template>

<script setup lang="ts">
  let circleUrl =
    "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
</script>
