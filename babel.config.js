// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      // Add this line - MUST BE LAST
      "react-native-reanimated/plugin",
    ],
  };
};