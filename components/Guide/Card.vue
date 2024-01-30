<script setup lang="ts" generic="T extends number">

defineProps<{
  step: T
}>()

</script>

<template>
  <DDCard :ui="{ base: 'cursor-pointer', ring: 'ring-2 ring-zinc-800 dark:ring-zinc-200', divide: 'divide-zinc-800 dark:divide-zinc-200', rounded: 'rounded-lg', background: 'bg-zinc-50/60 dark:bg-zinc-800/60' }">
    <template #header>
      <p class="text-3xl font-bold">
        {{ $t(`guide.${step}.title`) }}
      </p>
    </template>
    <p
      v-for="(desc, index) in $tm(`guide.${step}.description`)"
      :key="index"
      class="text-lg"
    >
      {{ $rt(desc) }}
    </p>
  </DDCard>
</template>
