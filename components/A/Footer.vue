<template>
  <div class="h-fit w-fit flex flex-wrap justify-center items-center gap-4 p-4">
    <NuxtLink
      class="dark:bg-neutral-50 rounded-lg w-10 h-10"
      to="https://www.dewdew.world"
      external
      name="dewdew world"
      alt="logo"
    >
      <NuxtImg
        src="/dewdew_world.webp"
        :height="32"
        :width="32"
        loading="lazy"
      />
    </NuxtLink>
    <NuxtLink
      class="dark:bg-neutral-50 rounded-lg w-10 h-10"
      to="https://github.com/yeonjulee1005"
      external
      name="github"
    >
      <Icon
        name="devicon:github"
        class="w-10 h-10"
      />
    </NuxtLink>
    <NuxtLink
      class="w-10 h-10"
      to="https://www.linkedin.com/in/dewdew/"
      external
      name="linkedin"
    >
      <Icon
        name="devicon:linkedin"
        class="w-10 h-10"
      />
    </NuxtLink>
    <AThemeChange />
    <ALanguageChange />
  </div>
</template>
