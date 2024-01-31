export const useAppCheck = () => {
  const { userAgent } = useDevice()

  const isPwa = window.matchMedia('(display-mode: standalone)').matches
  const isApp = userAgent.includes('APP_Monitors') ? true : false

  return {
    isPwa,
    isApp
  }
}
