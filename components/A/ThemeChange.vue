<script setup lang="ts">

const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

</script>

<template>
  <DDButton
    color="sky"
    variant="ghost"
    size="xs"
    aria-label="theme"
    @click="isDark = !isDark"
  >
    <template #leading>
      <Icon
        :name="isDark ? 'line-md:moon-filled-loop' : 'line-md:moon-filled-alt-to-sunny-filled-loop-transition'"
        :width="24"
        :height="24"
      />
    </template>
  </DDButton>
</template>
