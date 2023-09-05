const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
    resolver: {
        extraNodeModules: new Proxy(
            {},
            {
                get: (target, name) => {
                    return path.join(__dirname, `node_modules/${name}`);
                },
            },
        ),
    },
    watchFolders: [path.resolve(__dirname, '../')],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
