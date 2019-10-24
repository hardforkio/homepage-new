module.exports = function ({ config }) {
  config.module.rules.push({
    test: /stor(y|ies)\.[jt]sx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });

  return config;
};
