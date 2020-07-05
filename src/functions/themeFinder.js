export const themeFinder = (themesArray, themeName) => {
  let theme;
  themesArray.forEach((t) => {
    if (t.name === themeName) {
      theme = t;
    }
  });
  return theme;
};
