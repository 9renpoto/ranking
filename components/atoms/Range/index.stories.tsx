import { storiesOf } from '@storybook/react'
import { random } from 'faker'
import * as React from 'react'

import {
  EditRange,
  EditRangeInput,
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner,
  RangeValuation
} from '.'

storiesOf('Atoms.Range', module)
  .add('default', () => (
    <Range>
      <RangeInner>
        <RangeValuation>
          <p>{random.word()}</p>
          <p>{random.word()}</p>
        </RangeValuation>
        <RangeBar>
          <RangeBarThumb style={{ left: '50%' }} />
          <span />
          <span />
          <span />
          <span />
          <span />
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
          <span />
          <span />
          <span />
          <span />
          <span />
        </EditRange>
      </RangeInner>
    </Range>
  ))
