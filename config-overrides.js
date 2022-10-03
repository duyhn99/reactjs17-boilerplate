const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@app': path.resolve(__dirname, '.'),
    '@components': path.resolve(__dirname, './src/components'),
    '@api': path.resolve(__dirname, './src/api'),
    '@configs': path.resolve(__dirname, './src/configs'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@helper': path.resolve(__dirname, 'src/helper'),
    '@redux': path.resolve(__dirname, 'src/redux'),
    '@hooks': path.resolve(__dirname, './src/hooks'),
  }),
);
