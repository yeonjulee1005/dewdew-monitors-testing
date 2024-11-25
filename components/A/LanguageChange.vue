<script setup lang="ts">
const { t, locale, setLocale } = useLocale()

const locales = [
  { label: t('localeMenu.ko'), value: 'ko' },
  { label: t('localeMenu.en'), value: 'en' },
]

const selectLocale = computed({
  get() {
    return locale.value
  },
  set(value) {
    setLocale(value)
  },
})
</script>

<template>
  <DDSelectMenu
    v-model="selectLocale"
    color="sky"
    size="md"
    variant="outline"
    :options="locales"
    value-attribute="value"
    option-attribute="label"
  >
    <template #label>
      <Icon
        :name="selectLocale === 'ko' ? 'circle-flags:kr' : 'circle-flags:us'"
        class="w-6 h-6"
      />
      {{ selectLocale }}
    </template>
  </DDSelectMenu>
</template>
