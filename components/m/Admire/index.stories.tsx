import { storiesOf } from '@storybook/react'
import { image, random } from 'faker'
import React from 'react'
import { Content, Inner as ContentInner } from '../../a/Content'
import { Img } from '../../a/ProfileImg'
import { Name } from '../../a/ProfileName'
import {
  EditRange,
  EditRangeInput,
  Range,
  RangeInner,
  RangeValue
} from '../../a/Range'
import { RangeValuation } from '../../a/RangeValuation'
import { Admire, Inner } from './'

export const DefaultAdmire = () => (
  <Admire>
    <Inner>
      <Img>
        <img src={image.imageUrl(300, 300)} alt={random.word()} />
      </Img>
      <Name>{random.word()}</Name>
    </Inner>
    <Range>
      <RangeInner>
        <RangeValuation>
          <p>{random.word()}</p>
          <p>{random.word()}</p>
        </RangeValuation>
        <EditRange>
          <EditRangeInput type='range' step='25' />
          <RangeValue style={{ left: '50%' }}>3</RangeValue>
        </EditRange>
      </RangeInner>
    </Range>
  </Admire>
)

storiesOf('Molecules.Admire', module).add('default', () => (
  <Content fixed>
    <ContentInner fixed>
      <DefaultAdmire />
      <DefaultAdmire />
      <DefaultAdmire />
      <DefaultAdmire />
    </ContentInner>
  </Content>
))
