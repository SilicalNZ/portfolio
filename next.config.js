const path = require('path');

module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: config => {
    config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components');
    config.resolve.alias['@config'] = path.resolve(__dirname, 'src/config');
    config.resolve.alias['@hooks'] = path.resolve(__dirname, 'src/hooks');
    config.resolve.alias['@images'] = path.resolve(__dirname, 'src/images');
    config.resolve.alias['@pages'] = path.resolve(__dirname, 'src/pages');
    config.resolve.alias['@styles'] = path.resolve(__dirname, 'src/styles');
    config.resolve.alias['@utils'] = path.resolve(__dirname, 'src/utils');
    return config;
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};