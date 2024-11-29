<script setup lang="ts">
const { isIos, isAndroid, isDesktop } = useDevice()

console.log(isIos, isAndroid, isDesktop)

const { meta, fullPath } = useRoute()
const { t } = useLocale()

useHead({
  title: (meta.title as string) ?? 'Monitors Test',
  titleTemplate: (title: string | undefined) => {
    return title && !title?.includes(t('pageTitle.main'))
      ? title?.concat(' | ', t('pageTitle.main'))
      : null
  },
  link: [
    { rel: 'canonical', href: fullPath },
    { rel: 'icon', type: 'image/png', href: '/favicon.svg' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
  ],
  script: [
    {
      hid: 'google-adsense',
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9720546940719922',
      crossorigin: 'anonymous',
      defer: true,
    },
  ],
  meta: [
    { name: 'naver-site-verification', content: 'c404ea94563dae0ee16a595e8f5edb659f1792f5' },
    { name: 'google-adsense-account', content: 'ca-pub-9720546940719922' },
    { property: 'imagetoolbar', content: 'no' },
  ],
})

useSeoMeta({
  charset: 'utf-16',
  formatDetection: 'telephone=no',
  viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
  author: 'Dewdew',
  themeColor: '#da532c',
  msapplicationTileColor: '#da532c',
  title: (meta.title as string) ?? t('pageTitle.main'),
  description: (meta.description as string) ?? t('openGraph.title'),
  ogType: 'website',
  ogUrl: 'https://monitors.dewdew.world',
  ogTitle: (meta.title as string) || t('pageTitle.main'),
  ogDescription: (meta.description as string) ?? t('openGraph.description'),
  ogImage: '/dewdew_monitors_test.webp',
  ogImageType: 'image/png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterCard: 'summary_large_image',
  twitterTitle: (meta.title as string) || t('pageTitle.main'),
  twitterDescription: (meta.description as string) ?? t('openGraph.description'),
  twitterImage: '/dewdew_monitors_test.webp',
  twitterSite: '@dewdew',
  twitterCreator: '@dewdew',
})
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
