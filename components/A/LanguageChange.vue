<script setup lang="ts">

const { t, locale, setLocale } = useLocale()

const locales = [
  { label: t('localeMenu.ko'), value: 'ko' },
  { label: t('localeMenu.en'), value: 'en' }
]

const selectLocale = computed({
  get () {
    return locale.value
  },
  set (value) {
    setLocale(value)
  }
})

</script>

<template>
  <DDSelectMenu
    v-model="selectLocale"
    color="sky"
    size="xs"
    variant="outline"
    :options="locales"
    value-attribute="value"
    option-attribute="label"
  >
    <template #label>
      <Icon
        :name="selectLocale === 'ko' ? 'circle-flags:kr' : 'circle-flags:us'"
        :width="20"
        :height="20"
      />
      {{ selectLocale }}
    </template>
  </DDSelectMenu>
</template>
