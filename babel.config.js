module.exports = (api) => {
  api.cache(true);
  const isQuantum = process.env.QUANTUM_MODE === 'true';

  return {
    presets: [
      ['@babel/preset-env', {
        targets: isQuantum ? {
          esmodules: true,
          browsers: 'last 2 Chrome versions'
        } : {
          node: 'current'
        },
        modules: isQuantum ? false : 'commonjs',
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
        bugfixes: true
      }]
    ],
    plugins: [
      ['@babel/plugin-transform-runtime', {
        corejs: 3,
        useESModules: isQuantum,
        version: "^7.15.0"
      }]
    ].concat(isQuantum ? [] : [
      // Дополнительные плагины только для обычного режима
      '@babel/plugin-transform-async-to-generator'
    ])
  };
}
