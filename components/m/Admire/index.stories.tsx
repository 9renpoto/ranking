import { storiesOf } from '@storybook/react'
import { image, random } from 'faker'
import React from 'react'
import { Avatar } from '../../a/Avatar'
import { Box, Inner as BoxInner } from '../../a/Box'
import {
  EditRange,
  EditRangeInput,
  Range,
  RangeInner,
  RangeValue
} from '../../a/Range'
import { RangeValuation } from '../../a/RangeValuation'
import { Name } from '../../a/User'
import { Admire, Inner } from './'

export const DefaultAdmire = () => (
  <Admire>
    <Inner>
      <Avatar width={2.5} height={2.5}>
        <img src={image.imageUrl(300, 300)} alt={random.word()} />
      </Avatar>
      <Name padding={0}>{random.word()}</Name>
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
  <Box fixed>
    <BoxInner fixed>
      <DefaultAdmire />
      <DefaultAdmire />
      <DefaultAdmire />
      <DefaultAdmire />
    </BoxInner>
  </Box>
))
