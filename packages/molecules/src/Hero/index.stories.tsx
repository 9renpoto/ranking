import { storiesOf } from '@storybook/react'
import { image, random } from 'faker'
import React from 'react'
import { Avatar } from '../../a/Avatar'
import { Hero } from '../../a/Hero'
import { Name } from '../../a/User'
import { Inner } from './'

export const DefaultHero = () => (
  <Hero>
    <Inner>
      <Avatar isCircle width={4.688} height={4.688}>
        <img src={image.imageUrl(300, 300)} alt={random.word()} />
      </Avatar>
      <Name white padding={1}>
        {random.word()}
      </Name>
    </Inner>
  </Hero>
)

storiesOf('Molecules.Hero', module).add('default', () => <DefaultHero />)
