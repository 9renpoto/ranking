import { storiesOf } from '@storybook/react'
import React from 'react'

import { Hero } from '.'
import { DefaultProfile } from '../Profile/index.stories'

export const DefaultHero = () => (
  <Hero>
    <DefaultProfile />
  </Hero>
)

storiesOf('Atoms.Hero', module).add('default', () => <DefaultHero />)
