import { storiesOf } from '@storybook/react'
import { random } from 'faker'
import * as React from 'react'

import { ResultComment } from '../../a/ResultComment'
import { ResultRank, ResultRankInner } from '../../a/ResultRanking'

export const DefaultResult = () => (
  <React.Fragment>
    <ResultRank>
      <ResultRankInner>
        <span>50人中</span>
        10位
      </ResultRankInner>
    </ResultRank>
    <ResultComment>{random.word()}</ResultComment>
  </React.Fragment>
)

storiesOf('Molecules.Result', module).add('default', () => <DefaultResult />)
