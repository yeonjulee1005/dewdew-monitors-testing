<script setup lang="ts">
import type { TestingOption } from '~/types/index'

const { t } = useLocale()
const toast = useToast()
const { testLists } = storeToRefs(useTestingStore())

const updateTestItem = (computedValue: TestingOption) => {
  testLists.value = testLists.value.map((item) => {
    if (item.type === computedValue.type) {
      return computedValue
    }
    return item
  })
}

const resetAllTestItem = () => {
  testLists.value = testLists.value.map((item) => {
    return {
      ...item,
      value: false,
    }
  })
}

const resetAllConfirmItem = () => {
  testLists.value = testLists.value.map((item) => {
    return {
      ...item,
      confirm: false,
    }
  })
}

const moveToFullScreen = () => {
  const filteredTestItem = testLists.value.filter(item => item.value)
  if (!filteredTestItem.length) {
    toast.add({ title: t('messages.selectItem'), color: 'sky', timeout: 2000 })
    return
  }
  navigateTo('/testing')
}

const completedTest = () => {
  const filteredTestItem = testLists.value.filter(item => !item.confirm)
  if (!filteredTestItem.length) {
    toast.add({ title: t('messages.complete'), color: 'sky', timeout: 2000 })
    resetAllConfirmItem()
    return
  }
}

completedTest()
</script>

<template>
  <div class="w-screen h-full overflow-y-scroll flex flex-col justify-center items-center gap-4 py-8">
    <DDCard :ui="{ ring: 'ring-4 ring-zinc-800 dark:ring-zinc-200', shadow: 'shadow-lg shadow-zinc-200/40', divide: 'divide-zinc-800 dark:divide-zinc-200', rounded: 'rounded-2xl', background: 'bg-zinc-50/60 dark:bg-zinc-800/60' }">
      <template #header>
        <AHeader />
      </template>
      <div class="flex flex-col gap-2">
        <p>
          {{ $t('index.subTitle') }}
        </p>
        <div class="flex flex-col flex-wrap">
          <MainCard
            v-for="test in testLists"
            :key="test.type"
            class="my-2.5"
            :test-item="test"
            @update:test-item="(computedValue) => updateTestItem(computedValue)"
          />
        </div>
      </div>
      <MainDisableAll @update:disable-all="resetAllTestItem" />
      <template #footer>
        <MainFooter @move-to-full-screen="moveToFullScreen" />
      </template>
    </DDCard>
    <AFooter />
  </div>
</template>
