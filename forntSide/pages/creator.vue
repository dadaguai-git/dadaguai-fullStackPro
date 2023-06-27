<template>
  <div class="container mx-auto flex mt-5 max-w-7xl h-full">
    <!-- 左侧内容栏 -->
    <LazyCreatorLeft></LazyCreatorLeft>
    <!-- 中间内容区域 -->
    <div class="w-3/5 px-4 py-8 mt-0 rounded-md">
      <div class="flex-1">
        <CreatorHomeAvatar></CreatorHomeAvatar>
        <div class="rounded-lg">
          <CreatorHomeShowData></CreatorHomeShowData>

          <div class="mt-4 bg-white">
            <div
              class="flex justify-between items-center h-10 border-b text-lg text-[#1d2129] text-left"
            >
              <div class="ml-5">近期发布</div>
            </div>
            <CommonEmpty></CommonEmpty>

          </div>
        </div>
      </div>
    </div>
    <!-- 右侧内容栏 -->
    <LazyCreatorRight></LazyCreatorRight>
  </div>
</template>
