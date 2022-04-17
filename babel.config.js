module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          assets: './assets',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.json'],
      },
    ],
  ],
};
