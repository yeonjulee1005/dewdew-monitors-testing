<script setup lang="ts">
const { idle } = useIdle(3 * 1000)

const colorOption = ref([
  { label: '검정색', value: '000000' },
  { label: '빨강', value: 'FF0000' },
  { label: '초록', value: '00FF00' },
  { label: '파랑', value: '0000FF' },
  { label: '노랑', value: 'FFFF00' },
  { label: '시안', value: '00FFFF' },
  { label: '마젠타', value: 'FF00FF' },
])

const white = ref('FFFFFF')

const selectedColor = ref('000000')
const reverseColor = ref(false)
</script>

<template>
  <div
    class="relative w-screen h-screen"
    :style="`background: linear-gradient(to ${reverseColor ? 'left' : 'right'}, #${white} 0%, #${selectedColor} 100%)`"
  >
    <div
      v-if="!idle"
      class="fixed flex flex-col w-auto h-auto bottom-24 right-4 bg-zinc-100 border border-zinc-800 rounded-lg p-4 gap-4 opacity-70"
    >
      <p class="text-zinc-900">
        {{ $t('testing.gradient.boxTitle') }}
      </p>
      <DDToggle
        v-model="reverseColor"
        size="lg"
        color="sky"
      />
      <div class="flex flex-col gap-4">
        <DDRadio
          v-for="color in colorOption"
          :key="color.value"
          v-model="selectedColor"
          color="sky"
          v-bind="color"
          :ui="{ base: 'h-6 w-6', label: 'text-zinc-800 dark:text-zinc-800' }"
        />
      </div>
    </div>
  </div>
</template>
