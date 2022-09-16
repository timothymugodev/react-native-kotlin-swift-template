// @ts-ignore
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.ts',
            '.jsx',
            '.tsx',
            '.native',
            '.native.js',
            '.native.ts',
            '.native.jsx',
            '.native.tsx',
            '.ios.native',
            '.android.native',
            '.ios.native.js',
            '.ios.native.ts',
            '.ios.native.jsx',
            '.ios.native.tsx',
            '.android.native.js',
            '.ios.ts',
            '.android.ts',
            '.ios.tsx',
            '.android.tsx',
            '.json'
          ],
          alias: {
            "@example/app": "./src/app",
            "@example/components": "./src/components",
            "@example/containers": "./src/containers",
            "@example/hooks": "./src/hooks",
            "@example/navigation": "./src/navigation",
            "@example/services": "./src/services",
            "@example/screens": "./src/screens",
            "@example/utils": "./src/utils",
          }
        }
      ],
      [
        'babel-plugin-root-import',
        {
          rootPathSuffix: './src',
          rootPathPrefix: '@example/',
        }
      ]
    ]
  };
};
