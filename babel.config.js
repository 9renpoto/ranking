module.exports = {
  presets: ['next/babel', '@zeit/next-typescript/babel'],
  env: {
    test: {
      plugins: ['macros']
    }
  }
}
