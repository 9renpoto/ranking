import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Textarea } from '.'

storiesOf('Atoms.Textarea', module).add('default', () => (
  <Textarea placeholder='hello' />
))
