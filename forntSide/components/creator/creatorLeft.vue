<template>
  <div class="w-0.5/5 sticky top-8 mr-7 h-full rounded-md overflow-auto">
    <div class="bg-white p-4 flex-1">
      <el-button type="primary" size="large" plain class="w-full mt-3 mb-3"
        >写文章</el-button
      >
      <d-menu :default-select-keys="['item1']" class="mr-3" width="256px">
        <d-sub-menu title="内容管理" key="contentManager">
          <template #icon>
            <i class="icon-infomation"></i>
          </template>
          <d-menu-item class="bg-white" key="articleManager">
            <span>文章管理</span>
          </d-menu-item>
          <d-menu-item key="columnManager">
            <span>专栏管理</span>
          </d-menu-item>
          <d-menu-item key="commentManager">
            <span>评论管理</span>
          </d-menu-item>
        </d-sub-menu>
        <d-sub-menu title="数据中心" key="dataCenter">
          <template #icon>
            <i class="icon-setting"></i>
          </template>
          <d-menu-item key="submenu-item-2">
            <span>submenu-item-2</span>
          </d-menu-item>
        </d-sub-menu>
        <d-sub-menu title="创作中心" key="authoringCenter">
          <template #icon>
            <i class="icon-setting"></i>
          </template>
          <d-menu-item key="submenu-item-2">
            <span>submenu-item-2</span>
          </d-menu-item>
        </d-sub-menu>
        <d-sub-menu title="帮助中心" key="helpCenter">
          <template #icon>
            <i class="icon-setting"></i>
          </template>
          <d-menu-item key="submenu-item-2">
            <span>submenu-item-2</span>
          </d-menu-item>
        </d-sub-menu>
      </d-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  ::v-deep .devui-menu-vertical ul.devui-submenu .devui-menu-item {
    background: #fff !important;
  }

  ::v-deep .devui-menu-vertical ul.devui-submenu .devui-menu-item:active {
    color: #1e80ff !important;
  }

  //   .d-sub-menu {
  //   background-color: transparent !important; /* or any color you want */
  // }
</style>
