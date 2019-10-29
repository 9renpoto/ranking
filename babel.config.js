module.exports = {
  presets: ['next/babel', '@lingui/babel-preset-react'],
  env: {
    test: {
      plugins: ['macros']
    }
  }
}
