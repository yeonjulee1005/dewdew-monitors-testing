<template>
  <div>
    <div
      v-if="$pwa?.offlineReady || $pwa?.needRefresh"
      class="fixed right-0 bottom-0 m-4 p-3 border border-zinc-200 rounded z-30 text-left shadow-md"
      role="alert"
    >
      <div class="mb-2">
        <span v-if="$pwa.offlineReady">
          {{ $t('pwa.readyPwa') }}
        </span>
        <span v-else>
          {{ $t('pwa.newContent') }}
        </span>
      </div>
      <div class="flex gap-1">
        <AButton
          v-if="$pwa.needRefresh"
          :button-text="$t('pwa.reload')"
          @click:button="$pwa.updateServiceWorker()"
        />
        <AButton
          :button-text="$t('pwa.close')"
          @click:button="$pwa.cancelPrompt()"
        />
      </div>
    </div>
    <div
      v-if="$pwa?.showInstallPrompt && !$pwa?.offlineReady && !$pwa?.needRefresh"
      class="fixed flex gap-1 right-0 bottom-0 m-4 p-3 border border-zinc-200 rounded z-30 text-left shadow-md"
      role="alert"
    >
      <div class="flex flex-column flex-align-center">
        <span class="gap-2">
          {{ $t('pwa.installPwa') }}
        </span>
        <div class="flex gap-1">
          <AButton
            :button-text="$t('pwa.install')"
            @click:button="$pwa.install()"
          />
          <AButton
            :button-text="$t('pwa.cancel')"
            @click:button="$pwa.cancelInstall()"
          />
        </div>
      </div>
      <Icon
        :width="60"
        :height="60"
        name="ic:round-install-desktop"
      />
    </div>
  </div>
</template>
