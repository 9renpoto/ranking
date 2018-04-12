import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Hero, HeroInner } from '.'
import { ProfileImg, ProfileName } from '../Profile'

storiesOf('Atoms.Hero', module).add('default', () =>
  <Hero>
    <HeroInner>
      <ProfileImg><img src="https://dummyimage.com/300x300/000/fff" alt="" /></ProfileImg>
      <ProfileName>name</ProfileName>
    </HeroInner>
  </Hero>
)
