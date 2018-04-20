import { storiesOf } from '@storybook/react'
import { image, name, random } from 'faker'
import React from 'react'

import { Admire, Name } from '.'
import { Content } from '../Content'
import {
  EditRange,
  EditRangeInput,
  Range,
  RangeBar,
  RangeBarThumb,
  RangeInner,
  RangeValuation
} from '../Range'

export const DefaultAdmire = () => (
  <Content fixed>
    <Name>
      <img src={image.imageUrl(300, 300)} alt={random.word()} />
      <p>{name.firstName()}</p>
    </Name>
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
  </Content>
)

storiesOf('Atoms.Admire', module).add('default', () => <DefaultAdmire />)
