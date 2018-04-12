import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { ResultRank, ResultRankInner, ResultComment } from '.'

storiesOf('Atoms.Result', module).add('default', () =>
  <div>
    <ResultRank>
      <ResultRankInner>
        <span>50人中</span>
        10位
      </ResultRankInner>
    </ResultRank>
    <ResultComment>ここにコメントが入ります。ここにコメントが入ります。ここにコメントが入ります。ここにコメントが入ります。ここにコメントが入ります。ここにコメントが入ります。ここにコメントが入ります。</ResultComment>
  </div>
)
