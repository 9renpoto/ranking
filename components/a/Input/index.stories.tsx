import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Input } from '.'

storiesOf('Atoms.Input', module).add('default', () => (
  <Input placeholder='hello' />
))
