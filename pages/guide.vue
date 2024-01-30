<script setup lang="ts">

const { buyMeACoffeeLink, buyMeACoffeeImage } = useLinkData()

const stepCount = ref(0)

</script>

<template>
  <div class="w-screen min-h-screen flex flex-col justify-center items-center gap-8">
    <GuideCard
      v-for="n in 4"
      v-show="stepCount === n - 1"
      :key="n"
      :step="(n - 1)"
    />
    <div class="flex gap-4">
      <NuxtLink
        :to="buyMeACoffeeLink"
        target="_blank"
      >
        <NuxtImg :src="buyMeACoffeeImage"/>
      </NuxtLink>
      <AButton
        v-if="!stepCount"
        button-size="xl"
        :button-text="$t('button.home')"
        @click:button="navigateTo('/')"
      />
      <AButton
        v-if="stepCount"
        button-size="xl"
        :button-text="$t('button.prev')"
        @click:button="stepCount--"
      />
      <AButton
        v-if="stepCount < 3"
        button-size="xl"
        :button-text="$t('button.next')"
        @click:button="stepCount++"
      />
      <AButton
        v-if="stepCount === 3"
        button-size="xl"
        :button-text="$t('button.start')"
        @click:button="navigateTo('/')"
      />
    </div>
  </div>
</template>
