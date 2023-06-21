<template>
  <div v-if="articleInfo" class="bg-white p-6 rounded-lg shadow-lg mb-5">
    <div class="flex items-center justify-between mb-6">
      <div class="font-semibold text-lg text-gray-700">
        {{ articleInfo?.author }}
      </div>
      <div class="text-sm text-gray-500">{{ computedData }}</div>
    </div>
    <div class="mb-4">
      <span
        class="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2"
        >前端</span
      >
      <span
        class="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2"
        >JavaScript</span
      >
      <span
        class="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2"
        >微信小程序</span
      >
    </div>
    <h2 class="font-bold mb-2 text-xl text-gray-900">
      小程序实现 ChatGPT 聊天打字兼自动滚动效果
    </h2>
    <p class="text-gray-700 text-sm mb-4">
      一 前言 ChatGPT
      已经长时间大火，未来将会是AI的天下。人们需要更多地学习和掌握AI，而不是被AI所取代。
      目前市面上已经有很多类似 chatGPT 的智能应用，应用有可能是 web h5 应
    </p>
    <div class="flex items-center justify-between mt-4">
      <div>
        <i class="icon icon-domain mr-2"></i>
        <span>{{ articleInfo?.views }}</span>
        <i class="icon icon-like ml-2 mr-2"></i>
        <span>{{ articleInfo?.likes }}</span>
        <i class="icon icon-advisory ml-2 mr-2"></i>
        <span>{{ articleInfo?.comments }}</span>
      </div>
      <a href="#" class="text-blue-500 text-sm">Read more</a>
    </div>
  </div>
  <d-skeleton class="mb-5" v-else></d-skeleton>
</template>

<script setup lang="ts">
  import { ArticleInfo } from "~/interface/ArticleInfo";

  const props = defineProps({
    articleInfo: {
      type: Object as () => ArticleInfo,
    },
  });

  const formatDate = (dateTime: string): string => {
    const now = new Date();
    const date = new Date(dateTime);
    const diff = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diff / 1000);
    const diffMinutes = Math.floor(diff / (1000 * 60));
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);
    if (diffSeconds < 60) {
      return `${diffSeconds} 秒前`;
    } else if (diffMinutes < 60) {
      return `${diffMinutes} 分钟前`;
    } else if (diffHours < 24) {
      return `${diffHours} 小时前`;
    } else if (diffDays < 30) {
      return `${diffDays} 天前`;
    } else if (diffMonths < 12) {
      return `${diffMonths} 月前`;
    } else {
      return `${diffYears} 年前`;
    }
  };

  let computedData = computed(() => {
    return formatDate(props?.articleInfo?.publishDate ?? "");
  });
</script>
