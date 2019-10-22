const React = require('react')
const { configure, addParameters, addDecorator } = require('@storybook/react')
const requireContext = require('require-context.macro')
const { theme } = require('@primer/components')
const { ThemeProvider } = require('styled-components')

addDecorator(story => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

addParameters({
  viewport: {
    defaultViewport: ((r = Math.random()) => {
      return r <= 0.3 ? 'iphonex' : r <= 0.6 ? 'ipad' : ''
    })()
  }
})

configure(requireContext('../', true, /story.tsx$/), module)
