import { storiesOf } from '@storybook/react'
import { random } from 'faker'
import React from 'react'

import { DefaultRankBar } from '../../a/Ranking/index.stories'
import { Rank } from './'

export const DefaultRank = () => (
  <Rank>
    <span>{random.number()}</span>
    <DefaultRankBar />
  </Rank>
)

storiesOf('Molecules.Rank', module).add('default', () => <DefaultRank />)
