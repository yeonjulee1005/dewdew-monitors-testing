<script setup lang="ts">
const red = defineModel('red', {
  type: Number,
  default: 0,
})

const green = defineModel('green', {
  type: Number,
  default: 0,
})

const blue = defineModel('blue', {
  type: Number,
  default: 0,
})

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <p class="text-zinc-800">
      {{ title }}
    </p>
    <DDTooltip :text="red.toString()">
      <DDRange
        v-model="red"
        color="rose"
        size="lg"
        :min="0"
        :max="255"
      />
    </DDTooltip>
    <DDTooltip :text="green.toString()">
      <DDRange
        v-model="green"
        color="emerald"
        size="lg"
        :min="0"
        :max="255"
      />
    </DDTooltip>
    <DDTooltip :text="blue.toString()">
      <DDRange
        v-model="blue"
        color="sky"
        size="lg"
        :min="0"
        :max="255"
      />
    </DDTooltip>
  </div>
</template>
