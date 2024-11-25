<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <div class="w-full h-screen flex flex-col items-center justify-center gap-6">
    <UPageHero
      :title="error.statusCode.toString()"
      :description="error.message"
      align="center"
      :ui="{ description: 'text-7xl' }"
    />
    <p class="text-lg text-sky700 dark:text-sky-400">
      {{ $t('messages.error') }}
    </p>
    <AButton
      :button-text="$t('button.home')"
      use-leading
      button-padding
      icon-name="line-md:home-simple-filled"
      button-text-class="text-xl"
      @click:button="navigateTo('/')"
    />
  </div>
</template>
