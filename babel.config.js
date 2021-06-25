module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@UI': './src/Components',
          '@Services': './src/Services',
          '@Navigation': './src/Navigation',
          '@Lib': './src/Lib',
          '@Redux': './src/Redux',
        },
      },
    ],
  ],
};
