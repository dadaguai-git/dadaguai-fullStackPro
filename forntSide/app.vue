<template>
  <NuxtLayout class="bg-gray-100 h-[1000px]">
    <template #header>
      <HeaderNavigation></HeaderNavigation>
    </template>
    <template #content>
      <NuxtPage class="h-full"></NuxtPage>
    </template>
    <template #footer></template>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style>
  @import "./node_modules/@devui-design/icons/icomoon/devui-icon.css";
  .full {
    height: 100%;
  }
  .__nuxt {
    height: 100%;
  }
</style>
