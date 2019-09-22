const { configure } = require('@storybook/react')
const { addParameters } = require('@storybook/react')

addParameters({
  viewport: {
    defaultViewport: ((r = Math.random()) => {
      return r <= 0.3 ? 'iphonex' : r <= 0.6 ? 'ipad' : ''
    })()
  }
})

function loadStories() {
  const req = require.context('../', true, /story.tsx$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
