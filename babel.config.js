module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          useBuiltIns: 'entry',
          corejs: 3,
        },
      },
    ],
  ],
  plugins: ['lodash'],
}
