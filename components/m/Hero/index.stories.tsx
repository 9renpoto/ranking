import { storiesOf } from '@storybook/react'
import { image, random } from 'faker'
import React from 'react'
import { Hero } from '../../a/Hero'
import { Img } from '../../a/ProfileImg'
import { Name } from '../../a/ProfileName'
import { Inner } from './'

export const DefaultHero = () => (
  <Hero>
    <Inner>
      <Img isCircle>
        <img src={image.imageUrl(300, 300)} alt={random.word()} />
      </Img>
      <Name>{random.word()}</Name>
    </Inner>
  </Hero>
)

storiesOf('Molecules.Hero', module).add('default', () => <DefaultHero />)
