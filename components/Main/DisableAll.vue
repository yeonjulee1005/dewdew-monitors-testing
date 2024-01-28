<script setup lang="ts">

defineEmits([
  'update:disable-all'
])

</script>

<template>
  <div class="flex justify-end">
    <DDTooltip
      :text="$t('tooltip.disableAll')"
      :popper="{ offsetDistance: 10 }"
    >
      <AButton
        custom-class="mt-2"
        button-size="2xs"
        :button-text="$t('button.disableAll')"
        @click:button="() => $emit('update:disable-all')"
      />
    </DDTooltip>
  </div>
</template>
