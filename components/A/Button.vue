<script setup lang="ts">
import type { ButtonSize, ButtonVariant } from '@nuxt/ui/dist/runtime/types/button'

withDefaults(
  defineProps<{
    customClass?: string,
    roundButton?: boolean,
    buttonDisabled?: boolean,
    buttonPadding?: boolean,
    buttonBlock?: boolean,
    buttonColor?: string,
    buttonSize?: ButtonSize | undefined,
    buttonVariant?: ButtonVariant | undefined,
    buttonLabel?: string,
    useLeading?: boolean,
    iconName?: string,
    imageSrc?: string,
    iconSize?: number,
    imageSize?: number,
    buttonTextClass?: string,
    buttonText?: string
  }>(),
  {
    customClass: '',
    roundButton: false,
    buttonDisabled: false,
    buttonPadding: true,
    buttonBlock: false,
    buttonColor: 'sky',
    buttonSize: 'lg',
    buttonVariant: 'outline',
    buttonLabel: 'button',
    useLeading: false,
    iconName: '',
    imageSrc: '',
    iconSize: 24,
    imageSize: 36,
    buttonTextClass: '',
    buttonText: ''
  }
)

defineEmits([
  'click:button',
  'mouseenter:button',
  'mouseleave:button'
])

</script>
<template>
  <DDButton
    :class="customClass"
    :ui="roundButton ? { rounded: 'rounded-full' } : {}"
    :disabled="buttonDisabled"
    :padding="buttonPadding"
    :block="buttonBlock"
    :color="buttonColor"
    :size="buttonSize"
    :variant="buttonVariant"
    :aria-label="buttonLabel"
    @click="$emit('click:button')"
    @mouseenter="$emit('mouseenter:button')"
    @mouseleave="$emit('mouseleave:button')"
  >
    <template
      v-if="useLeading"
      #leading
    >
      <Icon
        v-if="iconName"
        :name="iconName"
        :width="iconSize"
        :height="iconSize"
      />
      <nuxt-img
        v-if="imageSrc"
        :src="imageSrc"
        format="webp"
        loading="lazy"
        :width="imageSize"
        :height="imageSize"
        alt="image"
        :draggable="false"
        @contextmenu.prevent
      />
    </template>
    <span
      v-if="buttonText"
      :class="buttonTextClass"
    >
      {{ buttonText }}
    </span>
  </DDButton>
</template>
