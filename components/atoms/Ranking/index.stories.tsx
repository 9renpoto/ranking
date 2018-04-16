import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Rank, RankBar } from '.'

storiesOf('Atoms.Rank', module).add('default', () =>
  <Rank>
    <span>1</span>
    <RankBar style={{width: '100%'}}>
      <img src="https://dummyimage.com/300x300/000/fff" alt="" />
      <p>name</p>
    </RankBar>
  </Rank>
)
