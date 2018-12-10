import { storiesOf } from '@storybook/react'
import React from 'react'
import { Input } from '.'

storiesOf('Atoms.Input', module).add('default', () => (
  <Input placeholder='hello' />
))
