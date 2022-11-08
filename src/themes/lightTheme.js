const colors = {
  color_1: '#edf5ff',
  color_2: '#066BB2',
  color_3: '#63C3E1',
  color_4: '#63C3E1',
};

export const getLightThemeStyles = () => ({
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
    background: colors.color_2,
  }
});
