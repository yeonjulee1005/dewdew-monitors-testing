<script setup lang="ts">
import type { TestingOption } from '~/types/index'

const { t } = useLocale()
const { idle } = useIdle(3 * 1000)

const testingPage = ref<HTMLElement | null>(null)
const { isFullscreen, enter, toggle } = useFullscreen(testingPage)
const { isApp } = useAppCheck()

const { testLists } = storeToRefs(useTestingStore())

useHead({
  title: t('pageTitle.testing')
})

definePageMeta({
  layout: 'testing'
})

const currentTestIndex = ref(0)
const selectedTestCount = ref(testLists.value.filter(item => item.value).length - 1)

const prevTest = ref<TestingOption>()
const currentTest = ref<TestingOption>(testLists.value.filter(item => item.value)[0])

const selectedTrigger = (type: string) => {
  return !!testLists.value.filter(item => item.value).find(item => item.type === type)
}

const activateTrigger = (type: string) => {
  return currentTest.value.type === type
}

const movePrevTest = () => {
  currentTestIndex.value--

  if (currentTestIndex.value >= 0) {
    prevTest.value = testLists.value.filter(item => item.value)[currentTestIndex.value - 1]
    currentTest.value = testLists.value.filter(item => item.value)[currentTestIndex.value]
  } else {
    navigateTo('/')
  }
}

const moveNextTest = () => {
  if (currentTestIndex.value === selectedTestCount.value) {
    navigateTo('/')
    completeTest()
    return
  }
  prevTest.value = currentTest.value
  currentTestIndex.value++
  currentTest.value = testLists.value.filter(item => item.value)[currentTestIndex.value]
}

const completeTest = () => {
  testLists.value = testLists.value.map((test) => {
    if (test.value) {
      return {
        ...test,
        confirm: true
      }
    }
    return test
  })
}

enter()

</script>

<template>
  <div ref="testingPage">
    <TestingDefective v-if="selectedTrigger('defective') && activateTrigger('defective')" />
    <TestingBlack v-if="selectedTrigger('black') && activateTrigger('black')" />
    <TestingRed v-if="selectedTrigger('red') && activateTrigger('red')" />
    <TestingGreen v-if="selectedTrigger('green') && activateTrigger('green')" />
    <TestingBlue v-if="selectedTrigger('blue') && activateTrigger('blue')" />
    <TestingUniformity v-if="selectedTrigger('uniformity') && activateTrigger('uniformity')" />
    <TestingColorDistance v-if="selectedTrigger('colorDistance') && activateTrigger('colorDistance')" />
    <TestingGradient v-if="selectedTrigger('gradient') && activateTrigger('gradient')" />
    <TestingSharpness v-if="selectedTrigger('sharpness') && activateTrigger('sharpness')" />
    <div
      v-if="!idle"
      class="fixed flex flex-col justify-center items-center border-2 border-zinc-900 rounded-xl bg-zinc-100 p-1 opacity-60 bottom-4 left-4"
    >
      <p class="text-zinc-900">
        {{ currentTestIndex + 1 }} / {{ selectedTestCount + 1 }}
      </p>
      <div>
        <AButton
          button-size="sm"
          button-variant="ghost"
          use-leading
          icon-name="material-symbols:arrow-circle-left-outline-rounded"
          @click:button="movePrevTest"
        />
        <AButton
          button-size="sm"
          button-variant="ghost"
          use-leading
          icon-name="material-symbols:arrow-circle-right-outline-rounded"
          @click:button="moveNextTest"
        />
      </div>
    </div>
    <AButton
      v-if="!idle && !isApp"
      custom-class="fixed bottom-4 right-4"
      button-size="md"
      :button-text="isFullscreen ? t('button.exitFullScreen') : t('button.fullScreen')"
      @click:button="toggle"
    />
  </div>
</template>
