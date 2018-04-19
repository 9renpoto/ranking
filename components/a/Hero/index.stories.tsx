import { storiesOf } from '@storybook/react'
import React from 'react'

import { Hero, Inner } from '.'
import { DefaultProfile } from '../Profile/index.stories'

export const DefaultHero = () => (
  <Hero>
    <Inner>
      <DefaultProfile />
    </Inner>
  </Hero>
)

storiesOf('Atoms.Hero', module).add('default', () => <DefaultHero />)
