import { storiesOf } from '@storybook/react'
import { random } from 'faker'
import * as React from 'react'

import { ResultComment, ResultRank, ResultRankInner } from '.'

storiesOf('Atoms.Result', module).add('default', () => (
  <React.Fragment>
    <ResultRank>
      <ResultRankInner>
        <span>50人中</span>
        10位
      </ResultRankInner>
    </ResultRank>
    <ResultComment>{random.word()}</ResultComment>
  </React.Fragment>
))
