import { defineStore } from 'pinia'
import type { TestingOption } from '~/types/index'

export const useTestingStore = defineStore('testing', () => {
  /**
   * @param testLists 테스트 리스트
   *
   * @param gamma 감마 테스트 세로로 작게 잘린 슬라이스 위에 글씨가 보이는 정도까지 글씨 색을 조절하기 (회색으로) / 0.1 ~ 3.0
   */

  const testLists = ref<TestingOption[]>([
    { type: 'defective', value: true, confirm: false },
    { type: 'black', value: true, confirm: false },
    { type: 'red', value: true, confirm: false },
    { type: 'green', value: true, confirm: false },
    { type: 'blue', value: true, confirm: false },
    { type: 'uniformity', value: false, confirm: false },
    { type: 'colorDistance', value: false, confirm: false },
    { type: 'gradient', value: false, confirm: false },
    { type: 'sharpness', value: false, confirm: false }
  ])

  return {
    testLists
  }
}, {
  persist: {
    storage: persistedState.sessionStorage
  }
})
