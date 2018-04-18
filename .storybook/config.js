import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import '../components/globalStyles'

const req = require.context('../components', true, /.stories.tsx?$/)
const loadStories = () => req.keys().forEach(filename => req(filename))

addDecorator(withKnobs)
configure(loadStories, module)
