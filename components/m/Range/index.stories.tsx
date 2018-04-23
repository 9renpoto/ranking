import { storiesOf } from '@storybook/react'
import { random } from 'faker'
import * as React from 'react'

import {
  EditRange,
  EditRangeInput,
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner
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
          <EditRangeInput type='range' step='25' />
        </EditRange>
      </RangeInner>
    </Range>
  ))
