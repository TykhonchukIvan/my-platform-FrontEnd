const colors = {
  color_1: '#0C202E',
  color_2: '#FF9900',
  color_3: '#f87007',
};

export const getDarkThemeStyles = () => ({
  mainBackgroundColor: colors.color_1,
  preloader: {
    background: colors.color_3,
    boxShadowBackground: colors.color_3,
  },
  loader: {
    background: colors.color_2,
    secondBackground: colors.color_3,
  },
});
