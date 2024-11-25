<script setup lang="ts">
const config = useRuntimeConfig()

defineEmits([
  'move-to-full-screen',
])
</script>

<template>
  <div class="flex flex-col sm:flex-row items-end gap-2 sm:gap-4">
    <span class="text-sm text-zinc-300">
      {{ 'v'.concat(config.public.serviceVersion.replaceAll('"', '')) }}
    </span>
    <div class="flex-auto" />
    <AButton
      :button-text="$t('button.guide')"
      button-variant="soft"
      button-text-class="text-lg"
      @click:button="navigateTo('/guide')"
    />
    <AButton
      :button-text="$t('button.start')"
      button-color="blue"
      button-text-class="text-lg"
      @click:button="() => $emit('move-to-full-screen')"
    />
  </div>
</template>
