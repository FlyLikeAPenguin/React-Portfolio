const pathPrefix = process.env.NODE_ENV === 'production'
    ? '/React-Portfolio'
    : '';

module.exports = {
    assetPrefix: pathPrefix,
    env: {
        pathPrefix,
    },
};