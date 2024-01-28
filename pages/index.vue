<script setup lang="ts">

const indexPage = ref<HTMLElement | null>(null)
const { isFullscreen, enter } = useFullscreen(indexPage)

const { defectivePixel, testBlack } = storeToRefs(useTestingStore())

const moveToFullScreen = () => {
  if (!isFullscreen.value) {
    enter()
  }
  navigateTo('/testing')
}

</script>

<template>
  <div
    ref="indexPage"
    class="w-screen min-h-screen flex justify-center items-center gap-8"
  >
    <DDCard :ui="{ ring: 'ring-4 ring-zinc-800 dark:ring-zinc-200', shadow: 'shadow-lg shadow-zinc-200/40', divide: 'divide-zinc-800 dark:divide-zinc-200', rounded: 'rounded-2xl', background: 'bg-zinc-50/60 dark:bg-zinc-800/60' }">
      <template #header>
        <AHeader />
      </template>
      <div class="flex flex-col gap-2">
        <p>
          {{ $t('index.subTitle') }}
        </p>
        <div class="flex flex-wrap">
          <MainCard
            class="w-full m-2"
            :test-item="defectivePixel"
            @update:test-item="(computedValue) => defectivePixel = computedValue"
          />
          <MainCard
            class="w-full m-2"
            :test-item="testBlack"
            @update:test-item="(computedValue) => testBlack = computedValue"
          />
        </div>
      </div>
      <MainDisableAll @update:disable-all="() => console.log('disable All!!')" />
      <template #footer>
        <MainFooter @move-to-full-screen="moveToFullScreen" />
      </template>
    </DDCard>
  </div>
</template>
