<template>
  <NuxtLayout class="bg-gray-100" name="custom">
    <template #header>
      <NavigationHeaderNavigation></NavigationHeaderNavigation>
    </template>
    <template #content>
      <NuxtPage></NuxtPage>
    </template>
    <template #footer></template>
  </NuxtLayout>
</template>

<!-- <template>
	<div class="font-sans bg-gray-100">
	  <!== 上方导航栏 ==>
	  <nav class="w-full bg-white z-50">
		导航栏内容
	  </nav>
	  <!== 中间内容区 ==>
	  <div class="container mx-auto flex mt-5 max-w-5xl">
		<!== 左侧内容栏 ==>
		<div class="w-1/5 sticky top-8 h-screen overflow-auto">
		  <div class="bg-white p-4">
			<h2 class="text-2xl font-bold mb-4">左侧内容</h2>
			<p class="text-gray-800 leading-relaxed mb-2">左侧内容区域的具体内容.</p>
		  </div>
		</div>
		<!== 中间内容区域 ==>
		<div class="w-3/5 px-4 py-8 h-[2000px]">
		  <div class="bg-white h-full">
			<h2 class="text-2xl font-bold mb-4">中间内容区域</h2>
			<p class="text-gray-800 leading-relaxed mb-2">中间内容区域的具体内容.</p>
		  </div>
		</div>
		<!== 右侧内容栏 ==>
		<div class="w-1/5 sticky top-8 h-screen overflow-auto">
		  <div class="bg-white p-4">
			<h2 class="text-2xl font-bold mb-4">右侧内容</h2>
			<p class="text-gray-800 leading-relaxed mb-2">右侧内容区域的具体内容.</p>
		  </div>
		</div>
	  </div>
	  <!== 下方内容区 ==>
	  <footer>
		底部内容
	  </footer>
	</div>
  </template> -->

<style>
  @import "./node_modules/@devui-design/icons/icomoon/devui-icon.css";
</style>
