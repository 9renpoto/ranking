import { storiesOf } from '@storybook/react'
import { image, name, random } from 'faker'
import React from 'react'

import { Bar } from '.'

export const DefaultRank = () => (
  <Bar style={{ width: `${random.number({ max: 100 })}%` }}>
    <img src={image.imageUrl(300, 300)} alt={random.word()} />
    <p>{name.firstName()}</p>
  </Bar>
)
