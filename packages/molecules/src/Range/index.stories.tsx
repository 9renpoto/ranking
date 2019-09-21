import { storiesOf } from '@storybook/react'
import { random } from 'faker'
import React from 'react'
import {
  EditRange,
  EditRangeInput,
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner,
  RangeValue
} from '../../a/Range'

import { RangeValuation } from '../../a/RangeValuation'

storiesOf('Molecules.Range', module)
  .add('default', () => (
    <Range>
      <RangeInner>
        <RangeValuation>
          <p>{random.word()}</p>
          <p>{random.word()}</p>
        </RangeValuation>
        <RangeBar>
          <RangeBarThumb style={{ left: '50%' }} />
          <RangeValue style={{ left: '50%' }}>3</RangeValue>
        </RangeBar>
      </RangeInner>
    </Range>
  ))
  .add('input', () => (
    <Range>
      <RangeInner>
        <RangeValuation>
          <p>{random.word()}</p>
          <p>{random.word()}</p>
        </RangeValuation>
        <EditRange>
          <EditRangeInput type="range" step="25" />
          <RangeValue style={{ left: '50%' }}>3</RangeValue>
        </EditRange>
      </RangeInner>
    </Range>
  ))
