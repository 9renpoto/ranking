import { storiesOf } from '@storybook/react'
import { image, name, random } from 'faker'
import React from 'react'

import { Bar } from '../../a/Ranking'
import { Rank } from './'

export const DefaultRank = () => (
  <Rank>
    <span>{random.number()}</span>
    <Bar style={{ width: `${random.number({ max: 100 })}%` }}>
      <img src={image.imageUrl(300, 300)} alt={random.word()} />
      <p>{name.firstName()}</p>
    </Bar>
  </Rank>
)

storiesOf('Molecules.Rank', module).add('default', () => <DefaultRank />)
