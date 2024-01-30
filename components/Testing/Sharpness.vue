<script setup lang="ts">

const { idle } = useIdle(3 * 1000)

const fontSize = ref(14)
const reverseBgColor = ref(false)

</script>

<template>
  <div
    class="relative w-screen h-screen overflow-hidden"
    :style="`background-color: ${reverseBgColor ? '#000000' : '#FFFFFF'}; color: ${reverseBgColor ? '#FFFFFF' : '#000000'}`"
  >
    <span
      v-for="n in 100"
      :key="n"
      :style="`font-size: ${fontSize}px; line-height: ${fontSize}px`"
    >
      {{ $t('testing.sharpness.boxText') }}
    </span>
    <div
      v-if="!idle"
      class="fixed flex flex-col w-auto h-auto bottom-24 right-4 bg-zinc-100 border border-zinc-800 rounded-lg p-4 gap-4 opacity-70"
    >
      <p class="text-zinc-900">
        {{ $t('testing.sharpness.boxTitle') }}
      </p>
      <DDToggle
        v-model="reverseBgColor"
        size="lg"
        color="sky"
      />
      <DDTooltip :text="fontSize.toString()">
        <DDRange
          v-model="fontSize"
          color="sky"
          :min="14"
          :max="32"
        />
      </DDTooltip>
    </div>
  </div>
</template>
