const pathPrefix = process.env.NODE_ENV === 'production'
    ? '/React-Portfolio'
    : '';

module.exports = {
    assetPrefix: pathPrefix,
    basepath: "/React-Portfolio",
    env: {
        pathPrefix,
    },
};