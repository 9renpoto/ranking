import { storiesOf } from '@storybook/react'
import { random, image } from 'faker'
import React from 'react'
import { Button } from './Button'
import { Box, Inner } from './Box'
import { Avatar } from './Avatar'
import { Hero } from './Hero'
import { Name } from './User'
import { Bar } from './Ranking'

storiesOf('atoms', module)
  .add('Avatar', () => <Avatar width={20} height={20} />)
  .add('Box', () => (
    <Box>
      <Inner>{random.words()}</Inner>
      <Inner>{random.words()}</Inner>
    </Box>
  ))
  .add('Button', () => <Button>{random.word()}</Button>)
  .add('Hero', () => <Hero>{random.words()}</Hero>)
  .add('RankBar', () => (
    <Bar style={{ width: `${random.number({ max: 100 })}%` }}>
      <Avatar width={0.938} height={0.938}>
        <img src={image.imageUrl(300, 300)} alt={random.word()} />
      </Avatar>
      <Name white padding={0}>
        {random.word()}
      </Name>
    </Bar>
  ))
