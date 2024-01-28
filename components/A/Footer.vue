<template>
  <div class="flex justify-center items-center gap-4 sticky bottom-2 pr-3">
    <div class="flex-auto" />
    <NuxtLink
      class="dark:bg-neutral-50 rounded-lg"
      to="https://www.dewdew.world"
      external
      name="dewdew world"
      alt="logo"
    >
      <NuxtImg
        src="/dewdew_world.webp"
        :height="26"
        :width="26"
        loading="lazy"
      />
    </NuxtLink>
    <NuxtLink
      class="dark:bg-neutral-50 rounded-lg"
      to="https://github.com/yeonjulee1005"
      external
      name="github"
    >
      <Icon
        name="devicon:github"
        :width="26"
        :height="26"
      />
    </NuxtLink>
    <NuxtLink
      to="https://www.linkedin.com/in/dewdew/"
      external
      name="linkedin"
    >
      <Icon
        name="devicon:linkedin"
        :width="26"
        :height="26"
      />
    </NuxtLink>
    <AThemeChange />
    <ALanguageChange />
  </div>
</template>
