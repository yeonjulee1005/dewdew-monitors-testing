<script setup lang="ts">
const { buyMeACoffeeLink, buyMeACoffeeImage } = useLinkData()

const stepCount = ref(0)
</script>

<template>
  <div class="w-dvw min-h-screen flex flex-col justify-center items-center px-8 gap-8">
    <GuideCard
      v-for="n in 4"
      v-show="stepCount === n - 1"
      :key="n"
      :step="(n - 1)"
    />
    <div class="w-full sm:max-w-[500px] flex flex-col gap-6">
      <div class="w-full flex gap-4">
        <AButton
          v-if="!stepCount"
          class="flex-1"
          button-block
          button-size="xl"
          :button-text="$t('button.home')"
          @click:button="navigateTo('/')"
        />
        <AButton
          v-if="stepCount"
          class="flex-1"
          button-block
          button-size="xl"
          :button-text="$t('button.prev')"
          @click:button="stepCount--"
        />
        <AButton
          v-if="stepCount < 3"
          class="flex-1"
          button-block
          button-size="xl"
          :button-text="$t('button.next')"
          @click:button="stepCount++"
        />
        <AButton
          v-if="stepCount === 3"
          class="flex-1"
          button-block
          button-size="xl"
          :button-text="$t('button.start')"
          @click:button="navigateTo('/')"
        />
      </div>
      <NuxtLink
        :to="buyMeACoffeeLink"
        class="flex justify-center"
        target="_blank"
      >
        <NuxtImg
          class="w-full max-w-[300px]"
          :src="buyMeACoffeeImage"
        />
      </NuxtLink>
    </div>
  </div>
</template>
