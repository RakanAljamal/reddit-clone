const withSass = require('@zeit/next-sass')
const env = require('dotenv').config().parsed;
const config = {
    webpack(config, {isServer}) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });


        if (!isServer) {
            config.node = {
                fs: 'empty'
            }
        }


        return config;
    }
};

module.exports = module.exports = withSass({
    env,
    ...config,
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]-[hash:base64:5]',
        url: false
    }
});