<script setup lang="ts">

const { idle } = useIdle(3 * 1000)

const innerRed = ref(0)
const innerGreen = ref(0)
const innerBlue = ref(0)

const outerRed = ref(255)
const outerGreen = ref(255)
const outerBlue = ref(255)

</script>

<template>
  <div
    class="relative w-screen h-screen flex justify-center items-center"
    :style="`background-color: rgb(${outerRed}, ${outerGreen}, ${outerBlue})`"
  >
    <div
      class="w-4/5 h-1/3 sm:w-2/5 sm:h-2/5"
      :style="`background-color: rgb(${innerRed}, ${innerGreen}, ${innerBlue})`"
    />
    <div
      v-if="!idle"
      class="fixed flex flex-col w-auto h-auto bottom-24 right-4 bg-zinc-100 border border-zinc-800 rounded-lg p-4 gap-4 opacity-70"
    >
      <TestingBoxColorDistance
        v-model:red="innerRed"
        v-model:green="innerGreen"
        v-model:blue="innerBlue"
        :title="$t('testing.colorDistance.boxInner')"
      />
      <DDDivider />
      <TestingBoxColorDistance
        v-model:red="outerRed"
        v-model:green="outerGreen"
        v-model:blue="outerBlue"
        :title="$t('testing.colorDistance.boxOuter')"
      />
    </div>
  </div>
</template>
