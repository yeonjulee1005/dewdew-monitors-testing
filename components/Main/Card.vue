<script setup lang="ts">
import type { TestingOption } from '~/types/index'

const props = defineProps<{
  testItem: TestingOption
}>()

const emit = defineEmits<{
  'update:testItem': [value: TestingOption]
}>()

const computedChecked = computed({
  get() {
    return props.testItem.value
  },
  set(value: boolean) {
    emit('update:testItem', {
      ...props.testItem,
      value,
    })
  },
})
</script>

<template>
  <DDCard :ui="{ base: 'cursor-pointer', ring: 'ring-2 ring-zinc-800 dark:ring-zinc-200', rounded: 'rounded-lg', body: { padding: 'p-0 sm:p-0' }, background: 'bg-zinc-50/60 dark:bg-zinc-800/60' }">
    <div
      class="cursor-pointer w-full flex items-center px-4 py-5 sm-p6 gap-4"
      @click="computedChecked = !computedChecked"
    >
      <p>
        {{ $t(`testing.${testItem.type}.title`) }}
      </p>
      <div class="flex-auto" />
      <DDBadge
        v-if="testItem.confirm"
        color="sky"
        variant="outline"
        :label="$t('button.confirm')"
        :ui="{ base: 'break-keep' }"
      />
      <DDTooltip
        :text="$t(`testing.${testItem.type}.description`)"
        :popper="{ offsetDistance: 10 }"
      >
        <DDCheckbox
          v-model="computedChecked"
          input-class="w-6 h-6"
          color="sky"
          name="selection"
          :ui="{ background: 'bg-zinc-200 dark:bg-zinc-800', border: 'border-2 border-zinc-800 dark:border-zinc-900' }"
        />
      </DDTooltip>
    </div>
  </DDCard>
</template>
