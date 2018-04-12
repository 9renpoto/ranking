import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Range, RangeInner, RangeValuation, RangeBar, RangeBarThumb, EditRange, EditRangeInput } from '.'

storiesOf('Atoms.Range', module).add('default', () =>
  <Range>
    <RangeInner>
      <RangeValuation>
        <p>とても悪い</p>
        <p>とても良い</p>
      </RangeValuation>
      <RangeBar>
        <RangeBarThumb style={{left: '50%'}}></RangeBarThumb>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </RangeBar>
    </RangeInner>
  </Range>
)

storiesOf('Atoms.Range', module).add('input', () =>
  <Range>
    <RangeInner>
      <RangeValuation>
        <p>とても悪い</p>
        <p>とても良い</p>
      </RangeValuation>
      <EditRange>
        <EditRangeInput type="range" step="25" />
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </EditRange>
    </RangeInner>
  </Range>
)
