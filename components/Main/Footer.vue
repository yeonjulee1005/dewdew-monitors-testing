<script setup lang="ts">

const config = useRuntimeConfig()

defineEmits([
  'move-to-full-screen'
])

</script>

<template>
  <div class="flex items-end gap-2">
    <span
      class="cursor-pointer text-sm text-zinc-300"
      @click="navigateTo('https', { external: true })"
    >
      {{ 'v'.concat(config.public.serviceVersion.replaceAll('"', '')) }}
    </span>
    <div class="flex-auto" />
    <AButton
      :button-text="$t('button.guide')"
      button-text-class="text-lg"
      @click:button="navigateTo('/guide')"
    />
    <AButton
      :button-text="$t('button.start')"
      button-text-class="text-lg"
      @click:button="() => $emit('move-to-full-screen')"
    />
  </div>
</template>
