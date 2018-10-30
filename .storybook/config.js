const { configure, addDecorator } = require('@storybook/react')
const { withKnobs } = require('@storybook/addon-knobs')

require('../components/globalStyles')

const req = require.context('../components', true, /.stories.tsx?$/)
const loadStories = () => req.keys().forEach(filename => req(filename))

addDecorator(withKnobs)
configure(loadStories, module)
