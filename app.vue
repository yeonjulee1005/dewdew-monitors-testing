<template>
  <div>
    <NuxtLayout>
      <div>
        <NuxtLoadingIndicator
          :height="5"
          color="repeating-linear-gradient(to right,#bdbdbd 0%,#cb8a80 100%)"
        />
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

const { meta, fullPath } = useRoute()

const { t } = useLocale()

useHead({
  titleTemplate: (title: string | undefined) => {
    return title && !title?.includes(t('pageTitle.main'))
      ? title?.concat(' | ', t('pageTitle.main'))
      : null
  }
})

const seoUrl = 'https://monitors.dewdew.world'
const seoImage = 'https://api.dewdew.dev/storage/v1/object/public/assets/banner/main_banner.webp'

if (process.server) {
  useHead({
    title: (meta.title as string) ?? '개발자 이연주 | Dewdew',
    meta: () => [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
      { name: 'author', content: 'Dewdew' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'keywords', content: 'monitor test,monitor,dewdew,모니터,모니터테스트,모니터 테스트,모니터 색상테스트' },
      { name: 'naver-site-verification', content: '7c406de71b03c1e444a4fe2630a29bd7a8e17559' },
      { name: 'description', content: (meta.description as string) ?? t('openGraph.title') },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: seoUrl },
      { property: 'og:image', content: seoImage, key: 'og:image' },
      { property: 'og:image:width', content: '410' },
      { property: 'og:image:height', content: '200' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:title', content: (meta.title as string) ?? t('pageTitle.main') },
      { property: 'og:description', content: (meta.description as string) ?? t('openGraph.title') }
    ],
    link: [
      { rel: 'canonical', href: fullPath },
      { rel: 'icon', type: 'image/png', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ],
    script: [
      {
        hid: 'spiine-viewer',
        src: 'https://unpkg.com/@splinetool/viewer@1.0.17/build/spline-viewer.js',
        type: 'module',
        defer: true
      }
    ]
  })
}

</script>
