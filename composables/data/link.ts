export const useLinkData = () => {
  const buyMeACoffeeLink = ref<string>('https://www.buymeacoffee.com/yeonjulee1005')
  const buyMeACoffeeImage = ref<string>('https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=yeonjulee1005&button_colour=4bbcec&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00')

  return {
    buyMeACoffeeLink,
    buyMeACoffeeImage,
  }
}
