import { storiesOf } from '@storybook/react'
import { image, name, random } from 'faker'
import React from 'react'
import { AdmireWrapper } from '../../a/AdmireWrapper'
import { Content, Inner } from '../../a/Content'
import { Img } from '../../a/ProfileImg'
import { Name } from '../../a/ProfileName'
import { Inner } from '../../a/ProfileWrapper'

import {
  EditRange,
  EditRangeInput,
  Range,
  RangeInner,
  RangeValuation
} from '../Range'

export const DefaultAdmire = () => (
  <Content fixed>
    <Inner fixed>
      <Admire>
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
      </Admire>
      <Admire>
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
      </Admire>
      <Admire>
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
      </Admire>
      <Admire>
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
      </Admire>
      <Admire>
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
      </Admire>
      <Admire>
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
      </Admire>
      <Admire>
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
      </Admire>
    </Inner>
  </Content>
)

storiesOf('Atoms.Admire', module).add('default', () => <DefaultAdmire />)
