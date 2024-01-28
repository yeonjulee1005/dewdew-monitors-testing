<template>
  <div class="flex items-center gap-3">
    <NuxtImg
      src="/dewdew_monitors_test.webp"
      :width="60"
      :height="60"
      loading="lazy"
    />
    <p class="text-2xl font-bold">
      {{ $t('index.title') }}
    </p>
  </div>
</template>
