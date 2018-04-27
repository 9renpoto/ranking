import { storiesOf } from '@storybook/react'
import { image, name, random } from 'faker'
import React from 'react'

import { Bar } from '.'
import { Avatar } from '../Avatar'
import { Name } from '../User'

export const DefaultRankBar = () => (
  <Bar style={{ width: `${random.number({ max: 100 })}%` }}>
    <Avatar width={0.938} height={0.938}>
      <img src={image.imageUrl(300, 300)} alt={random.word()} />
    </Avatar>
    <Name white padding={0}>
      {random.word()}
    </Name>
  </Bar>
)

storiesOf('Atoms.RankBar', module).add('default', () => <DefaultRankBar />)
