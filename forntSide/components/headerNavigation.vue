<template>
  <!-- <nav class="bg-white w-full px-5 py-4 shadow">
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
        <!== 以此类推 ==>
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
  </nav> -->

  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="../../assets/logo.png"
              alt="Logo"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="../../assets/logo.png"
              alt="Logo"
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a
                @click="handleJumpClick('/')"
                class="text-gray-700 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                >首页</a
              >
              <a
                class="text-gray-700 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                >沸点</a
              >
              <a
                class="text-gray-700 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                >课程</a
              >
              <!-- More items... -->
            </div>
          </div>
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex items-center">
            <el-button @click="handleJumpClick('/creator')">创作</el-button>
            <button
              class="bg-white p-1 rounded-full text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black"
            >
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: bell -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158l-1 .877V11a6 6 0 10-12 0v4.035l-1-.877a2.032 2.032 0 01-.595 1.437L4 17h5m6 0a2 2 0 104 0"
                ></path>
              </svg>
            </button>
            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <!-- More items... -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const router = useRouter();
  let toggle = ref(false);

  let handleJumpClick = (path: string) => {
    router.push({ path: path });
  };
</script>
