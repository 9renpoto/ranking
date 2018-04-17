import { storiesOf } from '@storybook/react'
import { image } from 'faker'
import * as React from 'react'

import { Hero, HeroInner } from '.'
import { ProfileImg, ProfileName } from '../Profile'

storiesOf('Atoms.Hero', module).add('default', () => (
  <Hero>
    <HeroInner>
      <ProfileImg>
        <img src={image.imageUrl(300, 300)} alt='' />
      </ProfileImg>
      <ProfileName>name</ProfileName>
    </HeroInner>
  </Hero>
))
