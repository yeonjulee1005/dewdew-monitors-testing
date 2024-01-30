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

if (process.server) {
  useHead({
    title: (meta.title as string) ?? 'Monitors Test',
    meta: () => [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
      { name: 'author', content: 'Dewdew' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'keywords', content: 'monitor test,monitor,monitor test,모니터 불량화소 테스트,모니터 불량 테스트,dewdew,모니터,모니터테스트,모니터 테스트,모니터 색상테스트' },
      { name: 'naver-site-verification', content: 'c404ea94563dae0ee16a595e8f5edb659f1792f5' },
      { name: 'description', content: (meta.description as string) ?? t('openGraph.title') },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://monitors.dewdew.world' },
      { property: 'og:image', content: '/dewdew_monitors_test.webp', key: 'og:image' },
      { property: 'og:image:width', content: '410' },
      { property: 'og:image:height', content: '200' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:title', content: (meta.title as string) ?? t('pageTitle.main') },
      { property: 'og:description', content: (meta.description as string) ?? t('openGraph.description') }
    ],
    link: [
      { rel: 'canonical', href: fullPath },
      { rel: 'icon', type: 'image/png', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  })
}

</script>

<template>
  <div>
    <VitePwaManifest />
    <NuxtLayout>
      <div>
        <NuxtPage />
        <DDNotifications />
      </div>
    </NuxtLayout>
  </div>
</template>
