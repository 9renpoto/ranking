import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Fixed } from '.'
import { Button } from '../../a/Button'

storiesOf('Molecules.FixedButton', module).add('default', () => (
  <Fixed>
    <Button>Button</Button>
  </Fixed>
))
