const colors = {
  color_1: '#263845',
  color_2: '#FDD502',
  color_3: '#FF4D00',
  color_4: '#142836',
};

export const getDarkThemeStyles = () => ({
  mainBackgroundColor: colors.color_1,
  preloader: {
    background: colors.color_2,
    boxShadowBackground: colors.color_3,
  },
  loader: {
    background: colors.color_2,
    secondBackground: colors.color_3,
  },
  login: {
    background: colors.color_4,
  }
});
