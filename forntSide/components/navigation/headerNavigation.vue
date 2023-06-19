<template>
  <!-- <div class="flex flex-col">
		<d-menu mode="horizontal">
			<d-menu-item key="home">
				<template #icon>
					<i class="icon-homepage"></i>
				</template>
				首页
			</d-menu-item>
		</d-menu>
	</div> -->
  <nav class="bg-white px-6 py-4 shadow">
    <div
      class="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between"
    >
      <div class="flex justify-between items-center">
        <div>
          <a href="#" class="text-gray-800 text-xl font-bold md:text-2xl"
            >掘金</a
          >
        </div>
      </div>

      <div class="md:flex flex-col md:flex-row md:-mx-4 hidden">
        <a
          href="#"
          class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
          >首页</a
        >
        <a
          href="#"
          class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
          >话题</a
        >
        <a
          href="#"
          class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
          >沙龙</a
        >
        <a
          href="#"
          class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
          >开源</a
        >
        <!-- 以此类推 -->
      </div>

      <div class="flex items-center justify-end">
        <div class="mr-8">
          <d-dropdown
            :visible="isOpen"
            :trigger="trigger"
            :position="position"
            align="start"
            @toggle="handleToggle"
          >
            <d-button-group size="lg">
              <d-button variant="solid"> 创作 </d-button>
              <d-button :icon="iconStyle" variant="solid" />
            </d-button-group>
            <template #menu>
              <!-- <h1>123</h1> -->
            </template>
          </d-dropdown>
        </div>
        <d-button class="mr-4" size="lg"> 注册 </d-button>
        <d-button class="mr-4" variant="solid" size="lg"> 登录 </d-button>
      </div>
    </div>
  </nav>
</template>

<script setup>
  let isOpen = ref(false);
  let toggle = ref(false);
  let trigger = ref("hover");
  let position = reactive(["bottom-start"]);
  let iconStyle = computed(() => {
    return toggle.value ? "icon-chevron-up" : "icon-chevron-down";
  });
  let handleToggle = (val) => {
    console.log(val);
    toggle.value = val;
  };
</script>
