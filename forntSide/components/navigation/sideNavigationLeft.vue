<template>
  <div class="w-0.5/5 sticky top-8 mr-7 h-full rounded-md overflow-auto">
    <div class="bg-white p-4 flex-1">
      <h2 class="text-2xl font-bold mb-4">左侧内容栏</h2>
      <d-menu mode="vertical" :default-select-keys="['item1']" width="140px">
        <d-menu-item key="item1">
          <template #icon>
            <i class="icon icon-hot"></i>
          </template>
          <span>综合</span>
        </d-menu-item>
        <d-menu-item key="item2">
          <template #icon>
            <i class="icon icon-layout"></i>
          </template>
          <span>前端</span>
        </d-menu-item>
        <d-menu-item key="item3">
          <template #icon>
            <i class="icon icon-op-task"></i>
          </template>
          <span>后端</span>
        </d-menu-item>
        <d-menu-item key="item3">
          <template #icon>
            <i class="icon icon-op-task"></i>
          </template>
          <span>开发工具</span>
        </d-menu-item>
      </d-menu>
    </div>
  </div>
</template>
