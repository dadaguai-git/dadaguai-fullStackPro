<template>
  <nav class="bg-white px-6 py-4 shadow">
    <div
      class="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between"
    >
      <div class="flex justify-between items-center">
        <div>
          <a @click="handleJumpClick('/')" class="text-gray-800 text-xl font-bold md:text-2xl"
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
          <el-button @click="handleJumpClick('/creator')" >
            创作
          </el-button>
        </div>
        <el-button class="mr-4"> 注册 </el-button>
        <el-button class="mr-4" > 登录 </el-button>
      </div>
    </div>
  </nav>
</template>

<script setup>
  const router = useRouter();
  let toggle = ref(false);

  let handleToggle = (val) => {
    toggle.value = val;
  };
  
  let handleJumpClick = (path) => {
    router.push({ path: path });
  };
</script>
