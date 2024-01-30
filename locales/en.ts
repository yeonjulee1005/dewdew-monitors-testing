export default {
  pageTitle: {
    main: 'Monitor Pixel Test',
    testing: 'Monitor Testing in Progress 👻'
  },
  openGraph: {
    title: 'Dewdew | Monitor Pixel Test',
    description: 'A simple and easy monitor test. Select the necessary items and proceed with the test. A lightweight test webpage without any interference.'
  },
  localeMenu: {
    ko: '한글',
    en: 'English'
  },
  button: {
    home: 'Home',
    back: 'Back',
    next: 'Next',
    prev: 'Prev',
    guide: 'Using Guide',
    start: 'Start Monitor Test',
    fullScreen: 'Full Screen',
    exitFullScreen: 'Exit Full Screen',
    disableAll: 'Disable All',
    confirm: 'Confirm'
  },
  tooltip: {
    disableAll: 'Disables all test selection items.'
  },
  messages: {
    selectItem: 'Please select the item you want to test.',
    error: 'The page cannot be found.. Let\'s go back home!'
  },
  index: {
    title: 'Monitor Test',
    subTitle: 'Select items you want to test and press Start Monitor Test.'
  },
  guide: {
    title: 'This is a guide on how to use the Monitor Test.',
    0: {
      title: 'Select the test items.',
      description: [
        'Select the items you want to test!',
        'You can select all items, or just the ones you want.',
        'And you can delete all items.'
      ]
    },
    1: {
      title: 'Proceed with the test.',
      description: [
        'When you start the test, it automatically switches to full screen.',
        'To exit full screen, press the Esc key or press the full screen button.',
        'When testing, each navigator automatically hides after 3 seconds and reappears when you move the mouse.'
      ]
    },
    2: {
      title: 'Complete the test!',
      description: [
        'If you keep selecting the items in the lower right corner, the test is completed and you return to the main screen.',
        'If you have returned to the first item, you can exit by pressing the back button one more time.'
      ]
    },
    3: {
      title: 'If the test was helpful, please share!',
      description: [
        'If it was useful, we would appreciate it if you could share it widely!',
        'Also, buy a delicious cup of coffee for the developer to develop more good features!'
      ]
    }
  },
  testing: {
    defective: {
      title: 'Defective Pixel',
      description: 'If you see a black dot on the white screen, it is a defective pixel.'
    },
    black: {
      title: 'Test Black',
      description: 'If you see a other dot on the black screen, it is a defective pixel.'
    },
    red: {
      title: 'Test Red',
      description: 'If you see a other dot on the red screen, it is a defective pixel.'
    },
    green: {
      title: 'Test Green',
      description: 'If you see a other dot on the green screen, it is a defective pixel.'
    },
    blue: {
      title: 'Test Blue',
      description: 'If you see a other dot on the blue screen, it is a defective pixel.'
    },
    uniformity: {
      title: 'Test Uniformity',
      description: 'Check the uniformity by changing the alpha value of the gray color.',
      boxTitle: 'Adjust the gray level.'
    },
    colorDistance: {
      title: 'Color Distance',
      description: 'Check the color spacing between the inner and outer boxes.',
      boxInner: 'Adjust the color inside the box.',
      boxOuter: 'Adjust the color outside the box.'
    },
    gradient: {
      title: 'Gradient',
      description: 'Select the gradient steps and colors, then proceed with the test.',
      boxTitle: 'Proceed with the gradient test.'
    },
    sharpness: {
      title: 'Sharpness',
      description: 'Test whether the font is displayed clearly through the letters.',
      boxTitle: 'Reverse font size and color.',
      boxText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
  }
}
