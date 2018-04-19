import { storiesOf } from '@storybook/react'
import { image, random } from 'faker'
import * as React from 'react'

import { Rank, RankBar } from '.'

storiesOf('Atoms.Rank', module).add('default', () => (
  <Rank>
    <span>{random.number()}</span>
    <RankBar style={{ width: '100%' }}>
      <img src={image.imageUrl(300.3)} alt='' />
      <p>name</p>
    </RankBar>
  </Rank>
))
