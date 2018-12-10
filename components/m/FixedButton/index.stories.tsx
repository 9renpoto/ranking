import { storiesOf } from '@storybook/react'
import { random } from 'faker'
import React from 'react'
import { Fixed } from '.'
import { Button } from '../../a/Button'

export const DefaultFixedButton = () => (
  <Fixed>
    <Button>{random.word()}</Button>
  </Fixed>
)

storiesOf('Molecules.FixedButton', module).add('default', () => (
  <DefaultFixedButton />
))
