export const updateThemeMode = (mode) => {
  document.body.dataset.sawmillMode = mode;
};

export const translateModeName = (mode) => {
  switch (mode) {
    case 'noir':
    case 'dark':
      return 'noir';
    default:
      return 'teint';
  }
};
