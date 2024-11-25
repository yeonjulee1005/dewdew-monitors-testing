<script setup lang="ts">
const { idle } = useIdle(3 * 1000)
const { alpha } = useColorData()

const greyColor = ref('808080')
const alphaValue = computed(() => {
  return alpha.value.filter(item => item.value === uniformityStep.value)[0].alpha
})

const uniformityStep = ref(100)
</script>

<template>
  <div
    class="relative w-screen h-screen"
    :style="`background-color: #${greyColor + alphaValue}`"
  >
    <div
      v-if="!idle"
      class="fixed flex flex-col w-[240px] h-[100px] bottom-24 right-4 border rounded-lg p-4 gap-4"
    >
      <p>
        {{ $t('testing.uniformity.boxTitle') }}
      </p>
      <DDTooltip :text="uniformityStep.toString()">
        <DDRange
          v-model="uniformityStep"
          color="sky"
          :step="25"
        />
      </DDTooltip>
    </div>
  </div>
</template>
