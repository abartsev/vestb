const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

const customConfig = {
  transformer: {},
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
  extraNodeModules: {
    '@components': `${__dirname}/src/components`,
    '@screens': `${__dirname}/src/screens`,
    '@contexts': `${__dirname}/src/contexts`,
    '@types': `${__dirname}/src/types`,
    '@styles': `${__dirname}/src/styles`,
  },
};

module.exports = mergeConfig(defaultConfig, customConfig);
