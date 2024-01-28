import { defineStore } from 'pinia'
import type { TestingOption } from '~/types/index'

export const useTestingStore = defineStore('testing', () => {
  /**
   * @param testLists 테스트 리스트
   *
   * @param testUniformity 회색톤 균일 한지 테스트
   * @param colorDistance 색차 테스트 (내부 박스와 백그라운드 컬러 rgb로 조절 가능하도록! r/g/b 각각 0~255)
   * @param gradient 그라데이션 테스트 (스텝은 세로로 8, 8*2, (8*2)*2, ... 256 * 2 까지 / 화이트, cyan, magenta, yellow, red, green, blue)
   * @param sharpness 선명도 테스트 (텍스트가 선명하게 보이는지) 폰트사이즈 8 ~ 24px / 흰색바탕 검은글씨, 검은바탕 흰색글씨
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
    { type: 'sharpness', value: false, confirm: false },
    { type: 'gamma', value: false, confirm: false }
  ])

  return {
    testLists
  }
}, {
  persist: {
    storage: persistedState.sessionStorage
  }
})